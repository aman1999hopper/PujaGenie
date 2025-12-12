"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import {
  UserButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

export default function Navbar({ brand }: { brand: string }) {
  const [open, setOpen] = useState(false); // mobile menu
  const [poojaOpen, setPoojaOpen] = useState(false); // pooja dropdown

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="font-bold text-lg md:text-xl flex items-center gap-1"
        >
          {brand}
          <span className="text-indigo-400">.</span>
        </Link>

        {/* Desktop Navigation */}
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
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              )}
            </span>

            {/* Dropdown Box */}
            {poojaOpen && (
              <div className="absolute left-0 top-7 bg-white/90 text-gray-700 backdrop-blur border border-white/20 rounded-lg shadow-xl p-4 w-56 animate-fadeIn">
                <Link href="/pooja/satyanarayan" className="block py-2 hover:text-gray-900">
                  Satyanarayan Pooja
                </Link>
                <Link href="/pooja/grih-pravesh" className="block py-2 hover:text-gray-900">
                  Grih Pravesh Pooja
                </Link>
                <Link href="/pooja/marriage" className="block py-2 hover:text-gray-900">
                  Marriage Pooja
                </Link>
                <Link href="/pooja/havan" className="block py-2 hover:text-gray-900">
                  Havan / Homam
                </Link>
                <Link href="/pooja/navgrah" className="block py-2 hover:text-gray-900">
                  Navgrah Shanti Pooja
                </Link>
              </div>
            )}
          </div>

          <a href="#features" className="hover:text-indigo-300">Features</a>
          <Link href="/dashboard" className="block py-2">Dashboard
          </Link>
          <a href="#pricing" className="hover:text-indigo-300">Pricing</a>
          <a href="#contact" className="hover:text-indigo-300">Contact</a>

          {/* AUTH Buttons */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 rounded-md bg-indigo-500 text-black font-medium">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-2">
          {/* Mobile Pooja */}
          <div>
            <button
              className="w-full flex justify-between items-center py-2"
              onClick={() => setPoojaOpen(!poojaOpen)}
            >
              Pooja
              {poojaOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {poojaOpen && (
              <div className="pl-4 space-y-2 animate-fadeIn">
                <Link href="/pooja/satyanarayan" className="block py-1">Satyanarayan Pooja</Link>
                <Link href="/pooja/grih-pravesh" className="block py-1">Grih Pravesh Pooja</Link>
                <Link href="/pooja/marriage" className="block py-1">Marriage Pooja</Link>
                <Link href="/pooja/havan" className="block py-1">Havan / Homam</Link>
                <Link href="/pooja/navgrah" className="block py-1">Navgrah Shanti Pooja</Link>
              </div>
            )}
          </div>

          <a href="#features" className="block py-2">Features</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#contact" className="block py-2">Contact</a>

          {/* Mobile Auth */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="block w-full py-2 px-4 rounded-md bg-indigo-500 text-black text-center">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </header>
  );
}
