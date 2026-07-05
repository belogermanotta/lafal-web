import {
  Globe2,
  WifiOff,
  Cloud,
  LayoutGrid,
  Smartphone,
  Bot,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Globe2,
    title: "100+ languages",
    description:
      "Dictate in your language of choice with accurate, natural transcription.",
  },
  {
    icon: WifiOff,
    title: "Offline & private",
    description:
      "Local models run entirely on-device, optimized for Apple Silicon. Nothing leaves your Mac.",
  },
  {
    icon: Cloud,
    title: "Bring your own cloud",
    description:
      "Connect OpenAI, Deepgram, Groq, Google, or Anthropic with your own API key.",
  },
  {
    icon: LayoutGrid,
    title: "Works everywhere",
    description:
      "System-wide dictation that drops your words into any app on macOS or Windows.",
  },
  {
    icon: Smartphone,
    title: "Native iOS keyboard",
    description:
      "A custom keyboard brings the same fast dictation to your iPhone and iPad.",
  },
  {
    icon: Bot,
    title: "Agentic actions",
    description:
      "Trigger voice-controlled automations and connect to coding agents over MCP.",
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
          engines for speed and accuracy.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-gray-900/60 dark:hover:bg-gray-900"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-500 text-white">
              <Icon size={20} />
            </div>
            <h3 className="mt-4 font-semibold text-gray-950 dark:text-white">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
