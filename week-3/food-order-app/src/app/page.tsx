"use client";
import { Cart, Dish } from '@/components';
import Image from 'next/image'
import { useState } from 'react';


interface DishData {
  id: number;
  name: string;
  price: number;
}

const dishesData: DishData[] = [
  { id: 1, name: 'Pizza', price: 10 },
  { id: 2, name: 'Burger', price: 5 },
  { id: 3, name: 'Pasta', price: 8 },
];

export default function Home() {
  const [cart, setCart] = useState<DishData[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const addToCart = (dish: DishData) => {
    const existingItem = cart.find((item) => item.id === dish.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === dish.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...dish, quantity: 1 }]);
    }

    setTotalPrice(totalPrice + dish.price);
  };

  const removeFromCart = (dish: DishData) => {
    const existingItem = cart.find((item) => item.id === dish.id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        const updatedCart = cart.filter((item) => item.id !== dish.id);
        setCart(updatedCart);
      } else {
        const updatedCart = cart.map((item) =>
          item.id === dish.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setCart(updatedCart);
      }
      setTotalPrice(totalPrice - dish.price);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dishesData.map((dish) => (
          <Dish
            key={dish.id}
            dish={dish}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <Cart cart={cart} totalPrice={totalPrice} />
    </div>
  );
};

