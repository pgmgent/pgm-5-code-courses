import ProductCard from "@/components/ProductCard";
import { fetchRentalProducts } from "../api/api";
import NewProductForm from "@/components/NewProductForm";

const ProductsPage = async () => {
    const rentalProductsData = await fetchRentalProducts();
    console.log(rentalProductsData);
    return (
        <>
        <NewProductForm />
        {rentalProductsData.map((product: RentalProduct) => (
            <ProductCard key={product.id} {...product} />
        ))}
        </>
    )
}

export default ProductsPage;