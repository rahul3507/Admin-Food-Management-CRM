/** @format */

import Header from "@/components/common/header";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-transparent pt-2 md:pt-6">
      <div className="max-w-full mx-auto space-y-6">
        {/* Header without Search */}
        <Header title="Account Settings" />

        {/* Settings Content */}

        <div className=" flex flex-col lg:flex-row gap-2 md:gap-6 ">
          {/* Profile Section */}
          <div className="flex flex-col items-center  border border-gray-200 py-6 px-12 rounded-xl gap-2 ">
            <div className="relative">
              <Image
                src="/api/placeholder/80/80"
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full object-cover bg-gray-200"
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Owner</p>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Jhon Mancal
              </h3>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default page;
