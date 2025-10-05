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
import { Restaurant } from "@/types/restaurantTypes";

interface RestaurantDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  restaurant: Restaurant | null;
}

export function RestaurantDetailsModal({
  isOpen,
  onClose,
  restaurant,
}: RestaurantDetailsModalProps) {
  if (!restaurant) return null;

  // Function to mask phone number
  const maskPhoneNumber = (phone: string) => {
    const digits = phone.replace(/\D/g, "");
    const lastFour = digits.slice(-4);
    return `**** **** **** *${lastFour}`;
  };

  const detailRows = [
    { label: "Sl No.", value: restaurant.id },
    { label: "Restaurant name :", value: restaurant.restaurantName },
    { label: "Email :", value: restaurant.email },
    { label: "Mobile Number :", value: maskPhoneNumber(restaurant.number) },
    { label: "Address :", value: restaurant.location },
    {
      label: "Date :",
      value: new Date()
        .toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, "-"),
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-8 pb-6 space-y-0">
          <DialogTitle className="text-2xl font-semibold text-center text-gray-900">
            Restaurant Details
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
              <span className="text-base text-gray-600 font-normal text-right">
                {row.value}
              </span>
            </div>
          ))}
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
