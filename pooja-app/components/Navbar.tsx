"use client";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { SignInButton } from "@clerk/nextjs";

export default function Navbar({
  brand,
  onAuthOpen,
}: {
  brand: string;
  onAuthOpen?: () => void;
}) {
  const [open, setOpen] = useState(false); // mobile menu
  const [poojaOpen, setPoojaOpen] = useState(false); // pooja dropdown

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/5 border-b border-white/6">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-bold text-lg md:text-xl flex items-center gap-2"
        >
          {brand}
          <span className="text-indigo-400">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {/* Pooja Dropdown */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setPoojaOpen(true)}
            onMouseLeave={() => setPoojaOpen(false)}
          >
            <span className="hover:text-indigo-300 flex items-center gap-1">
              Pooja
              {poojaOpen ? (
                <ChevronUp size={18} className="transition-all" />
              ) : (
                <ChevronDown size={18} className="transition-all" />
              )}
            </span>

            {poojaOpen && (
              <div className="absolute left-0 top-6 bg-white/90 text-gray-700 backdrop-blur border border-white/20 rounded-lg shadow-xl p-4 w-52 animate-fadeIn">
                <Link
                  href="/pooja/satyanarayan"
                  className="block py-2 hover:text-gray-950"
                >
                  Satyanarayan Pooja
                </Link>
                <Link
                  href="/pooja/grih-pravesh"
                  className="block py-2 hover:text-gray-950"
                >
                  Grih Pravesh Pooja
                </Link>
                <Link
                  href="/pooja/marriage"
                  className="block py-2 hover:text-gray-950"
                >
                  Marriage Pooja
                </Link>
                <Link
                  href="/pooja/havan"
                  className="block py-2 hover:text-gray-950"
                >
                  Havan / Homam
                </Link>
                <Link
                  href="/pooja/navgrah"
                  className="block py-2 hover:text-gray-950"
                >
                  Navgrah Shanti Pooja
                </Link>
              </div>
            )}
          </div>

          <a href="#features" className="hover:text-indigo-300">
            Features
          </a>
          <a href="#pricing" className="hover:text-indigo-300">
            Pricing
          </a>
          <a href="#contact" className="hover:text-indigo-300">
            Contact
          </a>
          <SignInButton mode="modal">
            <Link
              href="#cta"
              className="px-4 py-2 rounded-md bg-indigo-500 text-black font-medium"
              onClick={onAuthOpen}
            >
              Get Started
            </Link>
          </SignInButton>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-md"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-2">
          {/* Mobile Pooja Dropdown */}
          <div>
            <button
              onClick={() => setPoojaOpen(!poojaOpen)}
              className="w-full flex justify-between items-center py-2"
            >
              Pooja
              <span>{poojaOpen ? "▲" : "▼"}</span>
            </button>

            {poojaOpen && (
              <div className="pl-4 space-y-2 animate-fadeIn">
                <Link href="/pooja/satyanarayan" className="block py-1">
                  Satyanarayan Pooja
                </Link>
                <Link href="/pooja/grih-pravesh" className="block py-1">
                  Grih Pravesh Pooja
                </Link>
                <Link href="/pooja/marriage" className="block py-1">
                  Marriage Pooja
                </Link>
                <Link href="/pooja/havan" className="block py-1">
                  Havan / Homam
                </Link>
                <Link href="/pooja/navgrah" className="block py-1">
                  Navgrah Shanti Pooja
                </Link>
              </div>
            )}
          </div>

          <a href="#features" className="block py-2">
            Features
          </a>
          <a href="#pricing" className="block py-2">
            Pricing
          </a>
          <a href="#contact" className="block py-2">
            Contact
          </a>

          <a
            href="#cta"
            className="block py-2 px-4 rounded-md bg-indigo-500 text-black text-center mt-2"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
