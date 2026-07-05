import Image from "next/image";
import { MessageCircle, Mail, AtSign } from "lucide-react";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Download", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Comparisons", "Support", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Privacy", "Terms"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white dark:border-white/10 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="flex items-center gap-2 font-semibold text-gray-950 dark:text-white">
              <Image
                src="/logo.png"
                alt="Lafal"
                width={32}
                height={32}
                className="h-8 w-8 dark:invert"
              />
              Lafal
            </a>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Voice-to-text dictation for macOS and Windows
            </p>
            <div className="mt-4 flex gap-3 text-gray-400 dark:text-gray-500">
              <a href="#" aria-label="Twitter" className="hover:text-gray-700 dark:hover:text-gray-200">
                <AtSign size={18} />
              </a>
              <a href="#" aria-label="Discord" className="hover:text-gray-700 dark:hover:text-gray-200">
                <MessageCircle size={18} />
              </a>
              <a href="#" aria-label="Email" className="hover:text-gray-700 dark:hover:text-gray-200">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-gray-950 dark:text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
                    >
                      {link}
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
