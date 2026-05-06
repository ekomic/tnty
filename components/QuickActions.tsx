import { Send, Download, Plus, RefreshCw } from "lucide-react";

const actions = [
  { icon: Send, label: "Transfer", color: "indigo" },
  { icon: Download, label: "Withdraw", color: "violet" },
  { icon: Plus, label: "Deposit", color: "emerald" },
  { icon: RefreshCw, label: "Rebalance", color: "cyan" },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/20",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400 hover:bg-violet-500/20",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20",
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20",
};

export default function QuickActions() {
  return (
    <div className="bg-[#0a1628] border border-white/5 rounded-2xl p-5">
      <h3 className="text-white font-semibold text-base mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map(({ icon: Icon, label, color }) => (
          <button
            key={label}
            className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-150 ${colorMap[color]}`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium text-slate-300">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
