import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Lafal",
  description:
    "How Lafal handles your data: local-first processing, no analytics, no trackers, and what happens when you opt into a cloud AI provider.",
};

const sections = [
  {
    title: "Overview",
    body: [
      "Lafal is a private desktop assistant for macOS, Windows & Linux. Privacy is a core design principle: by default, dictation, screen reading, meeting processing, and imported-media transcription happen locally on your device, and nothing you create is sent to Lafal.",
      "This policy explains what happens on this website, in the desktop app, and when you choose to use an optional cloud AI provider.",
    ],
  },
  {
    title: "This website",
    body: [
      "lafal.ai does not use analytics, cookies, or third-party trackers. We don't collect personal information from visitors browsing this site.",
      "App downloads are served from the public download assets linked on this site. Downloading an installer does not create a Lafal account or send your app content to us.",
    ],
  },
  {
    title: "The Lafal app",
    body: [
      "Lafal contains no telemetry, no crash reporting, and no usage analytics. Your dictated audio, screen-reading captures, meeting transcripts, imported-media transcripts, summaries, recordings, and text history are processed and stored on your device and are never sent to Lafal.",
      "App settings, text history, meeting notes, and recordings are stored locally on your device. Lafal may write local operational logs for troubleshooting; these are not sent to us. You choose if and where to export or share your content.",
    ],
  },
  {
    title: "Optional cloud AI providers",
    body: [
      "Lafal lets you optionally connect your own API key for Claude, ChatGPT/OpenAI, Gemini, Grok, or DeepSeek for higher-quality writing and summaries. You can also connect an Ollama, llama-server, or other OpenAI-compatible server that you run yourself. Dictation, meeting, and imported-media audio are transcribed locally first; if you enable a cloud provider, the text needed for proofreading or summarization is sent directly from your device to that provider using your own credentials — it never passes through Lafal's servers, because Lafal has none.",
      "Data sent to a cloud provider is handled according to that provider's own privacy policy and terms. Cloud writing and summarization are entirely opt-in; local, on-device processing remains the default.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "Lafal is not directed at children and we do not knowingly collect information from children.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. Changes will be posted on this page with an updated effective date.",
    ],
  },
  {
    title: "Contact us",
    body: [
      "Questions about this policy? Reach out at privacy@lafal.ai.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h1 className="text-4xl font-semibold tracking-tight text-gray-950 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Effective August 31, 2026
          </p>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-gray-950 dark:text-white">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3">
                  {section.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-gray-600 dark:text-gray-400"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
