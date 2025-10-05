/** @format */

"use client";

import Header from "@/components/common/header";
import { CustomTable } from "@/components/common/customTable";
import { restaurantsData } from "@/data/restaurantData";
import { Restaurant } from "@/types/restaurantTypes";
import { RestaurantDetailsModal } from "@/components/restaurant/restaurantDetailsModal";
import React, { useState } from "react";

const restaurantColumns = [
  { key: "id", header: "Sl No." },
  { key: "restaurantName", header: "Restaurant Name" },
  { key: "location", header: "Location" },
  { key: "email", header: "Email" },
  { key: "number", header: "Number" },
];

const RestaurantPage = () => {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  const handleView = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsDetailsModalOpen(true);
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

        {/* Restaurant Details Modal */}
        <RestaurantDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          restaurant={selectedRestaurant}
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
