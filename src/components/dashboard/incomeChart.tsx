/** @format */

"use client";

import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { chartData } from "@/data/dashboardData";
import { Button } from "../ui/button";

export default function IncomeChart() {
  const [activeTab, setActiveTab] = useState("Yearly");

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-[400px]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl md:text-2xl font-medium text-gray-900">
          Total Income
        </h3>

        {/* Tab Buttons */}
        <div className="flex bg-gray-100 rounded-lg p-1">
          {["Weekly", "Monthly", "Yearly"].map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1 text-sm font-medium rounded-md transition-colors  ${
                activeTab === tab
                  ? "bg-custom-orange hover:bg-custom-orange/90 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#666" }}
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#ef4444"
              fill="#fff0e6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
