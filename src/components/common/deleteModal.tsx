/** @format */

"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2, X } from "lucide-react";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

export function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Order",
  description = "Do you want to delete this order? This action can't be undone",
}: DeleteModalProps) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0 border-none">
        <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
          {/* Trash Icon */}
          <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
              <Trash2 className="h-8 w-8 text-red-500" strokeWidth={2.5} />
            </div>
          </div>

          {/* Title */}
          <DialogHeader className="mb-2">
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              {title}
            </DialogTitle>
          </DialogHeader>

          {/* Description */}
          <DialogDescription className="mb-6 text-base text-gray-500 max-w-sm">
            {description}
          </DialogDescription>

          {/* Action Buttons */}
          <div className="flex  w-full justify-between gap-4 px-4">
            <Button
              onClick={onClose}
              variant="outline"
              className=" h-12 text-base font-medium border-2 border-gray-300 hover:bg-gray-50 rounded-lg"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirm}
              className=" h-12 text-base font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg"
            >
              Delete
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
