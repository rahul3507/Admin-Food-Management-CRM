/** @format */
"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star } from "lucide-react";
import { topRestaurants } from "@/data/dashboardData";

const TopRestTable = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border h-[430px]">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Top Restaurant</h3>
      </div>

      <ScrollArea className="h-80">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-gray-300">
              <TableHead className="text-orange-500 font-medium text-base">
                User ID
              </TableHead>
              <TableHead className="text-orange-500 font-medium text-base">
                Cooking Time
              </TableHead>
              <TableHead className="text-orange-500 font-medium text-base">
                Location
              </TableHead>
              <TableHead className="text-orange-500 font-medium text-base">
                Rating
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {topRestaurants.map((restaurant) => (
              <TableRow
                key={restaurant.id}
                className="h-6 border-b border-gray-300 hover:bg-gray-50/50"
              >
                <TableCell className="font-medium py-3  text-gray-900">
                  {restaurant.userId}
                </TableCell>
                <TableCell className="text-gray-600  py-3">
                  {restaurant.cookingTime}
                </TableCell>
                <TableCell className="text-gray-600 py-3">
                  {restaurant.location}
                </TableCell>
                <TableCell className="py-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-900 font-medium">
                      {restaurant.rating}
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  );
};

export default TopRestTable;
