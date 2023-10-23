
import RentalProductCard from '@/components/RentalProductCard';
import { fetchRentalProducts } from '../api/api';
import CreateRentalProduct from '@/components/CreateRentalProduct';


const RentalPage: React.FC = async () => {
	const rentalProductsData = await fetchRentalProducts('products');
	console.log(rentalProductsData);
	
  return (
    <div>
      <h1>Rental Products</h1>
			<CreateRentalProduct />

      { rentalProductsData &&
			rentalProductsData.map((product, index) => (
        <RentalProductCard
          key={index}
          title={product.attributes.title}
          available={product.attributes.available}
          address={product.attributes.address}
          price={product.attributes.price}
        />
      ))}
    </div>
  );
};

export default RentalPage;
