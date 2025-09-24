/** @format */

"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { OrderCardProps, Order } from "@/types/orderManagTypes";
import AssignDeliveryModal from "./assignDeliveryModal";

const OrderCard: React.FC<OrderCardProps> = ({
  order,
  onStatusChange,
  onAssignDriver,
}) => {
  // Get status-based styling
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-500 border-yellow-200";
      case "Accepted":
        return "bg-blue-100 text-blue-500 border-blue-200";
      case "Preparing":
        return "bg-orange-100 text-orange-500 border-orange-200";
      case "Shipping":
        return "bg-purple-100 text-purple-500 border-purple-200";
      case "Delivered":
        return "bg-green-100 text-green-500 border-green-200";
      case "Cancelled":
        return "bg-red-100 text-red-500 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getActionButtons = (status: Order["status"]) => {
    switch (status) {
      case "Pending":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => onStatusChange?.(order.id, "Accepted")}
            >
              Accept Order
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              onClick={() => onStatusChange?.(order.id, "Cancelled")}
            >
              Reject
            </Button>
          </div>
        );
      case "Accepted":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => onStatusChange?.(order.id, "Preparing")}
            >
              Prepared Order
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              onClick={() => onStatusChange?.(order.id, "Cancelled")}
            >
              Reject
            </Button>
          </div>
        );
      case "Preparing":
        return (
          <div className="flex gap-2">
            <AssignDeliveryModal
              orderId={order.id}
              onAssignDriver={onAssignDriver}
            >
              <Button
                size="sm"
                className="bg-gray-800 hover:bg-gray-700 text-white"
              >
                Assign Own Rider
              </Button>
            </AssignDeliveryModal>
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => onStatusChange?.(order.id, "Shipping")}
            >
              Assign Global Rider
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              onClick={() => onStatusChange?.(order.id, "Cancelled")}
            >
              Cancel
            </Button>
          </div>
        );
      case "Shipping":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-700 text-white"
              onClick={() => onStatusChange?.(order.id, "Delivered")}
            >
              Delivered Order
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
              onClick={() => onStatusChange?.(order.id, "Cancelled")}
            >
              Cancel
            </Button>
          </div>
        );
      case "Delivered":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-gray-800 hover:bg-gray-700 text-white"
            >
              Download Receipt
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
            >
              Delete
            </Button>
          </div>
        );
      case "Cancelled":
        return (
          <Button
            size="sm"
            variant="outline"
            className="text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
          >
            Delete
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 rounded-lg border bg-white shadow-sm hover:shadow-md transition-all duration-200">
      {/* Header with Order ID, Date and Status */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex w-full items-center justify-between ">
          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6 mb-1">
            <span className="font-semibold text-xs md:text-sm">
              Order ID: #{order.id}
            </span>
            <span className="text-black font-semibold text-xs md:text-sm">
              Date: {order.date}
            </span>
          </div>
          <span
            className={`px-3 py-1 text-xs font-medium rounded-sm w-20 text-center border ${getStatusColor(
              order.status
            )}`}
          >
            {order.status}
          </span>
        </div>
      </div>

      {/* Customer Info */}
      <div className="space-y-2 md:space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm md:text-base font-medium">
              {order.customerName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <p className="font-medium text-gray-900">{order.customerName}</p>
          </div>
        </div>
        <div>
          <div className="text-sm md:text-base text-black/70">
            <div className="flex items-center gap-1">
              <strong>Contact Number:</strong>
              {order.contactNo}
            </div>
          </div>
          <div className="text-sm md:text-base text-black/70">
            <div className="flex items-center gap-1">
              <strong>Location:</strong> {order.location}
            </div>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-2">
        <h4 className="font-medium text-black/70 mt-2">Order Items:</h4>
        {order.foodArray.map((item, index) => (
          <div
            key={index}
            className="flex justify-between text-xs md:text-sm text-black/70 font-medium"
          >
            <span>
              {item.name} x{item.quantity}
            </span>
            <span className="text-black text-sm md:text-base font-bold">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Driver Information (if assigned) */}

      {/* Footer with Actions and Total */}
      <div className="flex w-full justify-between items-center pt-4 border-t border-gray-300">
        <div>
          {" "}
          {order.assignedDriver && (
            <div className="mb-4 p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div>
                  <p className=" text-black/70 text-xs">
                    <strong className="mr-1">Driver:</strong>{" "}
                    {order.assignedDriver.name}
                  </p>
                  <p className="text-xs text-black/70 flex items-center">
                    <strong className="mr-1">Phone:</strong>
                    {order.assignedDriver.phone}
                  </p>
                  <p className="text-xs text-black/70 flex items-center">
                    <strong className="mr-1">ETA:</strong>
                    {order.assignedDriver.eta}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-2">{getActionButtons(order.status)}</div>
        <div className="text-right">
          <div className="text-xl font-bold text-gray-900">
            Total: ${order.totalPrice.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
