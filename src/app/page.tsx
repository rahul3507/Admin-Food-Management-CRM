/** @format */

import MetricsCard from "@/components/dashboard/matricsCard";
import WithdrawCard from "@/components/dashboard/withdrawCard";
import TransactionCard from "@/components/dashboard/transectionCard";
import OrderCard from "@/components/dashboard/orderCard";
import Header from "@/components/common/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  dashboardMetrics,
  RecentTransections,
  RecentOrders,
} from "@/data/dashboardData";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <Header title="Dashboard" />

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardMetrics.map((metric, index) => (
            <MetricsCard key={index} metric={metric} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          {/* Left Column */}
          <div className="col-span-1 lg:col-span-3 ">
            <WithdrawCard />
            <div className="bg-white rounded-md border border-gray-100 shadow-sm px-6 py-4 mt-6">
              <div className="mb-6">
                <div className="font-semibold text-base md:text-xl">
                  Recent Transaction
                </div>
                <p className="text-xs md:text-sm text-black/50">
                  Latest payment from your customers
                </p>
              </div>
              <ScrollArea>
                <div className=" max-h-96 space-y-2 pr-4">
                  {RecentTransections.map((order, index) => (
                    <TransactionCard key={index} order={order} />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-span-1 lg:col-span-4">
            <div className="bg-white rounded-md border border-gray-100 shadow-sm px-6 py-4">
              <div className="mb-6">
                <div className="font-semibold text-base md:text-xl">
                  Recent Orders
                </div>
                <p className="text-xs md:text-sm text-black/50">
                  Latest orders from your customers
                </p>
              </div>
              <ScrollArea>
                <div className=" max-h-[592px] space-y-2 pr-4">
                  {RecentOrders.map((order, index) => (
                    <OrderCard key={index} order={order} />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
