/** @format */

"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Order } from "@/types/orderManagTypes";

interface OrderDetailsModalProps {
  children: React.ReactNode;
  order: Order;
}

const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  children,
  order,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-green-600";
      case "Pending":
        return "text-yellow-600";
      case "Accepted":
        return "text-blue-600";
      case "Preparing":
        return "text-orange-600";
      case "Shipping":
        return "text-purple-600";
      case "Cancelled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4 relative">
          <DialogTitle className="text-center text-2xl md:text-3xl font-semibold text-gray-800">
            Order Details
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-2">
          {/* Order ID */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Order ID:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              #{order.id}
            </span>
          </div>

          {/* Customer Name */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Name:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              {order.customerName}
            </span>
          </div>

          {/* Contact Number */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Contact Number:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              {order.contactNo}
            </span>
          </div>

          {/* Location */}
          <div className="flex justify-between items-start">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Location:
            </span>
            <span className="text-black/70 text-sm md:text-base text-right flex-1 ml-4">
              {order.location}
            </span>
          </div>

          {/* Date */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Date:
            </span>
            <span className="text-black/70 text-sm md:text-base">
              {formatDate(order.date)}
            </span>
          </div>

          {/* Status */}
          <div className="flex justify-between items-center">
            <span className="text-gray-black font-medium text-base md:text-lg">
              Status:
            </span>
            <span
              className={` text-sm md:text-base ${getStatusColor(
                order.status
              )}`}
            >
              {order.status}
            </span>
          </div>

          {/* Food List */}
          <div className="border-t pt-4">
            <h3 className="text-gray-black font-medium mb-3">Food List:</h3>
            <div className="space-y-2">
              {order.foodArray.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 text-xs md:text-sm">
                    {item.name} - {item.quantity}x
                  </span>
                  <span className="font-medium text-gray-900 text-sm md:text-base">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Total */}
          <div className="border-t pt-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-700  text-sm md:text-base">
                Total:
              </span>
              <span className="font-bold text-gray-900 text-base md:text-lg">
                ${order.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Driver Information (if assigned) */}
          {order.assignedDriver && (
            <div className="border-t pt-2">
              <h3 className="text-gray-700 font-medium mb-1">
                Driver Information:
              </h3>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Driver Name:</span>
                  <span className="font-semibold text-gray-900">
                    {order.assignedDriver.name}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Driver Phone:</span>
                  <span className="font-semibold text-gray-900">
                    {order.assignedDriver.phone}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">ETA:</span>
                  <span className="font-semibold text-gray-900">
                    {order.assignedDriver.eta}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsModal;
