import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support — Lafal",
  description:
    "Get help with Lafal — answers to common questions and how to reach us for support.",
};

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
    question: "Do I need an account to use Lafal?",
    answer:
      "No. Lafal is free to use with local models — no account or subscription required.",
  },
  {
    question: "How do I report a bug or request a feature?",
    answer:
      "Email us at lafal.ai@hotmail.com with as much detail as you can — what you were doing, what you expected, and what happened instead.",
  },
];

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-950 dark:text-white">
            Support
          </h1>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
            Answers to common questions, and how to reach us if you need more help.
          </p>

          <div className="mt-12 divide-y divide-black/10 border-y border-black/10 dark:divide-white/10 dark:border-white/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h2 className="font-medium text-gray-950 dark:text-white">
                  {faq.question}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-black/10 bg-gray-50 p-8 text-center dark:border-white/10 dark:bg-white/[0.02]">
            <h2 className="font-semibold text-gray-950 dark:text-white">
              Still need help?
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Send us an email and we&apos;ll get back to you as soon as we can.
            </p>
            <a
              href="mailto:lafal.ai@hotmail.com"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              <Mail size={16} />
              lafal.ai@hotmail.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
