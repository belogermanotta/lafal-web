"use client";

import { useEffect, useState } from "react";
import { Apple, Monitor, Terminal, type LucideIcon } from "lucide-react";

type OS = "macos" | "windows" | "linux";

const platforms: Record<OS, { label: string; icon: LucideIcon; href: string }> = {
  macos: {
    label: "macOS",
    icon: Apple,
    href: "https://drive.google.com/drive/folders/1BG_SEjgHEE8WdkjzILVX3wa5UEaEsptT?usp=drive_link",
  },
  windows: {
    label: "Windows",
    icon: Monitor,
    href: "https://drive.google.com/drive/folders/1tKox6bme9AlwYrIfs5Gm1FEGdat9aGZ5?usp=drive_link",
  },
  linux: {
    label: "Linux",
    icon: Terminal,
    href: "https://drive.google.com/drive/folders/1CferfCJdJNI5cBzN6mgDZHz3TKzI_lmj?usp=drive_link",
  },
};

function detectOS(): OS {
  const ua = navigator.userAgent;
  if (/Win/i.test(ua)) return "windows";
  if (/Linux/i.test(ua) && !/Android/i.test(ua)) return "linux";
  return "macos";
}

export default function Hero() {
  const [os, setOs] = useState<OS>("macos");

  useEffect(() => {
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
        <h1 className="text-4xl font-semibold tracking-tight text-gray-950 sm:text-6xl dark:text-white">
          Voice-to-text dictation
          <br />
          for macOS, Windows &amp; Linux
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Speak naturally and watch your words appear anywhere. Transcribe
          offline with local models for total privacy, or plug in your
          favorite cloud engine for maximum accuracy.
        </p>

        <div id="download" className="mt-10 flex flex-col items-center justify-center gap-3">
          <a
            href={primary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-gray-950/10 transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            <primary.icon size={18} />
            Download for {primary.label}
          </a>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Also available for{" "}
            <a
              href={platforms[others[0]].href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600 dark:hover:text-gray-300"
            >
              {platforms[others[0]].label}
            </a>{" "}
            and{" "}
            <a
              href={platforms[others[1]].href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-600 dark:hover:text-gray-300"
            >
              {platforms[others[1]].label}
            </a>
          </p>
        </div>

        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
          Free to start &middot; No account required for local transcription
        </p>
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
