import { fetchRentalProducts } from "../api/api";

const ProductsPage = async () => {
    const rentalProductsData = await fetchRentalProducts();
    console.log(rentalProductsData);
    return (
        <>
        {rentalProductsData.map((product: RentalProduct) => (
            <div key={product.id} className="bg-white shadow-lg rounded-lg p-4 m-2">
            <h1 className="text-2xl font-semibold">{product.attributes.title}</h1>
            <p className="text-gray-600">{product.attributes.numberInStock} in stock</p>
          </div>
          
        ))}
        </>
    )
}

export default ProductsPage;