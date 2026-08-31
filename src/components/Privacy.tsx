import { Cpu, EyeOff, FileText, CloudOff, type LucideIcon } from "lucide-react";

type Claim = {
  icon: LucideIcon;
  title: string;
  description: string;
  live?: boolean;
};

const claims: Claim[] = [
  {
    icon: Cpu,
    title: "Local by default",
    description:
      "Local models handle dictation, screen reading, and on-device writing on your machine. Your audio is transcribed locally; nothing is sent to Lafal.",
    live: true,
  },
  {
    icon: CloudOff,
    title: "Cloud is opt-in",
    description:
      "Bring your own provider and credentials. When you choose cloud writing or summarization, only the text needed for that request goes directly from your device to the service you selected.",
  },
  {
    icon: EyeOff,
    title: "No analytics or trackers",
    description: "No telemetry, usage tracking, fingerprinting, or third-party SDKs phoning home.",
  },
  {
    icon: FileText,
    title: "Your notes stay yours",
    description:
      "History, meeting and imported-media transcripts, recordings, and Markdown exports are stored locally and remain under your control.",
  },
];

export default function Privacy() {
  return (
    <section className="relative border-y border-black/5 bg-gray-50 py-20 dark:border-white/10 dark:bg-white/[0.02]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center blur-3xl"
      >
        <div className="h-[300px] w-[600px] bg-gradient-to-tr from-emerald-200 via-teal-100 to-emerald-200 opacity-40 dark:from-emerald-900 dark:via-teal-900 dark:to-emerald-900 dark:opacity-20" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700 uppercase dark:border-emerald-400/20 dark:text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Privacy by default
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
            Your data stays in your hands
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            No analytics. No trackers. No Lafal servers. What you say stays
            under your control.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {claims.map(({ icon: Icon, title, description, live }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-gray-900/60 dark:hover:bg-gray-900"
            >
              <div className="relative inline-flex">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-sm transition group-hover:scale-105">
                  <Icon size={20} />
                </div>
                {live ? (
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 dark:border-gray-900" />
                  </span>
                ) : null}
              </div>
              <h3 className="mt-4 font-semibold text-gray-950 dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
