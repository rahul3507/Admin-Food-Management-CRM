/** @format */

"use client";

import Header from "@/components/common/header";
import { CustomTable } from "@/components/common/customTable";
import { customersData } from "@/data/customerData";
import { Customer } from "@/types/customerTypes";
import React from "react";

const customerColumns = [
  { key: "customerName", header: "Customer Name" },
  { key: "location", header: "Location" },
  { key: "email", header: "Email" },
  { key: "number", header: "Number" },
];

export default function CustomerPage() {
  const handleView = (customer: Customer) => {
    console.log("View customer:", customer);
    // Add your view logic here
  };

  const handleDelete = (customer: Customer) => {
    console.log("Delete customer:", customer);
    // Add your delete logic here
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <Header title="Customer List" showSearch={false} />

        {/* Table */}

        <CustomTable
          data={customersData}
          columns={customerColumns}
          itemsPerPage={10}
          onView={handleView}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
