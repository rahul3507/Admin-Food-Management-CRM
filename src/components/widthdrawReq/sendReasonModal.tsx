/** @format */

"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface SendReasonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (reason: string) => void;
}

export function SendReasonModal({
  isOpen,
  onClose,
  onSubmit,
}: SendReasonModalProps) {
  const [reason, setReason] = useState("");

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(reason);
    }
    // Reset form
    setReason("");
    onClose();
  };

  const handleClose = () => {
    // Reset form
    setReason("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl text-center font-semibold text-gray-900">
            Send Reason
          </DialogTitle>
        </DialogHeader>

        {/* Form Content */}
        <div className="px-6 pb-6 space-y-5">
          {/* Reason Input */}
          <div className="space-y-2">
            <Label
              htmlFor="reason"
              className="text-base font-medium text-gray-700"
            >
              Withdraw request reject reasone
            </Label>
            <Textarea
              id="reason"
              placeholder="Enter your reject reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="min-h-[120px] text-base border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={handleClose}
              variant="outline"
              className="flex-1 h-12 text-base font-medium border-2 border-gray-300 hover:bg-gray-50 rounded-lg"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!reason.trim()}
              className="flex-1 h-12 text-base font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
