/** @format */

"use client";

import Header from "@/components/common/header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { FoodCategoriesCard } from "@/components/foodCategories/foodCategoriesCard";
import { foodCategoriesData } from "@/data/foodCategoriesData";
import { FoodCategory } from "@/types/foodCategoriesTypes";

const FoodCategoriesPage = () => {
  const handleDelete = (category: FoodCategory) => {
    console.log("Delete food category:", category);
    // Add your delete logic here
  };

  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between ">
          <Header title="Food Categories" showSearch={false} />
          <Button className="flex text-sm text-white bg-orange-500 hover:bg-orange-600 ">
            <Plus /> Add Food Category
          </Button>
        </div>

        {/* Food Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
          {foodCategoriesData.map((category) => (
            <FoodCategoriesCard
              key={category.id}
              category={category}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategoriesPage;
