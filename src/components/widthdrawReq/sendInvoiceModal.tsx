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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";

interface SendInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (invoiceFile: File | null) => void;
}

export function SendInvoiceModal({
  isOpen,
  onClose,
  onSubmit,
}: SendInvoiceModalProps) {
  const [invoiceFile, setInvoiceFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setInvoiceFile(file);
    }
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(invoiceFile);
    }
    // Reset form
    setInvoiceFile(null);
    onClose();
  };

  const handleClose = () => {
    // Reset form
    setInvoiceFile(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-semibold text-center text-gray-900">
            Send Invoice
          </DialogTitle>
        </DialogHeader>

        {/* Form Content */}
        <div className="px-6 pb-6 space-y-5">
          {/* Upload Section */}
          <div className="space-y-2">
            <Label
              htmlFor="invoice"
              className="text-base font-medium text-gray-700"
            >
              Upload Payment Invoice image
            </Label>

            <label
              htmlFor="invoice"
              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-10 h-10 mb-3 text-gray-400" />
                <p className="mb-2 text-base text-gray-600">
                  <span className="font-medium">
                    Drop here to attach or upload
                  </span>
                </p>
                <p className="text-sm text-gray-500">Max size: 5GB</p>
              </div>
            </label>
            <Input
              id="invoice"
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
              className="hidden"
            />

            {invoiceFile && (
              <p className="text-sm text-green-600 mt-2">
                Selected: {invoiceFile.name}
              </p>
            )}
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
              className="flex-1 h-12 text-base font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg"
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
