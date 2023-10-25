import { fetchRentalProduct } from "@/app/api/api";
import React from "react";

const page = async ({ params }: { params: { id: number } }) => {
  const rentalProductsData = await fetchRentalProduct(params.id);
  console.log(rentalProductsData);
  if (!rentalProductsData) {
    return <div>Something went wrong!</div>;
  }
  return (
    <div>
      <h1>{rentalProductsData.attributes.title}</h1>
      <p>{rentalProductsData.attributes.numberInStock}</p>
    </div>
  );
};

export default page;
