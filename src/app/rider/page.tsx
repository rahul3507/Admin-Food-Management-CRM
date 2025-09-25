/** @format */

"use client";

import Header from "@/components/common/header";
import { CustomTable } from "@/components/common/customTable";
import { ridersData } from "@/data/riderData";
import { Rider } from "@/types/riderTypes";
import React from "react";

const riderColumns = [
  { key: "riderName", header: "Rider Name" },
  { key: "number", header: "Number" },
  { key: "email", header: "Email" },
  { key: "licensePlateNumber", header: "License plate number" },
  { key: "registrationNumber", header: "Registration Number" },
];

const RiderPage = () => {
  const handleView = (rider: Rider) => {
    console.log("View rider:", rider);
    // Add your view logic here
  };

  const handleDelete = (rider: Rider) => {
    console.log("Delete rider:", rider);
    // Add your delete logic here
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <Header title="Rider List" showSearch={false} />

        {/* Table */}
        <div className="px-4 md:px-6">
          <CustomTable
            data={ridersData}
            columns={riderColumns}
            itemsPerPage={10}
            onView={handleView}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default RiderPage;
