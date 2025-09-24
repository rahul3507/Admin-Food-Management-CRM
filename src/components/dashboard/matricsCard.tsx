/** @format */

import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

import type { DashboardMetric } from "@/types/dashboardTypes";

interface MetricsCardProps {
  metric: DashboardMetric;
}

export default function MetricsCard({
  metric: { title, value, change, changeType },
}: MetricsCardProps) {
  const shouldShowDollar =
    title.toLowerCase().includes("revenue") ||
    title.toLowerCase().includes("balance");
  const displayValue = shouldShowDollar ? `$${value}` : value;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm px-6 py-4">
      <div className="text-xs md:text-base font-medium text-gray-500 mb-0">
        {title}
      </div>
      <div className="text-lg md:text-2xl font-semibold mb-6">
        {displayValue}
      </div>
      <div
        className={`flex items-center text-xs md:text-sm mt-1 ${
          changeType === "increase" ? "text-green-600" : "text-red-600"
        }`}
      >
        {changeType === "increase" ? (
          <ArrowUpIcon className="w-4 h-4 mr-1" />
        ) : (
          <ArrowDownIcon className="w-4 h-4 mr-1" />
        )}
        {Math.abs(change)} %
        <span className="text-black/50 ml-2"> Since Last Week</span>
      </div>
    </div>
  );
}
