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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";

interface AssignDeliveryModalProps {
  children: React.ReactNode;
  orderId: string;
  onAssignDriver?: (
    orderId: string,
    driverData: {
      name: string;
      phone: string;
      eta: string;
    }
  ) => void;
}

const AssignDeliveryModal: React.FC<AssignDeliveryModalProps> = ({
  children,
  orderId,
  onAssignDriver,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [driverName, setDriverName] = useState("");
  const [driverPhone, setDriverPhone] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");

  const handleAssignDriver = () => {
    if (driverName && driverPhone && estimatedTime) {
      onAssignDriver?.(orderId, {
        name: driverName,
        phone: driverPhone,
        eta: estimatedTime,
      });

      // Reset form
      setDriverName("");
      setDriverPhone("");
      setEstimatedTime("");
      setIsOpen(false);
    }
  };

  const handleCancel = () => {
    // Reset form
    setDriverName("");
    setDriverPhone("");
    setEstimatedTime("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-1">
          <DialogTitle className="text-center text-lg md:text-xl font-semibold text-black">
            Assign Delivery
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-2 space-y-4">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <Edit className="w-8 h-8 text-gray-600" />
            </div>
          </div>

          {/* Driver Name */}
          <div>
            <label className="text-gray-700 text-sm md:text-base font-medium mb-2 block">
              Driver Name
            </label>
            <Input
              type="text"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              placeholder="Enter driver name"
              className="h-10 text-base border-gray-300 focus:border-custom-red focus:ring-custom-red"
            />
          </div>

          {/* Driver Phone */}
          <div>
            <label className="text-gray-700 text-sm md:text-base font-medium mb-2 block">
              Driver Phone
            </label>
            <Input
              type="tel"
              value={driverPhone}
              onChange={(e) => setDriverPhone(e.target.value)}
              placeholder="Enter driver phone number"
              className="h-10 text-base border-gray-300 focus:border-custom-red focus:ring-custom-red"
            />
          </div>

          {/* Estimated Delivery Time */}
          <div>
            <label className="text-gray-700 text-sm md:text-base font-medium mb-2 block">
              Estimated Delivery Time
            </label>
            <Input
              type="text"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(e.target.value)}
              placeholder="e.g., 25 minutes"
              className="h-10 text-base border-gray-300 focus:border-custom-red focus:ring-custom-red"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-8">
            <Button
              variant="outline"
              className="flex-1 h-10 text-base border-gray-300 text-gray-700 hover:bg-gray-50"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 h-10 text-base bg-custom-red hover:bg-custom-red/90 text-white"
              onClick={handleAssignDriver}
              disabled={!driverName || !driverPhone || !estimatedTime}
            >
              Assign Delivery
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AssignDeliveryModal;
