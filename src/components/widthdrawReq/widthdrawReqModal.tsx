/** @format */

"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { WithdrawRequest } from "@/types/widthdrawRequestTypes";

interface WithdrawReqModalProps {
  isOpen: boolean;
  onClose: () => void;
  withdrawRequest: WithdrawRequest | null;
  onApprove?: (request: WithdrawRequest) => void;
  onReject?: (request: WithdrawRequest) => void;
}

export function WithdrawReqModal({
  isOpen,
  onClose,
  withdrawRequest,
  onApprove,
  onReject,
}: WithdrawReqModalProps) {
  if (!withdrawRequest) return null;

  const detailRows = [
    { label: "User ID:", value: withdrawRequest.userId },
    { label: "Restaurant Name:", value: withdrawRequest.restaurantName },
    {
      label: "Requested Amount:",
      value: `$${withdrawRequest.requestedAmount.toFixed(2)}`,
    },
    {
      label: "Available Balance:",
      value: `$${withdrawRequest.availableBalance.toFixed(2)}`,
    },
    { label: "Payment Method:", value: withdrawRequest.paymentMethod },
    { label: "Card Holder name:", value: withdrawRequest.cardHolderName },
    { label: "Account Email:", value: withdrawRequest.accountEmail },
    { label: "Card number:", value: withdrawRequest.cardNumber },
  ];

  const handleApprove = () => {
    if (onApprove) {
      onApprove(withdrawRequest);
    }
    onClose();
  };

  const handleReject = () => {
    if (onReject) {
      onReject(withdrawRequest);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-8 pb-6 space-y-0">
          <DialogTitle className="text-2xl font-semibold text-center text-gray-900">
            Withdraw Request
          </DialogTitle>
        </DialogHeader>

        {/* Content */}
        <div className="px-6 pb-6 space-y-1">
          {detailRows.map((row, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
            >
              <span className="text-base text-gray-700 font-normal">
                {row.label}
              </span>
              <span className="text-base text-gray-600 font-normal text-right">
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        {withdrawRequest.status === "Pending" && (
          <div className="flex gap-3 px-6 pb-6">
            <Button
              onClick={handleReject}
              className="flex-1 h-12 text-base font-medium bg-red-100 hover:bg-red-200 text-red-600 border border-red-200 rounded-lg"
            >
              Reject
            </Button>
            <Button
              onClick={handleApprove}
              className="flex-1 h-12 text-base font-medium bg-green-500 hover:bg-green-600 text-white rounded-lg"
            >
              Approve
            </Button>
          </div>
        )}

        {/* Status Display for Non-Pending Requests */}
        {withdrawRequest.status !== "Pending" && (
          <div className="px-6 pb-6">
            <div
              className={`w-full h-12 flex items-center justify-center text-base font-medium rounded-lg ${
                withdrawRequest.status === "Approved"
                  ? "bg-green-100 text-green-700 border border-green-200"
                  : "bg-red-100 text-red-700 border border-red-200"
              }`}
            >
              {withdrawRequest.status}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
