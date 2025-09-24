/** @format */

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  discountPercentage?: number;
  category: string;
  description: string;
  image: string;
  cookingTime: number; // in minutes
  deliveryFee: number;
  isAvailable: boolean;
  extraItems?: ExtraItem[];
}

export interface ExtraItem {
  id: number;
  name: string;
  price: number;
}

export type CategoryType = "All" | "Discount" | "Pizza" | "Salads" | "Burgers";
