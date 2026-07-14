"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does dictation work without an internet connection?",
    answer:
      "Yes. Local models run entirely on-device and are optimized for Apple Silicon, so transcription keeps working even offline.",
  },
  {
    question: "Which cloud providers can I connect?",
    answer:
      "You can bring your own API key for OpenAI, Deepgram, Groq, Google, or Anthropic.",
  },
  {
    question: "Is my audio ever sent anywhere?",
    answer:
      "Only if you choose a cloud engine. Local mode processes everything on your device and nothing is uploaded.",
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
