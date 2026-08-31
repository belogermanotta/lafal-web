"use client";

import { useEffect, useState } from "react";
import { Apple, Monitor, Terminal, type LucideIcon } from "lucide-react";
import Link from "next/link";

type OS = "macos" | "windows" | "linux";

const platforms: Record<OS, { label: string; icon: LucideIcon; href: string }> = {
  macos: {
    label: "macOS",
    icon: Apple,
    href: "/downloads/macos/1.0.0/Lafal-macos-arm64.zip",
  },
  windows: {
    label: "Windows",
    icon: Monitor,
    href: "/downloads/windows/1.0.0/LafalSetup.exe",
  },
  linux: {
    label: "Linux",
    icon: Terminal,
    href: "https://github.com/belogermanotta/lafal-web/releases/download/linux-build-2026-08-31/Lafal-linux-x86_64.tar.gz",
  },
};

function detectOS(): OS {
  const ua = navigator.userAgent;
  if (/Win/i.test(ua)) return "windows";
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) return "linux";
  return "macos";
}

function linkProps(href: string) {
  if (href.startsWith("/")) return { download: true };
  return { target: "_blank", rel: "noopener noreferrer" };
}

export default function Hero() {
  const [os, setOs] = useState<OS>("macos");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- browser-only OS detection after hydration
    setOs(detectOS());
  }, []);

  const primary = platforms[os];
  const others = (Object.keys(platforms) as OS[]).filter((key) => key !== os);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center blur-3xl"
      >
        <div className="h-[480px] w-[780px] bg-gradient-to-tr from-violet-300 via-fuchsia-200 to-indigo-300 opacity-50 dark:from-violet-800 dark:via-fuchsia-900 dark:to-indigo-900 dark:opacity-40" />
      </div>

      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300">
          <span className="rounded-full bg-violet-600 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white">
            v1.0.0
          </span>
          Import recordings, choose local speech voices, and export richer notes
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-6xl dark:text-white">
          Your words, written,
          <br />
          read, and remembered
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Lafal is a private desktop assistant for dictation, writing,
          on-screen reading, and meeting notes. Use local models by default,
          with your own cloud provider available when you need it.
        </p>

        <div id="download" className="mt-10 flex flex-col items-center justify-center gap-3">
          <a
            href={primary.href}
            {...linkProps(primary.href)}
            className="flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-gray-950/10 transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            <primary.icon size={18} />
            Download for {primary.label}
          </a>
          {others.length > 0 && (
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Also available for{" "}
              {others.map((key, index) => (
                <span key={key}>
                  {index > 0 && " and "}
                  <a
                    href={platforms[key].href}
                    {...linkProps(platforms[key].href)}
                    className="underline hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    {platforms[key].label}
                  </a>
                </span>
              ))}
            </p>
          )}
        </div>

        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
          Free to start &middot; No account required for local transcription
        </p>
        <Link
          href="/changelog"
          className="mt-4 inline-block text-xs font-medium text-violet-600 underline decoration-violet-600/30 underline-offset-4 transition hover:text-violet-500 dark:text-violet-400"
        >
          See what&apos;s new →
        </Link>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24" style={{ display: "none" }}>
        <div className="rounded-2xl border border-black/10 bg-gradient-to-b from-gray-50 to-white p-2 shadow-2xl shadow-gray-950/10 dark:border-white/10 dark:from-gray-900 dark:to-gray-950">
          <div className="flex items-center gap-1.5 rounded-t-xl bg-gray-100 px-4 py-3 dark:bg-gray-800">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex aspect-video items-center justify-center rounded-b-xl bg-gray-950">
            <div className="flex items-center gap-3 rounded-full bg-white/10 px-6 py-4 backdrop-blur">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-violet-500" />
              </span>
              <span className="font-mono text-sm text-gray-200">
                Listening&hellip;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
