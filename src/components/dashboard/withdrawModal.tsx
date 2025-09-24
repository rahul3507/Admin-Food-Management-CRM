/** @format */

"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { TbCreditCard } from "react-icons/tb";
import Image from "next/image";
import AddWCardModal from "./addWCardModal";

interface WithdrawModalProps {
  children: React.ReactNode;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState("mastercard");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");

  const paymentMethods = [
    {
      id: "mastercard",
      name: "MasterCard",
      number: "**** **** 0783 7873",
      logo: "/dashboardLogo/mastercard.png",
    },
    {
      id: "paypal",
      name: "Paypal",
      number: "**** **** 0582 4672",
      logo: "/dashboardLogo/paypal.png",
    },
    {
      id: "apple",
      name: "Apple Pay",
      number: "**** **** 0582 4672",
      logo: "/dashboardLogo/apple.png",
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-center text-2xl md:text-3xl font-semibold text-black">
            Withdraw
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-2 space-y-2 md:space-y-4">
          {/* Available Balance */}
          <div>
            <p className="text-black text-lg md:text-xl mb-1">
              Available Balance
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gray-900">
              $250.00
            </p>
          </div>

          {/* Amount and Currency */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-black text-lg md:text-xl mb-1 block">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0"
                  className="pl-8 h-12 text-xl"
                />
              </div>
            </div>
            <div>
              <label className="text-black text-lg md:text-xl mb-1 block">
                Currency
              </label>
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-full h-12 py-6">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Select Credit Card */}
          <div>
            <h3 className="text-black text-lg md:text-xl mb-1">
              Select Credit card
            </h3>
            <div className="space-y-1 md:space-y-2">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setSelectedCard(method.id)}
                  className={`flex items-center justify-between px-4 py-2 border-1 rounded-xl cursor-pointer transition-all hover:bg-gray-50 ${
                    selectedCard === method.id
                      ? "border-custom-red"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <TbCreditCard className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-xs md:text-sm text-gray-900">
                        {method.name}
                      </p>
                      <p className="text-black/50 text-xs md:text-sm">
                        {method.number}
                      </p>
                    </div>
                  </div>
                  <div className="w-8 h-8 relative flex items-center justify-center">
                    <Image
                      src={method.logo}
                      alt={method.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}

              {/* Add New Card */}
              <AddWCardModal>
                <div className="flex items-center rounded-xl space-x-3 px-4 py-1 border-2 border-dashed border-gray-300  cursor-pointer hover:border-gray-400 transition-colors">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <Plus className="w-5 h-5 text-gray-600" />
                  </div>
                  <p className="font-medium text-gray-600">Add New Card</p>
                </div>
              </AddWCardModal>
            </div>
          </div>

          {/* Withdraw Button */}
          <Button
            className="w-full h-12 rounded-xl bg-custom-red hover:bg-custom-red/90 text-white font-semibold text-lg"
            onClick={() => {
              // Handle withdraw logic here
              console.log("Withdrawing:", amount, currency, "to", selectedCard);
              setIsOpen(false);
            }}
          >
            Withdraw
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawModal;
