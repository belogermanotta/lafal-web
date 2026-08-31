import Image from "next/image";
import Link from "next/link";
import { Coffee } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Download", href: "/#download" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Support", href: "/support" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white dark:border-white/10 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-semibold text-gray-950 dark:text-white">
              <Image
                src="/logo-black.svg"
                alt="Lafal"
                width={32}
                height={32}
                className="h-8 w-8 dark:hidden"
              />
              <Image
                src="/logo-white.svg"
                alt="Lafal"
                width={32}
                height={32}
                className="hidden h-8 w-8 dark:block"
              />
              Lafal
            </Link>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              A private desktop assistant for writing, dictation, screen reading, and meeting notes.
            </p>
            <a
              href="https://buymeacoffee.com/lafal.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-gray-950 shadow-sm shadow-amber-400/30 transition hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-md hover:shadow-amber-400/40"
            >
              <Coffee size={16} />
              Buy me a coffee
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="text-right">
              <h4 className="text-sm font-semibold text-gray-950 dark:text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-black/5 pt-8 text-center text-sm text-gray-400 dark:border-white/10 dark:text-gray-500">
          &copy; {new Date().getFullYear()} Lafal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
