"use client"
import { createRentalProduct } from "@/app/api/api";
import { useState } from "react";

const NewProductForm = () => {
  const [title, setTitle] = useState("");
  const [numberInStock, setNumberInStock] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "numberInStock") {
      setNumberInStock(parseInt(value));
    } else if (name === "imageUrl") {
      setImageUrl(value);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const rentalProduct: RentalProductAttributes = {
      title,
      numberInStock,
    };
    createRentalProduct(rentalProduct);
  };
  return (
    <>
      <form className="w-full max-w-md mx-auto">
  <div className="mb-4">
    <label htmlFor="title" className="block text-gray-600 text-sm font-semibold mb-2">
      Title
    </label>
    <input
      type="text"
      id="title"
      name="title"
      value={title}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="numberInStock" className="block text-gray-600 text-sm font-semibold mb-2">
      Number in Stock
    </label>
    <input
      type="number"
      id="numberInStock"
      name="numberInStock"
      value={numberInStock}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="imageUrl" className="block text-gray-600 text-sm font-semibold mb-2">
      Image URL
    </label>
    <input
      type="text"
      id="imageUrl"
      name="imageUrl"
      value={imageUrl}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>

  <button
    type="submit"
    onClick={handleSubmit}
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
  >
    Create
  </button>
</form>

    </>
  );
};

export default NewProductForm;
