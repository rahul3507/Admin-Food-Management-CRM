/** @format */

"use client";

import Header from "@/components/common/header";
import { PaymentTable } from "@/components/common/paymentTable";
import { PaymentModal } from "@/components/payment/paymentModal";
import { paymentData } from "@/data/paymentData";
import { Payment } from "@/types/paymentTypes";
import React, { useState } from "react";

const paymentColumns = [
  { key: "userId", header: "User ID" },
  { key: "userName", header: "User Name" },
  { key: "userStatus", header: "User Status" },
  { key: "date", header: "Date" },
  { key: "amount", header: "Amount" },
  { key: "paymentMethod", header: "Payment" },
  { key: "status", header: "Status" },
];

const PaymentPage = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const handleView = (payment: Payment) => {
    setSelectedPayment(payment);
    setIsPaymentModalOpen(true);
  };

  const handleDelete = (payment: Payment) => {
    console.log("Delete payment:", payment);
    // Add your delete logic here
  };

  const renderCell = (payment: Payment, columnKey: string) => {
    switch (columnKey) {
      case "userName":
        return (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
              {payment.userName.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-gray-900">
                {payment.userName}
              </div>
              <div className="text-sm text-gray-500">{payment.userEmail}</div>
            </div>
          </div>
        );
      case "amount":
        return `$${payment.amount.toFixed(2)}`;
      case "status":
        return (
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              payment.status === "Successful"
                ? "bg-green-100 text-green-800"
                : payment.status === "Cancel"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {payment.status}
          </span>
        );
      default:
        return String(
          (payment as unknown as Record<string, unknown>)[columnKey]
        );
    }
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <Header title="Payment List" showSearch={true} />

        {/* Payment Table */}
        <PaymentTable
          data={paymentData}
          columns={paymentColumns}
          itemsPerPage={10}
          onView={handleView}
          onDelete={handleDelete}
          renderCell={renderCell}
        />

        {/* Payment Details Modal */}
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={() => setIsPaymentModalOpen(false)}
          payment={selectedPayment}
        />
      </div>
    </div>
  );
};

export default PaymentPage;
