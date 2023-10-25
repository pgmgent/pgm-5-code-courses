"use client";
import { deleteRentalProduct, updateRentalProduct } from "@/app/api/api";
import Image from "next/image";
import React, { useState } from "react";

const ProductCard = (product: RentalProduct) => {
  const [newProduct, setNewProduct] = useState<RentalProduct>(product);
  const [isEditing, setIsEditing] = useState(false);
  const handleDelete = async () => {
    await deleteRentalProduct(product.id);
  };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewProduct({
      ...newProduct,
      attributes: {
        ...newProduct.attributes,
        [name]: value,
      },
    });
    console.log(newProduct);
  };

  const handleSave = async() => {
    setIsEditing(false);
    await updateRentalProduct(newProduct);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewProduct(product);
  };


  return (
    <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 m-2">
      <form action="">
        <input
          type="text"
          className="text-2xl font-semibold"
          value={newProduct.attributes.title}
          disabled={!isEditing}
          onChange={handleOnChange}
          name="title"
        />
        <input
          type="number"
          className="text-gray-600"
          value={`${newProduct.attributes.numberInStock}`}
          disabled={!isEditing}
          onChange={handleOnChange}
          name="numberInStock"
        />
      </form>
      {product.attributes.image?.data && (
        <div className="flex space-x-2">
          {product.attributes.image.data.map((attributes, index) => (
            <Image
              key={index}
              src={`${process.env.NEXT_PUBLIC_API_URL}${attributes.attributes.url}`}
              alt={product.attributes.title}
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
          ))}
        </div>
      )}
      <button onClick={handleDelete}>Delete</button>
      {isEditing && <button onClick={handleSave}>Save</button>}
      <button onClick={isEditing ? handleCancel : handleEdit}>
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>
  );
};

export default ProductCard;
