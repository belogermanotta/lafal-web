"use client";

import { useEffect, useState } from "react";
import {
  Apple,
  ArrowRight,
  Check,
  Monitor,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import AppPreview from "@/components/AppPreview";

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
    <section className="relative overflow-hidden border-b border-black/5 dark:border-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-52 -z-10 flex justify-center blur-3xl"
      >
        <div className="h-[680px] w-[1100px] rounded-full bg-gradient-to-tr from-violet-300 via-fuchsia-200 to-cyan-200 opacity-55 dark:from-violet-800 dark:via-fuchsia-950 dark:to-cyan-950 dark:opacity-40" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-16 pb-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:pt-24 lg:pb-28">
        <div className="text-center lg:text-left">
          <Link
            href="/changelog"
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-700 transition hover:bg-violet-500/15 dark:text-violet-300"
          >
            <span className="rounded-full bg-violet-600 px-2 py-0.5 text-[9px] font-bold tracking-wide text-white uppercase">
              New
            </span>
            AI Prompt and a sharper cross-platform experience
            <ArrowRight size={13} />
          </Link>

          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.045em] text-balance text-gray-950 sm:text-6xl lg:text-7xl dark:text-white">
            Speak it. Shape it.{" "}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400">
              Keep it yours.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-600 lg:mx-0 dark:text-gray-400">
            Dictate, improve writing, read your screen, and turn conversations
            into useful notes. Lafal keeps the local path open at every step.
          </p>

          <div
            id="download"
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={primary.href}
              {...linkProps(primary.href)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gray-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-gray-950/10 transition hover:-translate-y-0.5 hover:bg-gray-800 sm:w-auto dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              <primary.icon size={18} />
              Download for {primary.label}
            </a>
            <Link
              href="/#features"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-6 py-3.5 text-sm font-semibold text-gray-800 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Explore features
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500 lg:justify-start dark:text-gray-400">
            {["Free", "No account", "Local models"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <Check size={13} className="text-emerald-500" /> {item}
              </span>
            ))}
          </div>

          {others.length > 0 && (
            <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
              Also available for{" "}
              {others.map((key, index) => (
                <span key={key}>
                  {index > 0 && " and "}
                  <a
                    href={platforms[key].href}
                    {...linkProps(platforms[key].href)}
                    className="underline decoration-black/20 underline-offset-2 hover:text-gray-600 dark:decoration-white/20 dark:hover:text-gray-300"
                  >
                    {platforms[key].label}
                  </a>
                </span>
              ))}
            </p>
          )}
        </div>

        <AppPreview platform={os} />
      </div>

      <div className="border-t border-black/5 bg-white/40 dark:border-white/10 dark:bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-black/5 px-6 dark:divide-white/10">
          {[
            ["3", "desktop platforms"],
            ["0", "required accounts"],
            ["100%", "local option"],
          ].map(([value, label]) => (
            <div key={label} className="px-3 py-5 text-center sm:py-6">
              <div className="text-lg font-semibold text-gray-950 sm:text-xl dark:text-white">
                {value}
              </div>
              <div className="mt-0.5 text-[10px] text-gray-500 sm:text-xs dark:text-gray-400">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
