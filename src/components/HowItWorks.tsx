import { CheckCircle2, MousePointer2, WandSparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MousePointer2,
    title: "Choose your input",
    description:
      "Speak, select text, drag over your screen, start a meeting, or import a recording.",
  },
  {
    number: "02",
    icon: WandSparkles,
    title: "Let Lafal work",
    description:
      "Use a shortcut or the app. Pick a local model, your own server, or an optional cloud provider.",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Keep the result",
    description:
      "Text returns where you need it, while notes, transcripts, and history stay under your control.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="border-y border-black/5 bg-gray-50 py-24 dark:border-white/10 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-violet-600 uppercase dark:text-violet-400">
            Designed for flow
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-gray-950 sm:text-5xl dark:text-white">
            Useful in three quiet steps
          </h2>
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-400">
            No account setup, browser tab, or new habit required.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <article
              key={number}
              className="relative rounded-3xl border border-black/[0.07] bg-white p-7 dark:border-white/10 dark:bg-[#111219]"
            >
              <span className="absolute top-6 right-7 font-mono text-xs text-gray-300 dark:text-gray-700">
                {number}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                <Icon size={20} />
              </div>
              <h3 className="mt-7 text-lg font-semibold text-gray-950 dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
