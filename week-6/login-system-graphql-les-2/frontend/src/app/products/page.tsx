"use server";
import NewProducts from "@/components/NewProducts";
import { fetchRentalProducts } from "../api/api";

const ProductsPage = async () => {
    let rentalProductsData = await fetchRentalProducts();
    // console.log(rentalProductsData);
    let updatedRentalProductsData = async() => { rentalProductsData = await fetchRentalProducts()};
    return (
        <>
        {rentalProductsData.map((product: RentalProduct) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 m-2">
            <h1 className="text-2xl font-semibold">{product.attributes.title}</h1>
            <p className="text-gray-600">{product.attributes.numberInStock} in stock</p>
          </div>
          
        ))}
        <NewProducts updatedRentalProductsData={updatedRentalProductsData}/>
        </>
    )
}

export default ProductsPage;