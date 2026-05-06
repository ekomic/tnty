"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import TopNav from "@/components/TopNav";
import BalanceCard from "@/components/BalanceCard";
import StatsRow from "@/components/StatsRow";
import RecentTransactions from "@/components/RecentTransactions";
import PortfolioSummary from "@/components/PortfolioSummary";
import QuickActions from "@/components/QuickActions";

interface DashboardProps {
  onLogout: () => void;
}

export default function Dashboard({ onLogout }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#060d1f] overflow-hidden">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} onLogout={onLogout} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNav onMenuClick={() => setSidebarOpen(true)} onLogout={onLogout} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Hero balance */}
            <BalanceCard />

            {/* Stats row */}
            <StatsRow />

            {/* Main grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2 space-y-6">
                <RecentTransactions />
              </div>
              <div className="space-y-6">
                <PortfolioSummary />
                <QuickActions />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
