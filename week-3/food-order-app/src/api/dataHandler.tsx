"use server";
import fs from 'fs/promises';
import { CartProps } from '@/types';

type Order = CartProps & {
	id: string;
};

// Function to add an order to the JSON file

export async function addOrder(order: Order): Promise<string> {
  try {
    const response = await fs.readFile(process.cwd() + '/public/orders.json');
    const existingOrders: Order[] = JSON.parse(response.toString());

    // Assuming you have a function to generate a unique order ID
    const orderId = generateUniqueOrderId();

    // Create the order object
    const newOrder: Order = {
      id: orderId,
      ...order,
    };

    // Add the new order to the existing orders
    existingOrders.push(newOrder);

    // Write the updated orders back to the JSON file
    await fs.writeFile(process.cwd() + '/public/orders.json', JSON.stringify(existingOrders));

    return 'Order added successfully';
  } catch (error) {
    console.error('Error adding order:', error);
    return 'Failed to add order';
  }
}

// Function to generate a unique order ID (you can customize this)
function generateUniqueOrderId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
