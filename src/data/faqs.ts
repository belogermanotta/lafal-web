export type FaqEntry = {
  question: string;
  answer: string;
};

export const faqs: FaqEntry[] = [
  {
    question: "Does dictation work without an internet connection?",
    answer:
      "Yes. After the one-time download, Lafal's local speech model can transcribe on your device without an internet connection. Local text models and local screen reading can work offline too.",
  },
  {
    question: "What happens to my audio?",
    answer:
      "Dictation, meeting recordings, and imported audio/video are transcribed locally on your device. If you choose a cloud provider for proofreading or a summary, Lafal sends the text needed for that request directly to the provider you configured — not to Lafal.",
  },
  {
    question: "Which cloud providers can I connect?",
    answer:
      "Bring your own API key for Claude, ChatGPT/OpenAI, Gemini, Grok, or DeepSeek. You can also connect an Ollama, llama-server, or other OpenAI-compatible server that you run yourself.",
  },
  {
    question: "What is Lafalify?",
    answer:
      "Lafalify is Lafal's screen reader. Press its hotkey, drag over text anywhere on your screen, and local OCR and speech synthesis read it aloud while highlighting the text as it goes.",
  },
  {
    question: "Can Lafal summarize meetings?",
    answer:
      "Yes. Start a recording from the system tray. Lafal transcribes in the background, captures system audio when supported, and saves a titled note with a timestamped transcript, summary, and recording. You can also export it as Markdown to a folder you choose.",
  },
  {
    question: "Can I import an existing recording?",
    answer:
      "Yes. From Home, choose an audio or video file and process it as either a meeting note or a concise summary. Lafal extracts the audio, transcribes it in timestamped chunks, and saves the resulting note locally.",
  },
  {
    question: "What does Linux and Wayland support look like?",
    answer:
      "Lafal ships a Linux x86_64 build. On Wayland, wl-clipboard can capture selected text and wtype can paste results into native Wayland apps; compositor keybinds can relay actions when X11 global hotkeys are unavailable.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. Lafal has no required account or subscription. Local features are available without an API key, and cloud providers use credentials that you supply yourself.",
  },
];
