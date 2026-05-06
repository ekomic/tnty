"use client";

import { useState } from "react";
import {
  TrendingUp, LayoutDashboard, PieChart, ArrowLeftRight,
  Settings, HelpCircle, LogOut, X, Bell, ChevronRight
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: PieChart, label: "Portfolio", active: false },
  { icon: ArrowLeftRight, label: "Transactions", active: false },
  { icon: Bell, label: "Alerts", active: false, badge: "3" },
  { icon: Settings, label: "Settings", active: false },
  { icon: HelpCircle, label: "Help & Support", active: false },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export default function Sidebar({ open, onClose, onLogout }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Overview");

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 flex flex-col
          bg-[#0a1628] border-r border-white/5
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none">Nexus</p>
              <p className="text-slate-500 text-xs">Finance</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden text-slate-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="text-slate-600 text-xs font-semibold uppercase tracking-wider px-3 mb-3">Main Menu</p>
          {navItems.map(({ icon: Icon, label, badge }) => {
            const isActive = activeItem === label;
            return (
              <button
                key={label}
                onClick={() => { setActiveItem(label); onClose(); }}
                className={`
                  w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-150 group relative
                  ${isActive
                    ? "bg-indigo-600/20 text-indigo-400 border border-indigo-500/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300"}`} />
                <span className="flex-1 text-left">{label}</span>
                {badge && (
                  <span className="bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {badge}
                  </span>
                )}
                {isActive && <ChevronRight className="w-4 h-4 text-indigo-400" />}
              </button>
            );
          })}
        </nav>

        {/* User profile */}
        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5 mb-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">John Doe</p>
              <p className="text-slate-500 text-xs truncate">Premium Plan</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
}
