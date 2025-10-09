/** @format */

"use client";

import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { topSellingItems } from "@/data/dashboardData";

export default function TopItemCard() {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 h-[400px]">
      {/* Header */}
      <div className="mb-3">
        <h3 className="text-lg md:text-2xl font-medium text-gray-900 mb-1">
          Top Selling Item
        </h3>
        <p className="text-sm md:text-lg text-custom-orange">
          The top ordered menu this week
        </p>
      </div>

      {/* Scrollable Items List */}
      <ScrollArea className="h-[280px] w-full">
        <div className="space-y-2">
          {topSellingItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {/* Item Info */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <span className="font-medium text-gray-900">{item.name}</span>
              </div>

              {/* Order Count */}
              <span className="text-lg font-semibold text-gray-700">
                {item.orders}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
