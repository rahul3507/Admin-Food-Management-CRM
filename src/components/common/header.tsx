/** @format */

"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import type { HeaderProps } from "@/types/commonTypes";

const Header: React.FC<HeaderProps> = ({
  title,
  description,
  showSearch = false,
  searchPlaceholder = "Search...",
  onSearchChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
      {/* Left Side - Title and Description */}
      <div className="space-y-1">
        <h1 className="text-xl md:text-3xl font-semibold text-black">
          {title}
        </h1>
        <p className="text-black/50 text-sm md:text-base">{description}</p>
      </div>

      {/* Right Side - Search Bar */}
      {showSearch && (
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <Input
            type="text"
            placeholder={searchPlaceholder}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="w-full pl-10 pr-4 py-2 h-12 bg-gray-30 border border-gray-500 rounded-xl text-gray-700 placeholder-gray-400 focus:bg-white focus:border-custom-red focus:ring-custom-red focus:outline-none transition-all duration-200"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
