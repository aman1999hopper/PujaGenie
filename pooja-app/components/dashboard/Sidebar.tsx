// components/dashboard/Sidebar.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { Home, Calendar, Users, Settings, LogOut } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`bg-white shadow-lg border-r border-gray-200 transition-all duration-200
        ${collapsed ? "w-16" : "w-64"} overflow-hidden`}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="text-indigo-600 font-bold text-lg">PG</div>
            {!collapsed && <div className="font-semibold text-indigo-600">PujaGenie</div>}
          </Link>
          <button
            aria-label="Toggle sidebar"
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded hover:bg-gray-100"
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">
            <Home size={18} /> {!collapsed && <span>Overview</span>}
          </Link>

          <Link href="/dashboard/bookings" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">
            <Calendar size={18} /> {!collapsed && <span>Bookings</span>}
          </Link>

          <Link href="/dashboard/pujari" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">
            <Users size={18} /> {!collapsed && <span>Pujari</span>}
          </Link>

          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">
            <Settings size={18} /> {!collapsed && <span>Settings</span>}
          </Link>
        </nav>

        <div className="px-3 py-4 border-t">
          <div className="flex items-center gap-2">
            <SignOutButton>
              <button className="w-full text-left flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50">
                <LogOut size={18} /> {!collapsed && <span>Sign out</span>}
              </button>
            </SignOutButton>
          </div>
        </div>
      </div>
    </aside>
  );
}
