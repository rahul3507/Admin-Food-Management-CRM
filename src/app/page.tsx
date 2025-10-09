/** @format */

import Header from "@/components/common/header";
import AnalyticsCard from "@/components/dashboard/analyticsCard";
import IncomeChart from "@/components/dashboard/incomeChart";
import TopItemCard from "@/components/dashboard/topItemCard";
import { analyticsData } from "@/data/dashboardData";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <Header title="Dashboard" />

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          {analyticsData.map((metric, index) => (
            <AnalyticsCard key={index} metric={metric} />
          ))}
        </div>

        {/* Chart and Top Items Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6">
          <div className="col-span-1 lg:col-span-3 2xl:col-span-4">
            <IncomeChart />
          </div>
          <div className="col-span-1 lg:col-span-2 2xl:col-span-2">
            <TopItemCard />
          </div>
        </div>
      </div>
    </div>
  );
}
