'use client'

import { useEffect, useState } from 'react';
import RentalProductCard from '@/components/RentalProductCard';
import { fetchRentalProducts } from '../api/api';


const RentalPage: React.FC = () => {
  const [rentalProducts, setRentalProducts] = useState<RentalProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRentalProducts('products');
      setRentalProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Rental Products</h1>
      {rentalProducts.map((product, index) => (
        <RentalProductCard
          key={index}
          title={product.title}
          available={product.available}
          address={product.address}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default RentalPage;
