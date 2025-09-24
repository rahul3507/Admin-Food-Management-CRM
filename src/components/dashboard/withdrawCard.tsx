/** @format */

import { ArrowUpIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import WithdrawModal from "./withdrawModal";

const WithdrawCard = () => {
  return (
    <div className="bg-red-500 rounded-4xl text-white  border border-gray-200 shadow-sm p-6 mx-8 md:mx-20 lg:mx-0  xl:mx-12 2xl:mx-20">
      <div className="text-white font-semibold text-lg mb-4">
        Current Balance
      </div>
      <div className="space-y-4">
        <div className="text-3xl font-bold">$4,570.80</div>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm">
            <ArrowUpIcon className="w-4 h-4 mr-1" />
            2.4% Since Last Week
          </div>
          <WithdrawModal>
            <Button
              variant="secondary"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Withdraw
            </Button>
          </WithdrawModal>
        </div>
      </div>
    </div>
  );
};

export default WithdrawCard;
