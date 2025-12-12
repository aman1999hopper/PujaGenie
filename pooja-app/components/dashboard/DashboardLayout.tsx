// components/layout/DashboardLayout.tsx
import { ReactNode, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  Home,
  BookOpen,
  Settings,
  Menu,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: open ? 250 : 80 }}
        className="bg-white shadow-xl flex flex-col py-6 px-3 overflow-hidden"
      >
        {/* Logo */}
        <motion.h1
          animate={{ opacity: open ? 1 : 0 }}
          className="font-bold text-xl text-gray-800 mb-6"
        >
          🔥 Hawan Panel
        </motion.h1>

        {/* Menu */}
        <nav className="flex-1">
          <SidebarItem icon={<LayoutDashboard />} title="Dashboard" href="/dashboard" open={open} />
          <SidebarItem icon={<BookOpen />} title="Bookings" href="/dashboard/bookings" open={open} />
          <SidebarItem icon={<Home />} title="Puja List" href="/dashboard/puja" open={open} />
          <SidebarItem icon={<Settings />} title="Settings" href="/dashboard/settings" open={open} />
        </nav>

        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
        >
          <Menu />
        </button>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="w-full bg-white shadow-md h-16 flex items-center justify-between px-6 text-gray-800">
          <h2 className="text-xl font-semibold">Dashboard</h2>
          <UserButton />
        </div>

        {/* Page Content */}
        <main className="p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  title,
  href,
  open,
}: {
  icon: ReactNode;
  title: string;
  href: string;
  open: boolean;
}) {
  return (
    <Link href={href}>
      <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-indigo-50 cursor-pointer transition-all mb-2">
        <span className="text-gray-600">{icon}</span>

        {open && <span className="text-gray-700 font-medium">{title}</span>}
      </div>
    </Link>
  );
}
