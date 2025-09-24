/** @format */

import type { RecentOrder } from "@/types/dashboardTypes";
import React from "react";

interface OrderCardProps {
  order: RecentOrder;
}

const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-2xl border  border-gray-100">
      <div className="flex-1">
        <div className="font-medium text-base md:text-lg text-black">
          {order.id}
        </div>
        <div className="text-sm md:text-base text-black/50">
          {order.customer}
        </div>
        <div className="text-sm md:text-base text-black/30">{order.items}</div>
      </div>
      <div className="flex flex-col items-end  space-y-5">
        <span
          className={`w-20 text-center py-1.5 rounded-sm text-xs font-medium ${order.statusColor}`}
        >
          {order.status}
        </span>
        <div className="font-medium text-base md:text-lg text-black">
          {order.amount}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
