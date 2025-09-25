/** @format */

export interface Restaurant {
  id: string;
  restaurantName: string;
  location: string;
  email: string;
  number: string;
}

export interface RestaurantTableProps {
  data: Restaurant[];
}
