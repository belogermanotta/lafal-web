"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Changelog", href: "/changelog" },
  { label: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/75 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0f]/75">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-gray-950 dark:text-white">
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

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/#download"
            className="rounded-full bg-gray-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
          >
            Download
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="text-gray-950 dark:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/5 px-6 py-4 dark:border-white/10 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-600 dark:text-gray-400"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/#download"
              className="rounded-full bg-gray-950 px-4 py-2 text-center text-sm font-medium text-white dark:bg-white dark:text-gray-950"
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
