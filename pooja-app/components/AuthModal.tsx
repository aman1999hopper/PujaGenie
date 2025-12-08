"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function AuthModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [tab, setTab] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Manage body scroll when modal is open
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      setTimeout(() => firstFieldRef.current?.focus(), 50);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  // Fake submit handlers — replace with real API calls / NextAuth later
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900)); // simulate network
    setLoading(false);
    onClose();
    router.push("/dashboard"); // redirect after login
  }

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    onClose();
    router.push("/dashboard");
  }

  // Click outside to close
  function handleBackdropClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="w-full max-w-xl rounded-xl bg-white/6 backdrop-blur border border-white/10 text-white shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold">{tab === "login" ? "Sign in" : "Create account"}</h3>
            <div className="text-sm text-gray-300 hidden sm:inline">
              {tab === "login" ? "Access your account" : "Join us — quick & secure"}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setTab(tab === "login" ? "signup" : "login")}
              className="text-sm px-3 py-1 rounded-md bg-white/3 hover:bg-white/5"
            >
              {tab === "login" ? "Create account" : "Have an account?"}
            </button>

            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="px-3 py-1 rounded-md hover:bg-white/4"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {tab === "login" ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  ref={firstFieldRef}
                  type="email"
                  required
                  className="w-full rounded-md px-3 py-2 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  required
                  className="w-full rounded-md px-3 py-2 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-500" />
                  <span className="text-gray-300">Remember me</span>
                </label>
                <a className="text-indigo-300 hover:underline" href="#">
                  Forgot?
                </a>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-md px-4 py-2 bg-indigo-500 text-black font-semibold disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign in"}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Full name</label>
                <input
                  ref={firstFieldRef}
                  type="text"
                  required
                  className="w-full rounded-md px-3 py-2 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-md px-3 py-2 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  required
                  className="w-full rounded-md px-3 py-2 bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-md px-4 py-2 bg-indigo-500 text-black font-semibold disabled:opacity-60"
                >
                  {loading ? "Creating..." : "Create account"}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer small */}
        <div className="px-6 py-3 border-t border-white/8 text-xs text-gray-300">
          By continuing you agree to our <a className="text-indigo-300 hover:underline" href="#">Terms</a>.
        </div>
      </div>
    </div>
  );
}
