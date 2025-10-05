/** @format */

export interface FoodCategory {
  id: string;
  title: string;
  image: string;
}

export interface FoodCategoriesCardProps {
  category: FoodCategory;
  onDelete?: (category: FoodCategory) => void;
}
