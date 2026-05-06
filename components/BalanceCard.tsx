"use client";

import { TrendingUp, Eye, EyeOff, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState } from "react";

export default function BalanceCard() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="relative overflow-hidden rounded-2xl p-6 md:p-8"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e1b4b 100%)",
        border: "1px solid rgba(99,102,241,0.2)",
      }}
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-600 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2" />

      {/* Background image */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=1200&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-indigo-300 text-sm font-medium">Total Portfolio Value</p>
              <button
                onClick={() => setVisible(!visible)}
                className="text-indigo-400 hover:text-white transition-colors"
              >
                {visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>
            <div className="flex items-end gap-4">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                {visible ? "$2,000,000" : "••••••••"}
              </h2>
              <div className="flex items-center gap-1 mb-1 bg-emerald-500/20 border border-emerald-500/30 rounded-lg px-2 py-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 text-sm font-semibold">+12.4%</span>
              </div>
            </div>
            <p className="text-indigo-300/60 text-sm mt-1">+$221,680 this month</p>
          </div>

          <div className="hidden sm:block text-right">
            <p className="text-indigo-300/60 text-xs mb-1">As of today</p>
            <p className="text-indigo-200 text-sm font-medium">May 6, 2025</p>
          </div>
        </div>

        {/* Sub-metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Invested", value: "$1,420,000", change: "+8.2%", up: true },
            { label: "Cash", value: "$280,000", change: "+2.1%", up: true },
            { label: "Returns", value: "$300,000", change: "+18.7%", up: true },
            { label: "Pending", value: "$12,400", change: "-0.4%", up: false },
          ].map(({ label, value, change, up }) => (
            <div key={label} className="bg-white/5 rounded-xl p-3 border border-white/5">
              <p className="text-indigo-300/60 text-xs mb-1">{label}</p>
              <p className="text-white font-semibold text-sm md:text-base">{visible ? value : "••••"}</p>
              <div className={`flex items-center gap-1 mt-1 ${up ? "text-emerald-400" : "text-red-400"}`}>
                {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                <span className="text-xs font-medium">{change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
