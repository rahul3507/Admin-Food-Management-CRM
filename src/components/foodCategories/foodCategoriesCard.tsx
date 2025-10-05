/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FoodCategoriesCardProps } from "@/types/foodCategoriesTypes";
import { DeleteModal } from "@/components/common/deleteModal";

export function FoodCategoriesCard({
  category,
  onDelete,
}: FoodCategoriesCardProps) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (onDelete) {
      onDelete(category);
    }
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between bg-transparent rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="bg-white rounded-2xl  w-full h-full flex flex-col items-center mb-4">
          {/* Food Image */}
          <div className="w-full aspect-square relative mb-2 bg-gray-50 rounded-xl overflow-hidden ">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Food Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {category.title}
          </h3>
        </div>

        {/* Delete Button */}
        <Button
          onClick={handleDeleteClick}
          className="w-full h-10 text-base font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg"
        >
          Delete
        </Button>
      </div>

      {/* Delete Modal */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Delete Food Category"
        description="Do you want to delete this food category? This action can't be undone"
      />
    </>
  );
}
