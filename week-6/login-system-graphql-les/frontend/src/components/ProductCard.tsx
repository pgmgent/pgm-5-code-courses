import React from "react";

const ProductCard = (product: RentalProduct) => {
  console.log(product.attributes.image?.data);
  return (
    <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 m-2">
  <h1 className="text-2xl font-semibold">{product.attributes.title}</h1>
  <p className="text-gray-600">
    {product.attributes.numberInStock} in stock
  </p>
  {product.attributes.image?.data && (
    <div className="flex space-x-2">
      {product.attributes.image.data.map((attributes, index) => (
        <img
          key={index}
          src={`${process.env.NEXT_PUBLIC_API_URL}${attributes.attributes.url}`}
          alt={product.attributes.title}
          className="w-12 h-12 rounded-full"
        />
      ))}
    </div>
  )}
</div>
  );
};

export default ProductCard;
