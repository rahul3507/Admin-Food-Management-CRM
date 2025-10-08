/** @format */

"use client";

import Header from "@/components/common/header";
import { PaymentTable } from "@/components/common/paymentTable";
import { WithdrawReqModal } from "@/components/widthdrawReq/widthdrawReqModal";
import { withdrawRequestData } from "@/data/widthdrawRequestData";
import { WithdrawRequest } from "@/types/widthdrawRequestTypes";
import React, { useState } from "react";

const withdrawColumns = [
  { key: "userId", header: "User ID" },
  { key: "userName", header: "User Name" },
  { key: "restaurantName", header: "Restaurant Name" },
  { key: "requestedAmount", header: "Requested Amount" },
  { key: "paymentMethod", header: "Payment Method" },
  { key: "date", header: "Date" },
  { key: "status", header: "Status" },
];

const WithdrawRequestPage = () => {
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [selectedWithdrawRequest, setSelectedWithdrawRequest] =
    useState<WithdrawRequest | null>(null);

  const handleView = (withdrawRequest: WithdrawRequest) => {
    setSelectedWithdrawRequest(withdrawRequest);
    setIsWithdrawModalOpen(true);
  };

  const handleDelete = (withdrawRequest: WithdrawRequest) => {
    console.log("Delete withdraw request:", withdrawRequest);
    // Add your delete logic here
  };

  const handleApprove = (request: WithdrawRequest) => {
    console.log("Approve withdraw request:", request);
    // Add your approve logic here
  };

  const handleReject = (request: WithdrawRequest) => {
    console.log("Reject withdraw request:", request);
    // Add your reject logic here
  };

  const renderCell = (withdrawRequest: WithdrawRequest, columnKey: string) => {
    switch (columnKey) {
      case "userName":
        return (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
              {withdrawRequest.userName.charAt(0)}
            </div>
            <div>
              <div className="font-medium text-gray-900">
                {withdrawRequest.userName}
              </div>
              <div className="text-sm text-gray-500">
                {withdrawRequest.userEmail}
              </div>
            </div>
          </div>
        );
      case "requestedAmount":
        return `$${withdrawRequest.requestedAmount.toFixed(2)}`;
      case "status":
        return (
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
              withdrawRequest.status === "Approved"
                ? "bg-green-100 text-green-800"
                : withdrawRequest.status === "Rejected"
                ? "bg-red-100 text-red-800"
                : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {withdrawRequest.status}
          </span>
        );
      default:
        return String(
          (withdrawRequest as unknown as Record<string, unknown>)[columnKey]
        );
    }
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <Header title="Withdraw Request" showSearch={true} />

        {/* Withdraw Request Table */}
        <PaymentTable
          data={withdrawRequestData}
          columns={withdrawColumns}
          itemsPerPage={10}
          onView={handleView}
          onDelete={handleDelete}
          renderCell={renderCell}
        />

        {/* Withdraw Request Modal */}
        <WithdrawReqModal
          isOpen={isWithdrawModalOpen}
          onClose={() => setIsWithdrawModalOpen(false)}
          withdrawRequest={selectedWithdrawRequest}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </div>
    </div>
  );
};

export default WithdrawRequestPage;
