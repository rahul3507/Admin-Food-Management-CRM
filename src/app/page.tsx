/** @format */

import Header from "@/components/common/header";
import AnalyticsCard from "@/components/dashboard/analyticsCard";
import { analyticsData } from "@/data/dashboardData";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <Header title="Dashboard" />

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {analyticsData.map((metric, index) => (
            <AnalyticsCard key={index} metric={metric} />
          ))}
        </div>
      </div>
    </div>
  );
}
