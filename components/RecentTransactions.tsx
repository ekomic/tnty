"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownRight, Filter, Search } from "lucide-react";

const transactions = [
  { id: 1, name: "Apple Inc.", ticker: "AAPL", type: "buy", amount: "+$12,400", shares: "68 shares", date: "May 6, 2025", time: "09:32 AM", status: "completed", avatar: "🍎" },
  { id: 2, name: "Tesla Inc.", ticker: "TSLA", type: "sell", amount: "-$8,200", shares: "24 shares", date: "May 5, 2025", time: "02:14 PM", status: "completed", avatar: "⚡" },
  { id: 3, name: "Microsoft Corp.", ticker: "MSFT", type: "buy", amount: "+$22,100", shares: "52 shares", date: "May 5, 2025", time: "10:05 AM", status: "completed", avatar: "🪟" },
  { id: 4, name: "Dividend — VTI", ticker: "VTI", type: "dividend", amount: "+$1,840", shares: "Quarterly", date: "May 4, 2025", time: "08:00 AM", status: "completed", avatar: "💰" },
  { id: 5, name: "Nvidia Corp.", ticker: "NVDA", type: "buy", amount: "+$34,600", shares: "30 shares", date: "May 3, 2025", time: "11:22 AM", status: "completed", avatar: "🟢" },
  { id: 6, name: "Amazon.com Inc.", ticker: "AMZN", type: "sell", amount: "-$15,300", shares: "10 shares", date: "May 2, 2025", time: "03:47 PM", status: "pending", avatar: "📦" },
  { id: 7, name: "Alphabet Inc.", ticker: "GOOGL", type: "buy", amount: "+$18,900", shares: "12 shares", date: "May 1, 2025", time: "09:58 AM", status: "completed", avatar: "🔍" },
];

const tabs = ["All", "Buy", "Sell", "Dividends"];

export default function RecentTransactions() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = transactions.filter((t) => {
    const matchTab =
      activeTab === "All" ||
      (activeTab === "Buy" && t.type === "buy") ||
      (activeTab === "Sell" && t.type === "sell") ||
      (activeTab === "Dividends" && t.type === "dividend");
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.ticker.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div className="bg-[#0a1628] border border-white/5 rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-white/5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-base">Recent Transactions</h3>
          <button className="flex items-center gap-2 text-slate-400 hover:text-white text-xs border border-white/10 rounded-lg px-3 py-1.5 transition-colors">
            <Filter className="w-3.5 h-3.5" />
            Filter
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2">
          <Search className="w-4 h-4 text-slate-500 flex-shrink-0" />
          <input
            type="text"
            placeholder="Search transactions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent text-sm text-slate-300 placeholder-slate-600 focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-xs font-medium text-slate-500 px-5 py-3">Asset</th>
              <th className="text-left text-xs font-medium text-slate-500 px-5 py-3 hidden sm:table-cell">Type</th>
              <th className="text-right text-xs font-medium text-slate-500 px-5 py-3">Amount</th>
              <th className="text-left text-xs font-medium text-slate-500 px-5 py-3 hidden md:table-cell">Date</th>
              <th className="text-left text-xs font-medium text-slate-500 px-5 py-3 hidden lg:table-cell">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((tx) => (
              <tr
                key={tx.id}
                className="border-b border-white/3 hover:bg-white/3 transition-colors group"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg flex-shrink-0">
                      {tx.avatar}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{tx.name}</p>
                      <p className="text-slate-500 text-xs">{tx.ticker} · {tx.shares}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4 hidden sm:table-cell">
                  <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg ${
                    tx.type === "buy"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : tx.type === "sell"
                      ? "bg-red-500/10 text-red-400 border border-red-500/20"
                      : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                  }`}>
                    {tx.type === "buy" ? <ArrowUpRight className="w-3 h-3" /> : tx.type === "sell" ? <ArrowDownRight className="w-3 h-3" /> : null}
                    {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                  </span>
                </td>
                <td className="px-5 py-4 text-right">
                  <span className={`font-semibold text-sm ${
                    tx.amount.startsWith("+") ? "text-emerald-400" : "text-red-400"
                  }`}>
                    {tx.amount}
                  </span>
                </td>
                <td className="px-5 py-4 hidden md:table-cell">
                  <p className="text-slate-300 text-sm">{tx.date}</p>
                  <p className="text-slate-600 text-xs">{tx.time}</p>
                </td>
                <td className="px-5 py-4 hidden lg:table-cell">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                    tx.status === "completed" ? "text-emerald-400" : "text-amber-400"
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      tx.status === "completed" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
                    }`} />
                    {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No transactions found
          </div>
        )}
      </div>

      <div className="p-4 border-t border-white/5 text-center">
        <button className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
          View all transactions →
        </button>
      </div>
    </div>
  );
}
