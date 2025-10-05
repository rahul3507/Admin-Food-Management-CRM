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
import Image from "next/image";

interface AddFoodCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd?: (data: { title: string; image: File | null }) => void;
}

export function AddFoodCategoryModal({
  isOpen,
  onClose,
  onAdd,
}: AddFoodCategoryModalProps) {
  const [title, setTitle] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (onAdd) {
      onAdd({ title, image: imageFile });
    }
    // Reset form
    setTitle("");
    setImageFile(null);
    setImagePreview("");
    onClose();
  };

  const handleClose = () => {
    // Reset form
    setTitle("");
    setImageFile(null);
    setImagePreview("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md p-0 gap-0">
        {/* Header */}
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Add Food Category
          </DialogTitle>
        </DialogHeader>

        {/* Form Content */}
        <div className="px-6 pb-6 space-y-5">
          {/* Title Input */}
          <div className="space-y-2">
            <Label
              htmlFor="title"
              className="text-base font-medium text-gray-700"
            >
              Title
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter food category title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 text-base border-gray-300 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label
              htmlFor="image"
              className="text-base font-medium text-gray-700"
            >
              Image
            </Label>

            {/* Image Preview or Upload Button */}
            <div className="relative">
              {imagePreview ? (
                <div className="relative w-full h-48 border-2 border-gray-300 rounded-lg overflow-hidden">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview("");
                    }}
                    className="absolute top-2 right-2 h-8 px-3 text-sm bg-red-500 hover:bg-red-600"
                  >
                    Remove
                  </Button>
                </div>
              ) : (
                <label
                  htmlFor="image"
                  className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-orange-500 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-10 h-10 mb-3 text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      PNG, JPG or JPEG (MAX. 5MB)
                    </p>
                  </div>
                </label>
              )}
              <Input
                id="image"
                type="file"
                accept="image/png,image/jpeg,image/jpg"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-2">
            <Button
              onClick={handleClose}
              variant="outline"
              className="flex-1 h-12 text-base font-medium border-2 border-gray-300 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!title || !imageFile}
              className="flex-1 h-12 text-base font-medium bg-orange-500 hover:bg-orange-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add Category
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
