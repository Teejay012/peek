// components/layout/Layout.jsx

"use client"; // needed if you're using App Router

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import {
  HomeIcon,
  TrophyIcon,
  UserIcon,
  ShoppingCartIcon,
  BellIcon,
  LogOutIcon,
} from "lucide-react";

export default function Layout({ children, hideNavigation = false }) {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const navItems = [
    { icon: <HomeIcon size={24} />, label: "Home", path: "/home" },
    { icon: <TrophyIcon size={24} />, label: "Leaderboard", path: "/leaderboard" },
    { icon: <UserIcon size={24} />, label: "Profile", path: "/profile" },
    { icon: <ShoppingCartIcon size={24} />, label: "Store", path: "/store" },
    { icon: <BellIcon size={24} />, label: "Notifications", path: "/notifications" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {!hideNavigation && (
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link href="/home" className="cursor-pointer">
              <Logo size="small" />
            </Link>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-gray-500 hover:text-gray-700 flex items-center gap-1"
              >
                <LogOutIcon size={18} />
                <span className="hidden md:inline">Logout</span>
              </Link>
            </div>
          </div>
        </header>
      )}

      <main className="container mx-auto px-4 py-6">{children}</main>

      {!hideNavigation && (
        <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg rounded-t-xl">
          <div className="container mx-auto flex justify-around items-center py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex flex-col items-center py-2 px-3 rounded-lg ${
                  isActive(item.path)
                    ? "text-teal-500 bg-teal-50"
                    : "text-gray-500 hover:text-teal-500 hover:bg-gray-50"
                }`}
              >
                <div>{item.icon}</div>
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
