import { ArrowUpRight, ArrowDownRight, Activity, DollarSign, CreditCard, Percent } from "lucide-react";

const stats = [
  {
    icon: DollarSign,
    label: "Monthly Income",
    value: "$48,200",
    change: "+6.2%",
    up: true,
    color: "indigo",
  },
  {
    icon: CreditCard,
    label: "Monthly Spend",
    value: "$12,840",
    change: "-3.1%",
    up: false,
    color: "violet",
  },
  {
    icon: Activity,
    label: "Active Positions",
    value: "34",
    change: "+2",
    up: true,
    color: "cyan",
  },
  {
    icon: Percent,
    label: "Avg. Return",
    value: "14.8%",
    change: "+1.2%",
    up: true,
    color: "emerald",
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
};

export default function StatsRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ icon: Icon, label, value, change, up, color }) => (
        <div
          key={label}
          className="bg-[#0a1628] border border-white/5 rounded-2xl p-4 md:p-5 hover:border-white/10 transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${colorMap[color]}`}>
              <Icon className="w-4 h-4" />
            </div>
            <div className={`flex items-center gap-1 text-xs font-semibold ${up ? "text-emerald-400" : "text-red-400"}`}>
              {up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              {change}
            </div>
          </div>
          <p className="text-white font-bold text-xl md:text-2xl">{value}</p>
          <p className="text-slate-500 text-xs mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}
