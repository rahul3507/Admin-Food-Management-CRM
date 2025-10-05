/** @format */

"use client";

import Header from "@/components/common/header";
import { CustomTable } from "@/components/common/customTable";
import { restaurantsData } from "@/data/restaurantData";
import { Restaurant } from "@/types/restaurantTypes";
import React from "react";

const restaurantColumns = [
  { key: "restaurantName", header: "Restaurant Name" },
  { key: "location", header: "Location" },
  { key: "email", header: "Email" },
  { key: "number", header: "Number" },
];

const RestaurantPage = () => {
  const handleView = (restaurant: Restaurant) => {
    console.log("View restaurant:", restaurant);
    // Add your view logic here
  };

  const handleDelete = (restaurant: Restaurant) => {
    console.log("Delete restaurant:", restaurant);
    // Add your delete logic here
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <Header title="Restaurant List" showSearch={false} />

        {/* Table */}

        <CustomTable
          data={restaurantsData}
          columns={restaurantColumns}
          itemsPerPage={10}
          onView={handleView}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
