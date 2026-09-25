import {
  CircleCheck,
  Cpu,
  History,
  Home,
  Keyboard,
  Mic,
  Play,
  Settings,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Playground", icon: Play },
  { label: "Models", icon: Cpu },
  { label: "History", icon: History },
  { label: "Settings", icon: Settings },
];

const shortcutSets = {
  macos: ["⌘⌥⌃ F1", "⌘⌥⌃ F2", "⌘⌥⌃ F3", "Right ⌘"],
  windows: ["Ctrl Win P", "Ctrl Win R", "Ctrl Win C", "Right Alt"],
  linux: ["Ctrl Alt 1", "Ctrl Alt 3", "Ctrl Alt 2", "Right Alt"],
};

const actionDetails = [
  { label: "Proofread", icon: CircleCheck },
  { label: "Rephrase", icon: WandSparkles },
  { label: "AI Prompt", icon: Sparkles, featured: true },
  { label: "Speech to Text", icon: Mic },
];

const platformLabels = {
  macos: "macOS",
  windows: "Windows",
  linux: "Linux",
};

export default function AppPreview({
  platform,
}: {
  platform: "macos" | "windows" | "linux";
}) {
  const actions = actionDetails.map((action, index) => ({
    ...action,
    shortcut: shortcutSets[platform][index],
  }));

  return (
    <div className="relative mx-auto w-full max-w-[650px] lg:mx-0">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-violet-500/20 via-fuchsia-400/10 to-cyan-400/20 blur-3xl"
      />

      <div className="overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#0d0e14] shadow-2xl shadow-violet-950/30 ring-1 ring-black/20">
        <div className="flex h-11 items-center border-b border-white/10 bg-white/[0.035] px-4">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="mx-auto -translate-x-5 text-[11px] font-medium text-white/45">
            Lafal · {platformLabels[platform]}
          </span>
        </div>

        <div className="grid min-h-[410px] grid-cols-[132px_1fr] sm:grid-cols-[164px_1fr]">
          <aside className="flex flex-col border-r border-white/10 bg-black/20 p-3 sm:p-4">
            <div className="mb-5 flex items-center gap-2 px-2 text-sm font-semibold text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500 text-white">
                <Keyboard size={14} />
              </div>
              Lafal
            </div>

            <nav className="space-y-1" aria-label="App preview navigation">
              {navItems.map(({ label, icon: Icon, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-[11px] sm:text-xs ${
                    active
                      ? "bg-violet-500/15 font-medium text-violet-300"
                      : "text-white/45"
                  }`}
                >
                  <Icon size={14} />
                  {label}
                </div>
              ))}
            </nav>

            <div className="mt-auto px-2 pb-1">
              <div className="flex items-center gap-2 text-[10px] text-white/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,.8)]" />
                Ready · Local
              </div>
            </div>
          </aside>

          <div className="p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold tracking-[0.18em] text-violet-300 uppercase">
                  Your shortcuts
                </p>
                <h3 className="mt-1.5 text-lg font-semibold text-white sm:text-xl">
                  Work without breaking flow
                </h3>
              </div>
              <div className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[9px] font-medium text-emerald-300 sm:block">
                Private by default
              </div>
            </div>

            <div className="mt-6 space-y-2.5">
              {actions.map(({ label, shortcut, icon: Icon, featured }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 transition ${
                    featured
                      ? "border-violet-400/30 bg-violet-500/10"
                      : "border-white/[0.07] bg-white/[0.025]"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      featured
                        ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20"
                        : "bg-white/[0.06] text-white/65"
                    }`}
                  >
                    <Icon size={15} />
                  </div>
                  <span className="text-xs font-medium text-white/85 sm:text-sm">
                    {label}
                  </span>
                  <kbd className="ml-auto rounded-md border border-white/10 bg-black/20 px-2 py-1 font-mono text-[8px] text-white/45 sm:text-[10px]">
                    {shortcut}
                  </kbd>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[10px] leading-relaxed text-white/35 sm:text-[11px]">
              Select text anywhere, use a shortcut, and keep moving. Or open
              Playground to test every action inside Lafal.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 -bottom-5 hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#171820]/95 px-4 py-3 shadow-xl backdrop-blur sm:flex">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-violet-500/15 text-violet-300">
          <Mic size={16} />
          <span className="absolute -right-0.5 -bottom-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#171820] bg-emerald-400" />
        </div>
        <div>
          <p className="text-[10px] font-medium text-white/80">Listening locally</p>
          <div className="mt-1 flex items-end gap-0.5" aria-hidden>
            {[5, 9, 6, 12, 8, 4, 10, 6].map((height, index) => (
              <span
                key={index}
                className="w-0.5 rounded-full bg-violet-400"
                style={{ height }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
