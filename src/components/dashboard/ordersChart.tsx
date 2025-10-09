/** @format */
"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ordersChartData } from "@/data/dashboardData";

const OrdersChart = () => {
  const maxValue = Math.max(
    ...ordersChartData.map((item) => Math.max(item.pending, item.delivered))
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Number of Orders
        </h3>
        <Select defaultValue="lastweek">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Last Week" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="lastweek">Last Week</SelectItem>
            <SelectItem value="lastmonth">Last Month</SelectItem>
            <SelectItem value="lastyear">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={ordersChartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#6b7280" }}
              domain={[0, maxValue + 50]}
              tickCount={5}
            />
            <Tooltip />
            <Bar dataKey="delivered" radius={[4, 4, 0, 0]} barSize={20}>
              {ordersChartData.map((entry, index) => (
                <Cell key={`delivered-${index}`} fill="#22c55e" />
              ))}
            </Bar>
            <Bar dataKey="pending" radius={[4, 4, 0, 0]} barSize={20}>
              {ordersChartData.map((entry, index) => (
                <Cell key={`pending-${index}`} fill="#f97316" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrdersChart;
