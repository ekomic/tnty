"use client";

import { Menu, Search, Bell, LogOut } from "lucide-react";

interface TopNavProps {
  onMenuClick: () => void;
  onLogout: () => void;
}

export default function TopNav({ onMenuClick, onLogout }: TopNavProps) {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-4 border-b border-white/5 bg-[#060d1f]/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-slate-400 hover:text-white transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h1 className="text-white font-semibold text-lg leading-none">Overview</h1>
          <p className="text-slate-500 text-xs mt-0.5">Wednesday, May 6, 2025</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Search — hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2 w-56">
          <Search className="w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-slate-300 placeholder-slate-600 focus:outline-none w-full"
          />
        </div>

        {/* Notifications */}
        <button className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full" />
        </button>

        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm cursor-pointer">
          JD
        </div>

        {/* Logout — desktop */}
        <button
          onClick={onLogout}
          className="hidden md:flex items-center gap-2 text-slate-500 hover:text-red-400 transition-colors text-sm"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
