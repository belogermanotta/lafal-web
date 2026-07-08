import {
  Mic,
  SpellCheck2,
  Scissors,
  Wand2,
  FileText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
  tags?: string[];
};

const verdicts = [
  { label: "True", className: "bg-emerald-500" },
  { label: "Likely True", className: "bg-emerald-400/70" },
  { label: "Not Sure", className: "bg-amber-400" },
  { label: "Likely False", className: "bg-orange-500/70" },
  { label: "False", className: "bg-rose-500" },
  { label: "Not a Claim", className: "bg-gray-400 dark:bg-gray-600" },
];

const features: Feature[] = [
  {
    icon: Mic,
    title: "Speech to text",
    description:
      "Say it, don't type it. Lafal turns your voice into clean text at conversation speed — significantly faster than any keyboard.",
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    icon: SpellCheck2,
    title: "Proofread",
    description:
      "Grammar, spelling, and punctuation corrected right where you wrote it — no rewrites, no rewording, just a cleaner version of your own words.",
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    icon: Scissors,
    title: "Concise",
    description:
      "Cuts the filler, keeps the point. Shortens your text in place while preserving exactly what you meant to say.",
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    icon: Wand2,
    title: "Rephrase",
    description:
      "One idea, any voice. Rewrite what you wrote in the tone the moment calls for.",
    gradient: "from-violet-600 to-indigo-500",
    tags: ["Barbaric", "Casual", "Standard", "Formal"],
  },
  {
    icon: FileText,
    title: "Summarize",
    description:
      "Get the gist in seconds. Opens in a tidy popup you can copy from or close the moment you're done.",
    gradient: "from-violet-600 to-indigo-500",
  },
  {
    icon: ShieldCheck,
    title: "Fact check",
    description:
      "A six-level verdict on any claim — with a plain-English explanation, a source link when one's available, and a one-click Google fallback whenever the answer is inconclusive.",
    gradient: "from-violet-600 to-indigo-500",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
          Everything you need to type less
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          One app, two ways to transcribe — fully local for privacy, or cloud
          engines for speed and accuracy. Then let Lafal clean up, reshape,
          and check what you wrote.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description, gradient, tags }) => (
          <div
            key={title}
            className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-gray-900/60 dark:hover:bg-gray-900"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-sm transition group-hover:scale-105`}
            >
              <Icon size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-950 dark:text-white">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {description}
            </p>

            {tags && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/5 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {title === "Fact check" && (
              <div
                className="mt-4 flex items-center gap-1"
                title="Every claim gets one of six verdicts: True, Likely True, Not Sure, Likely False, False, or Not a Factual Claim."
              >
                {verdicts.map((v) => (
                  <span
                    key={v.label}
                    className={`h-1.5 flex-1 rounded-full ${v.className}`}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
