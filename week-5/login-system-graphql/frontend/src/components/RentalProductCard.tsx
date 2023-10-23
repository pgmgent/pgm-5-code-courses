interface RentalProduct {
    title: string;
    available: boolean;
    address: string;
    price: number;
  }
  
  const RentalProductCard: React.FC<RentalProduct> = ({
    title,
    available,
    address,
    price,
  }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 m-4">
        <div className="text-2xl font-semibold">{title}</div>
        <div className={`text-${available ? 'green' : 'red'}-500 mb-2`}>
          {available ? 'Available' : 'Not Available'}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Address:</h3>
          <p>{address}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mt-2 mb-2">Price:</h3>
          <p>${price.toFixed(2)}</p>
        </div>
      </div>
    );
  };
  
  export default RentalProductCard;