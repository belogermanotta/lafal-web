import { Check, Coffee } from "lucide-react";

const features = [
  "Unlimited local transcription",
  "Bring your own cloud API key",
  "100+ languages",
  "System-wide dictation on macOS",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-24 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Free to use with local models — no account or subscription
            required.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-sm rounded-2xl border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-gray-900/60">
          <h3 className="font-semibold text-gray-950 dark:text-white">Free</h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-semibold tracking-tight text-gray-950 dark:text-white">
              $0
            </span>
            <span className="text-gray-500 dark:text-gray-400">forever</span>
          </div>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Everything you need to get started with local dictation.
          </p>

          <ul className="mt-6 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <Check size={18} className="text-violet-600 dark:text-violet-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="mt-8 block rounded-full bg-gray-950 px-5 py-2.5 text-center text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            Download for free
          </a>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Enjoying Lafal? Consider{" "}
          <a
            href="https://buymeacoffee.com/lafal.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-amber-600 underline decoration-amber-600/40 underline-offset-2 transition hover:text-amber-500 dark:text-amber-400 dark:decoration-amber-400/40"
          >
            <Coffee size={14} />
            buying me a coffee
          </a>{" "}
          to support development.
        </p>
      </div>
    </section>
  );
}
