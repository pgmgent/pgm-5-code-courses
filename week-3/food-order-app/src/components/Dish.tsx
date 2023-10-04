interface DishProps {
  dish: {
    id: number;
    name: string;
    price: number;
  };
  addToCart: (dish: { id: number; name: string; price: number }) => void;
  removeFromCart: (dish: { id: number; name: string; price: number }) => void;
}

const Dish: React.FC<DishProps> = ({ dish, addToCart, removeFromCart }) => {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{dish.name}</h2>
      <p className="text-gray-600">Price: ${dish.price}</p>
      <button
        onClick={() => addToCart(dish)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 mt-2 mr-2 rounded"
      >
        Add to Cart
      </button>
      <button
        onClick={() => removeFromCart(dish)}
        className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 mt-2 rounded"
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default Dish;