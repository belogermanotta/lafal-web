import type { Metadata } from "next";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lafal — Private Dictation, Writing & Meeting Notes",
  description:
    "Lafal is a private desktop assistant for dictation, writing, screen reading, and meeting notes. Run local models on your device or connect your own provider.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
