import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Support — Lafal",
  description:
    "Get help with Lafal — answers to common questions and how to reach us for support.",
};

const supportFaqs = [
  ...faqs,
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
            {supportFaqs.map((faq) => (
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
