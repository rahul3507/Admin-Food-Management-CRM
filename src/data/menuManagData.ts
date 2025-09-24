/** @format */

import { MenuItem } from "@/types/foodMenuTypes";

export const menuManagData: MenuItem[] = [
  {
    id: 1,
    name: "Classic Pizza",
    price: 12.99,
    category: "Pizza",
    description:
      "Pizza With Meat is a typical food from our demand recommend restaurant that is much in demand by many people, this is very delicious.",
    image: "/menuManagImage/pizza.png",
    cookingTime: 20,
    deliveryFee: 20.02,
    isAvailable: true,
    extraItems: [
      { id: 1, name: "Extra Cheese", price: 2 },
      { id: 2, name: "Pepperoni", price: 2.5 },
      { id: 3, name: "Mushrooms", price: 1.5 },
    ],
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 12.99,
    category: "Pizza",
    description:
      "Pizza With Meat is a typical food from our demand recommend restaurant that is much in demand by many people, this is very delicious.",
    image: "/menuManagImage/pizza2.png",
    cookingTime: 20,
    deliveryFee: 0, // Free delivery
    isAvailable: true,
    extraItems: [
      { id: 4, name: "Extra Cheese", price: 2 },
      { id: 5, name: "Pepperoni", price: 2.5 },
      { id: 6, name: "Mushrooms", price: 1.5 },
    ],
  },
  {
    id: 3,
    name: "Big Pizza",
    price: 12.99,
    category: "Pizza",
    description:
      "Pizza With Meat is a typical food from our demand recommend restaurant that is much in demand by many people, this is very delicious.",
    image: "/menuManagImage/pizza3.png",
    cookingTime: 10,
    deliveryFee: 20.02,
    isAvailable: true,
    extraItems: [
      { id: 7, name: "Extra Cheese", price: 2 },
      { id: 8, name: "Pepperoni", price: 2.5 },
      { id: 9, name: "Mushrooms", price: 1.5 },
    ],
  },
  {
    id: 4,
    name: "Classic Burger",
    price: 8.99,
    discountPrice: 6.99,
    discountPercentage: 22,
    category: "Burgers",
    description:
      "Classic beef burger with fresh lettuce, tomatoes, and our special sauce. A timeless favorite.",
    image: "/menuManagImage/burger.png",
    cookingTime: 15,
    deliveryFee: 15.0,
    isAvailable: true,
    extraItems: [
      { id: 10, name: "Extra Patty", price: 3 },
      { id: 11, name: "Cheese", price: 1.5 },
      { id: 12, name: "Bacon", price: 2 },
    ],
  },
  {
    id: 5,
    name: "Cheese Burger",
    price: 9.99,
    discountPrice: 7.99,
    discountPercentage: 20,
    category: "Burgers",
    description:
      "Juicy beef patty with melted cheese, pickles, and our signature burger sauce.",
    image: "/menuManagImage/burger2.png",
    cookingTime: 15,
    deliveryFee: 15.0,
    isAvailable: false,
    extraItems: [
      { id: 13, name: "Extra Patty", price: 3 },
      { id: 14, name: "Extra Cheese", price: 1.5 },
      { id: 15, name: "Bacon", price: 2 },
    ],
  },
  {
    id: 6,
    name: "Caesar Salad",
    price: 7.99,
    category: "Salads",
    description:
      "Fresh romaine lettuce with parmesan cheese, croutons, and our homemade caesar dressing.",
    image: "/menuManagImage/pizza4.png",
    cookingTime: 5,
    deliveryFee: 10.0,
    isAvailable: true,
    extraItems: [
      { id: 16, name: "Grilled Chicken", price: 4 },
      { id: 17, name: "Extra Parmesan", price: 2 },
      { id: 18, name: "Croutons", price: 1 },
    ],
  },
  {
    id: 7,
    name: "Greek Salad",
    price: 8.99,
    category: "Salads",
    description:
      "Fresh vegetables with feta cheese, olives, and olive oil dressing.",
    image: "/menuManagImage/pizza4.png",
    cookingTime: 5,
    deliveryFee: 10.0,
    isAvailable: true,
    extraItems: [
      { id: 19, name: "Extra Feta", price: 2.5 },
      { id: 20, name: "Olives", price: 1.5 },
      { id: 21, name: "Cucumber", price: 1 },
    ],
  },
  {
    id: 8,
    name: "BBQ Pizza",
    price: 15.99,
    discountPrice: 12.99,
    discountPercentage: 19,
    category: "Pizza",
    description:
      "Delicious BBQ chicken pizza with red onions, cilantro, and BBQ sauce.",
    image: "/menuManagImage/pizza4.png",
    cookingTime: 25,
    deliveryFee: 20.02,
    isAvailable: false,
    extraItems: [
      { id: 22, name: "Extra Chicken", price: 3 },
      { id: 23, name: "Extra Cheese", price: 2 },
      { id: 24, name: "Red Onions", price: 1 },
    ],
  },
];
