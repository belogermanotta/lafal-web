import {
  Bot,
  Cpu,
  FileUp,
  History,
  Mic,
  NotebookPen,
  Play,
  Sparkles,
  Volume2,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  gradient: string;
  tags: string[];
};

const features: Feature[] = [
  {
    icon: Sparkles,
    eyebrow: "Write",
    title: "A writing toolkit in every app",
    description:
      "Proofread, rephrase, summarize, fact-check, or turn a rough thought into a structured AI Prompt. Select text, press a shortcut, and stay in context.",
    gradient: "from-violet-600 to-fuchsia-500",
    tags: ["Proofread", "Rephrase", "AI Prompt", "Summarize", "Fact-check"],
  },
  {
    icon: Mic,
    eyebrow: "Dictate",
    title: "Speech to text, wherever you type",
    description:
      "Hold a hotkey and speak, then release. Local Whisper transcribes and types at your cursor, with multilingual models and push-to-talk or toggle activation.",
    gradient: "from-indigo-600 to-violet-500",
    tags: ["Local Whisper", "Multilingual", "Configurable hotkeys"],
  },
  {
    icon: Play,
    eyebrow: "Experiment",
    title: "A built-in Playground",
    description:
      "Try every writing action on pasted text inside Lafal. Compare the original and result without selecting text in another app, then report an issue in one click if needed.",
    gradient: "from-sky-600 to-indigo-500",
    tags: ["Five actions", "Side-by-side result", "No app switching"],
  },
  {
    icon: Volume2,
    eyebrow: "Listen",
    title: "Read any part of your screen",
    description:
      "Lafalify combines local OCR and speech. Drag over a region, hear it aloud, and follow row and word highlights with pause, skip, speed, volume, and voice controls.",
    gradient: "from-cyan-600 to-blue-500",
    tags: ["Local OCR", "Local voices", "Wayland support"],
  },
  {
    icon: NotebookPen,
    eyebrow: "Remember",
    title: "Meeting notes that cite the moment",
    description:
      "Record from the tray while Lafal transcribes in the background. Notes include a title, summary, timestamped source references, transcript, and recording.",
    gradient: "from-fuchsia-600 to-violet-500",
    tags: ["System audio", "Timestamps", "Markdown export"],
  },
  {
    icon: FileUp,
    eyebrow: "Import",
    title: "Turn recordings into useful notes",
    description:
      "Choose an existing audio or video file and process it as a meeting note or focused summary. Audio is extracted and transcribed in bounded, timestamped chunks.",
    gradient: "from-rose-600 to-orange-500",
    tags: ["Audio + video", "Meeting or summary", "Local transcription"],
  },
  {
    icon: Cpu,
    eyebrow: "Stay local",
    title: "Models that run on your machine",
    description:
      "Choose independent local tiers for writing, speech, and voices. Lafal downloads each model once, caches it, and can keep working without an account or API key.",
    gradient: "from-emerald-600 to-teal-500",
    tags: ["Text", "Speech", "Voices", "GPU acceleration"],
  },
  {
    icon: Bot,
    eyebrow: "Choose",
    title: "Bring the provider you trust",
    description:
      "Connect Claude, OpenAI, Gemini, Grok, DeepSeek, Ollama, or another OpenAI-compatible server. Refresh model lists on demand while built-in choices remain available offline.",
    gradient: "from-amber-500 to-orange-500",
    tags: ["Your API key", "Model refresh", "OpenAI-compatible"],
  },
  {
    icon: History,
    eyebrow: "Own your work",
    title: "Searchable history, portable notes",
    description:
      "Browse past transformations and saved meeting or media notes in one place. Keep configurable local history and export Markdown, transcripts, and recordings to your folders.",
    gradient: "from-slate-600 to-gray-500",
    tags: ["Search", "Retention controls", "Local files"],
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold tracking-[0.2em] text-violet-600 uppercase dark:text-violet-400">
          One app, less friction
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] text-balance text-gray-950 sm:text-5xl dark:text-white">
          From first thought to a note you can use
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          Lafal brings voice, writing, screen reading, and meeting memory into
          one private desktop workflow.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, eyebrow, title, description, gradient, tags }) => (
          <article
            key={title}
            className="group relative overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/5 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-white/15 dark:hover:bg-white/[0.055]"
          >
            <div
              aria-hidden
              className={`absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition duration-500 group-hover:opacity-15`}
            />
            <div className="flex items-center justify-between gap-4">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-sm transition duration-300 group-hover:scale-105`}
              >
                <Icon size={20} />
              </div>
              <span className="text-[10px] font-semibold tracking-[0.18em] text-gray-400 uppercase dark:text-gray-500">
                {eyebrow}
              </span>
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {description}
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/[0.06] bg-gray-50 px-2.5 py-1 text-[11px] font-medium text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
