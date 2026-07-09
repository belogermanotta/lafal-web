import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Lafal",
  description:
    "How Lafal handles your data: local-first transcription, no analytics, no trackers, and what happens when you opt into a cloud transcription engine.",
};

const sections = [
  {
    title: "Overview",
    body: [
      "Lafal is a voice-to-text dictation app for macOS, Windows & Linux. Privacy is a core design principle: by default, all transcription happens locally on your device using on-device models, and nothing you dictate is uploaded, logged, or analyzed.",
      "This policy explains what happens on this website, in the desktop app, and when you choose to use an optional cloud transcription engine.",
    ],
  },
  {
    title: "This website",
    body: [
      "lafal.ai does not use analytics, cookies, or third-party trackers. We don't collect personal information from visitors browsing this site.",
      "App installers are hosted on Google Drive. When you download Lafal, that download is subject to Google's own privacy policy.",
    ],
  },
  {
    title: "The Lafal app",
    body: [
      "Lafal contains no telemetry, no crash reporting, and no usage analytics. Your dictated audio and transcripts are processed and stored on your device and are never sent to us.",
      "App settings and local transcription history are stored locally on your device and are never transmitted anywhere unless you explicitly export or share them yourself.",
    ],
  },
  {
    title: "Optional cloud transcription engines",
    body: [
      "Lafal lets you optionally connect your own API key for cloud transcription engines (e.g. OpenAI, Deepgram, Groq) for higher accuracy. If you enable this, the audio you dictate is sent directly from your device to that provider using your own credentials — it never passes through Lafal's servers, because Lafal has none.",
      "Data sent to a cloud engine is handled according to that provider's own privacy policy and terms. Cloud transcription is entirely opt-in; local, on-device transcription remains the default.",
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
            Effective July 9, 2026
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
