# Mac App Store listing — info for Satria

Compiled for the Mac App Store submission checklist. Values here are what Emil sends
Satria to enter in App Store Connect. See `mac-app-store-submission-checklist.pdf` for
the full checklist this was drafted against.

## App text

| Field | Value |
|---|---|
| App name | `Lafal` |
| Subtitle | `Voice to Text Dictation` |
| Promotional text | `Fast, private voice-to-text for Mac. Transcribe offline with local models, or connect your own cloud engine. Proofread, summarize, rephrase, and fact-check as you write.` |
| Keywords | `voice,dictation,speech to text,transcription,proofreading,ai writing,offline` |
| Marketing URL | `https://lafal.ai` |
| Support URL | `https://lafal.ai/support` |
| Privacy Policy URL | `https://lafal.ai/privacy-policy` |
| Copyright | `2026 Werlion` |
| Category | Primary: `Productivity` — Secondary (optional): `Utilities` |

## Description

```
Lafal is a fast, private voice-to-text dictation app for Mac. Speak naturally and watch your words appear anywhere — transcribe fully offline with local models for total privacy, or connect your own cloud engine (OpenAI, Deepgram, Groq, and more) for maximum accuracy.

Everything stays on your device by default. No analytics, no trackers, no logs — what you say is yours alone.

Beyond dictation, Lafal helps you clean up and reshape what you write:

• Speech to text — turn your voice into clean text at conversation speed, faster than any keyboard
• Proofread — grammar, spelling, and punctuation fixed right where you wrote it
• Concise — cut the filler while keeping your meaning intact
• Rephrase — rewrite in the tone the moment calls for (Barbaric, Casual, Standard, Formal)
• Summarize — get the gist of any text in seconds
• Fact check — a six-level verdict on any claim, with a plain-English explanation and source links

Free to use with local models — no account or subscription required. Unlimited local transcription, support for 100+ languages, and the option to bring your own cloud API key when you want it.
```

(1126/4000 characters)

## Hotkeys (macOS)

| Key | Action |
|---|---|
| Right Command (⌘) | Start/stop dictation |
| Cmd+Alt+2 | Proofread — select text, fixes grammar/spelling/punctuation in place |
| Cmd+Alt+3 | Concise — select text, shortens while preserving meaning |
| Cmd+Alt+4 | Rephrase — select text, rewrites in a different tone |
| Cmd+Alt+5 | Summarize — select text, shows a popup with the summary |
| Fact check | Select text and press its hotkey — shows a popup with a six-level verdict. **Exact key combo not yet confirmed — fill in before submitting.** |

## Encryption

Answer: **Exempt / No** — only standard HTTPS is used for optional cloud API calls, no
custom encryption. Set `ITSAppUsesNonExemptEncryption` to `false` in `Info.plist` to
skip the upload prompt.

## Data collection (privacy)

- Local-only transcription: no data collected.
- Cloud transcription (opt-in): Audio Data — collected, not linked to identity, used
  for App Functionality only (sent directly from the user's device to their own
  OpenAI/Deepgram/Groq account using their own API key).
- **Needs confirmation** from whoever built the app on the exact data flow before
  finalizing the privacy questionnaire — this is a factual/legal disclosure.

## Demo login

Not needed — no account or subscription required to use Lafal.

## Notes for review

```
Lafal is a system-wide voice dictation and writing-assistant app for macOS.

To test:
1. Launch Lafal and grant Microphone and Accessibility permissions when prompted
   (required for the global hotkeys and inserting text into other apps).
2. Click into any text field in any application (e.g. TextEdit, Notes, or Safari).
3. Press the Right Command key (⌘) to start dictation, speak a sentence, then press
   it again to stop — the transcribed text is inserted at the cursor.
4. Select some text you've written and press:
   • Cmd+Alt+2 — Proofread (fixes grammar, spelling, and punctuation in place)
   • Cmd+Alt+3 — Concise (shortens the text while preserving its meaning)
   • Cmd+Alt+4 — Rephrase (rewrites the text in a different tone)
   • Cmd+Alt+5 — Summarize (select text, press the hotkey, a popup shows the summary)
5. Fact check works the same way as Summarize — select a claim, press its hotkey, and
   a popup shows a six-level verdict with a plain-English explanation.

All dictation and text-editing features above work fully offline with local models —
no account, login, or API key required. Cloud transcription is optional and requires
the user's own API key for OpenAI, Deepgram, or Groq; it is not needed to test core
functionality.
```

## Age rating

Likely **4+** (no violence/mature/gambling content). Unconfirmed edge case: Fact
check's "one-click Google fallback" opens external web content — double-check
Apple's web-access questionnaire answer for this.

## Still missing (can't be generated from this repo)

- **Screenshots** (1–10, exactly 2880×1800 or another listed 16:10 size, PNG, no
  transparency, real app UI) — must be captured from the actual running Mac build.
- **App preview video** (optional, up to 3, 15–30s, landscape) — same constraint.
- **Fact check's exact hotkey** — confirm and update the table above.
- **App icon** — not a separate upload for Mac; pulled from the build's own asset
  catalog (16–512px @1x/2x), a build-side task.
