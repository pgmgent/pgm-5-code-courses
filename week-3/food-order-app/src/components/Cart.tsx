import { addOrder } from "@/api/dataHandler";
import { CartProps } from "@/types";
import { useState } from "react";



const Cart: React.FC<CartProps> = ({ cart, totalPrice }) => {
	const [cartContent, setCartContent] = useState<CartProps>(cart);

  return (
    <div className="border p-4 rounded-md shadow-md mt-4">
      <h2 className="text-xl font-semibold">Cart</h2>
      <ul className="mt-2">
        {cart.map((item) => (
          <li key={item.id} className="text-gray-700">
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p className="mt-2 font-semibold">Total Price: ${totalPrice}</p>
      <button onSubmit={(cartContent) => {addOrder(cartContent)}}
        className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 mt-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
};

export default Cart;