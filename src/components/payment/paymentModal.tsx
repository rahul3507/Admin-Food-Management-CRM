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
import { Payment } from "@/types/paymentTypes";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  payment: Payment | null;
}

export function PaymentModal({ isOpen, onClose, payment }: PaymentModalProps) {
  if (!payment) return null;

  const detailRows = [
    { label: "User ID:", value: payment.userId },
    { label: "Restaurant Name:", value: "Pizza Hut" },
    { label: "Requested Amount:", value: `$${payment.amount.toFixed(2)}` },
    { label: "Available Balance:", value: "$1500.00" },
    { label: "Payment Method:", value: payment.paymentMethod },
    { label: "Card Holder name:", value: "Victor" },
    { label: "Account number:", value: "12345678" },
    { label: "Payment Status:", value: payment.status },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-8 pb-6 space-y-0">
          <DialogTitle className="text-2xl font-semibold text-center text-gray-900">
            Payment Details
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
              <span
                className={`text-base font-normal text-right ${
                  row.label === "Payment Status:"
                    ? payment.status === "Successful"
                      ? "text-green-600"
                      : payment.status === "Cancel"
                      ? "text-red-600"
                      : "text-yellow-600"
                    : "text-gray-600"
                }`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Payment Receipt Section */}
        <div className="mx-6 mb-6 px-6 pb-4 h-10 border-2  border-dotted border-gray-300  bg-gray-50">
          Image
        </div>

        {/* Download Button */}
        <div className="px-6 pb-6">
          <Button className="w-full h-12 text-base font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg">
            Download
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
