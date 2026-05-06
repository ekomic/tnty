"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const holdings = [
  { name: "Apple Inc.", ticker: "AAPL", allocation: 28, value: "$560,000", change: "+2.4%", up: true, color: "#6366f1" },
  { name: "Microsoft", ticker: "MSFT", allocation: 22, value: "$440,000", change: "+1.8%", up: true, color: "#8b5cf6" },
  { name: "Nvidia", ticker: "NVDA", allocation: 18, value: "$360,000", change: "+5.2%", up: true, color: "#06b6d4" },
  { name: "Tesla", ticker: "TSLA", allocation: 12, value: "$240,000", change: "-1.3%", up: false, color: "#f59e0b" },
  { name: "Alphabet", ticker: "GOOGL", allocation: 10, value: "$200,000", change: "+0.9%", up: true, color: "#10b981" },
  { name: "Other", ticker: "—", allocation: 10, value: "$200,000", change: "+0.3%", up: true, color: "#334155" },
];

export default function PortfolioSummary() {
  return (
    <div className="bg-[#0a1628] border border-white/5 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white font-semibold text-base">Portfolio</h3>
        <button className="text-indigo-400 hover:text-indigo-300 text-xs font-medium transition-colors">
          View all
        </button>
      </div>

      {/* Donut chart (CSS-based) */}
      <div className="flex items-center justify-center mb-5">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            {(() => {
              let offset = 0;
              return holdings.map((h) => {
                const dash = h.allocation;
                const gap = 100 - dash;
                const el = (
                  <circle
                    key={h.ticker}
                    cx="18" cy="18" r="15.9"
                    fill="none"
                    stroke={h.color}
                    strokeWidth="3.5"
                    strokeDasharray={`${dash} ${gap}`}
                    strokeDashoffset={-offset}
                    className="transition-all duration-500"
                  />
                );
                offset += dash;
                return el;
              });
            })()}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white font-bold text-sm">$2M</p>
            <p className="text-slate-500 text-xs">Total</p>
          </div>
        </div>
      </div>

      {/* Holdings list */}
      <div className="space-y-3">
        {holdings.map((h) => (
          <div key={h.ticker} className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: h.color }} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-white text-xs font-medium truncate">{h.name}</p>
                <p className="text-white text-xs font-semibold ml-2">{h.value}</p>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <div className="flex items-center gap-2">
                  <div className="h-1 rounded-full bg-white/5 w-16">
                    <div
                      className="h-1 rounded-full transition-all duration-700"
                      style={{ width: `${h.allocation}%`, background: h.color }}
                    />
                  </div>
                  <span className="text-slate-500 text-xs">{h.allocation}%</span>
                </div>
                <span className={`flex items-center gap-0.5 text-xs font-medium ${h.up ? "text-emerald-400" : "text-red-400"}`}>
                  {h.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {h.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
