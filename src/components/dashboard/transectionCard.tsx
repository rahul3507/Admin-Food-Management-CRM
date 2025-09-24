/** @format */

import type { RecentTransection } from "@/types/dashboardTypes";
import React from "react";

interface TransactionCardProps {
  order: RecentTransection;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ order }) => {
  return (
    <div className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
      <div className="flex-1">
        <div className="font-medium text-xs md:text-base text-black flex">
          Order Id:{" "}
          <span className="text-black/50 font-normal pl-1">
            {order.orderId}
          </span>
        </div>
        <div className="font-medium text-xs md:text-base text-black flex">
          Name:{" "}
          <span className="text-black/50 font-normal pl-1">{order.name}</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="font-medium text-xs md:text-base text-black flex">
          Amount
        </div>
        <div className="font-medium text-base md:text-xl  text-black">
          {order.amount}
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
