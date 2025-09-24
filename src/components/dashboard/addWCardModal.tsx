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

interface AddWCardModalProps {
  children: React.ReactNode;
}

const AddWCardModal: React.FC<AddWCardModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [billingAddress, setBillingAddress] = useState("");

  const handleAddCard = () => {
    // Handle add new card logic here
    console.log("Adding new card:", {
      nameOnCard,
      cardNumber,
      cardType,
      expiryDate,
      cvv,
      billingAddress,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0 relative">
          <DialogTitle className="text-center text-2xl md:text-3xl font-semibold text-black">
            Add New Card
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-2 space-y-1 md:space-y-2">
          {/* Name on Card */}
          <div>
            <label className="text-black text-base md:text-lg font-medium mb-1 block">
              Name on Card
            </label>
            <Input
              type="text"
              value={nameOnCard}
              onChange={(e) => setNameOnCard(e.target.value)}
              placeholder="Enter Email"
              className="h-10 text-base  border-gray-100 focus:border-custom-red focus:ring-custom-red"
            />
          </div>

          {/* Card Number */}
          <div>
            <label className="text-black text-base md:text-lg font-medium mb-1 block">
              Card Number
            </label>
            <Input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="---- / ---- / ---- / ----"
              className="h-10 text-base border-gray-100 focus:border-custom-red focus:ring-custom-red"
            />
          </div>

          {/* Card Type */}
          <div>
            <label className="text-black text-base md:text-lg font-medium mb-1 block">
              Card Type
            </label>
            <Select value={cardType} onValueChange={setCardType}>
              <SelectTrigger className="w-full h-12 py-5 border-gray-300 focus:border-custom-red focus:ring-custom-red">
                <SelectValue placeholder="Select Card Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mastercard">MasterCard</SelectItem>
                <SelectItem value="visa">Visa</SelectItem>
                <SelectItem value="american-express">
                  American Express
                </SelectItem>
                <SelectItem value="discover">Discover</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Expiry Date */}
          <div>
            <label className="text-black text-base md:text-lg font-medium mb-1 block">
              Expiry Date
            </label>
            <Input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              placeholder="MM / YY"
              className="h-10 text-base border-gray-100 focus:border-custom-red focus:ring-custom-red"
            />
          </div>

          {/* CVV */}
          <div>
            <label className="text-black text-base md:text-lg font-medium mb-1 block">
              CVV
            </label>
            <Input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              placeholder="-----"
              className="h-10 text-base border-gray-100 focus:border-custom-red focus:ring-custom-red"
            />
          </div>

          {/* Billing Address */}
          <div>
            <label className="text-black text-base md:text-lg font-medium mb-1 block">
              Billing Address
            </label>
            <Input
              type="text"
              value={billingAddress}
              onChange={(e) => setBillingAddress(e.target.value)}
              placeholder="Enter Address"
              className="h-10 text-base border-gray-100 focus:border-custom-red focus:ring-custom-red"
            />
          </div>

          {/* Add New Card Button */}
          <Button
            className="w-full h-12 rounded-xl bg-custom-red hover:bg-custom-red/90 text-white font-semibold text-lg mt-6"
            onClick={handleAddCard}
          >
            Add New Card
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddWCardModal;
