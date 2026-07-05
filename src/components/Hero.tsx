import { Apple, Monitor } from "lucide-react";

export default function Hero() {
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
          for macOS, Windows &amp; iOS
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Speak naturally and watch your words appear anywhere. Transcribe
          offline with local models for total privacy, or plug in your
          favorite cloud engine for maximum accuracy.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            id="download"
            href="#"
            className="flex items-center gap-2 rounded-full bg-gray-950 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-gray-950/10 transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            <Apple size={18} />
            Download for macOS
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"
          >
            <Monitor size={18} />
            Download for Windows
          </a>
        </div>

        <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
          Free to start &middot; No account required for local transcription
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-24">
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
