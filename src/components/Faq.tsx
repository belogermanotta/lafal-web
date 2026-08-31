"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does dictation work without an internet connection?",
    answer:
      "Yes. Lafal's bundled local models run on your device, so dictation and the core writing tools can keep working offline after the one-time model download.",
  },
  {
    question: "Which cloud providers can I connect?",
    answer:
      "You can bring your own API key for Claude, ChatGPT/OpenAI, Gemini, or Grok. You can also connect an Ollama, llama-server, or other OpenAI-compatible server that you run yourself.",
  },
  {
    question: "Is my audio ever sent anywhere?",
    answer:
      "Only when you choose a cloud provider. Local dictation, local models, Lafalify's screen reading, and saved meeting notes stay on your device. Cloud requests go directly from Lafal to the provider you configured.",
  },
  {
    question: "What is Lafalify?",
    answer:
      "Lafalify is Lafal's screen reader. Press its hotkey, drag over text anywhere on your screen, and Lafal uses local OCR and speech synthesis to read it aloud while highlighting the text as it goes.",
  },
  {
    question: "Can Lafal summarize meetings?",
    answer:
      "Yes. Start a recording from the system tray. Lafal transcribes the meeting in the background, optionally captures system audio when supported, and saves a searchable note with a generated title, summary, full transcript, and audio recording.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. Lafal has no required account or subscription. Local features are available without an API key, and cloud providers use credentials that you supply yourself.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-center text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl dark:text-white">
        Frequently asked questions
      </h2>

      <div className="mt-12 divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-medium text-gray-950 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-gray-500 transition-transform dark:text-gray-400 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
