import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, Sparkles } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Changelog — Lafal",
  description:
    "Recent Lafal desktop updates: media import, local speech and voice models, richer meeting notes, and improved Linux support.",
};

const updates = [
  {
    version: "September 2026",
    date: "September 24, 2026",
    title: "Faster flow, stronger foundations",
    intro:
      "This update makes Lafal easier to use across the apps and platforms already in your day, while tightening the local experience underneath.",
    items: [
      [
        "Meet AI Prompt",
        "The former Concise action is now AI Prompt: turn a rough request into a clear, structured instruction for another AI agent, then review it before sending.",
      ],
      [
        "A more useful Playground",
        "Try Proofread, Rephrase, AI Prompt, Summarize, and Fact Check inside Lafal, with clearer results and a direct report-an-issue path.",
      ],
      [
        "Better macOS controls",
        "Actions now use a predictable F1–F6 shortcut row, Speech to Text supports an optional second binding, and meeting system-audio capture is more reliable.",
      ],
      [
        "Smoother Lafalify on Linux",
        "Wayland selection, pointer behavior, Escape handling, overlay positioning, and native text highlighting received a broad reliability pass.",
      ],
      [
        "More dependable local models",
        "First-run downloads and startup now get the time they actually need, with clearer recovery when a packaged runtime needs to be refreshed.",
      ],
    ],
  },
  {
    version: "1.0.0",
    date: "August 31, 2026",
    title: "A fuller local assistant",
    intro:
      "Lafal now covers more of the path from spoken words to durable notes, while keeping local processing at the center.",
    items: [
      [
        "Import existing media",
        "Choose an audio or video file from Home and process it as a meeting note or a concise summary.",
      ],
      [
        "Separate local model controls",
        "Pick independent tiers for text transformations, speech-to-text accuracy, and local reading voices.",
      ],
      [
        "Richer meeting notes",
        "Record in the background with timestamps, optional system audio when supported, saved recordings, and Markdown export to a folder you choose.",
      ],
      [
        "QuickNote summaries",
        "Send concise imported-media summaries to a readable QuickNote folder alongside your own notes.",
      ],
      [
        "Model discovery",
        "Refresh the models available to your configured cloud provider, including DeepSeek, while keeping built-in choices as a fallback.",
      ],
      [
        "Better Linux workflows",
        "Wayland users can use wl-clipboard and wtype for native selection and paste flows, with compositor keybind relays for actions when global X11 hotkeys are unavailable.",
      ],
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-violet-700 uppercase dark:text-violet-300">
            <Sparkles size={14} />
            Product updates
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-950 dark:text-white">
            Changelog
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            The useful bits we keep adding to Lafal.
          </p>

          <div className="mt-14 space-y-12">
            {updates.map((update) => (
              <article key={update.version}>
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="rounded-full bg-gray-950 px-3 py-1 font-semibold text-white dark:bg-white dark:text-gray-950">
                    {update.version === "1.0.0" ? `v${update.version}` : update.version}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays size={15} />
                    {update.date}
                  </span>
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-gray-950 dark:text-white">
                  {update.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {update.intro}
                </p>
                <ul className="mt-7 space-y-5">
                  {update.items.map(([title, description]) => (
                    <li
                      key={title}
                      className="rounded-2xl border border-black/5 bg-gray-50 p-5 dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <h3 className="font-semibold text-gray-950 dark:text-white">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {description}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-14 border-t border-black/10 pt-8 dark:border-white/10">
            <Link
              href="/#download"
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-500 dark:text-violet-400"
            >
              Download Lafal
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
