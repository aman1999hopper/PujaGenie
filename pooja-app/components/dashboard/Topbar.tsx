// components/dashboard/Topbar.tsx
"use client";
import { UserButton } from "@clerk/nextjs";
import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-semibold">Overview</h2>

        <div className="hidden sm:flex items-center bg-gray-50 border rounded-md px-3 py-1">
          <Search size={16} className="text-gray-500" />
          <input
            placeholder="Search bookings, pujaris..."
            className="ml-2 bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded hover:bg-gray-50">
          <Bell size={18} />
        </button>
        <div>
          <UserButton />
        </div>
      </div>
    </header>
  );
}
