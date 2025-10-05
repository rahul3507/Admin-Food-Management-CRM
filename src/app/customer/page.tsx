/** @format */

"use client";

import Header from "@/components/common/header";
import { CustomTable } from "@/components/common/customTable";
import { customersData } from "@/data/customerData";
import { Customer } from "@/types/customerTypes";
import { CustomerDetailsModal } from "@/components/customer/customerDetailsModal";
import React, { useState } from "react";

const customerColumns = [
  { key: "id", header: "Sl No." },
  { key: "customerName", header: "Customer Name" },
  { key: "location", header: "Location" },
  { key: "email", header: "Email" },
  { key: "number", header: "Number" },
];

export default function CustomerPage() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(
    null
  );

  const handleView = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsDetailsModalOpen(true);
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

        {/* Customer Details Modal */}
        <CustomerDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          customer={selectedCustomer}
        />
      </div>
    </div>
  );
}
