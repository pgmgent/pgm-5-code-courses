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
		image,
  }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 m-4">
  <div className="text-2xl font-semibold">{title}</div>
  <div className={`text-${available ? 'green' : 'red'}-500 mb-2`}>
    {available ? 'Available' : 'Not Available'}
  </div>

  <div className="flex items-center justify-between">
    {image && (
      <img
        src={image}
        alt={`${title} Image`}
        className="w-16 h-16 object-cover rounded-full"
      />
    )}

    <div>
      <h3 className="text-lg font-semibold">Address:</h3>
      <p>{address}</p>
    </div>

    <div>
      <h3 className="text-lg font-semibold">Price:</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  </div>
</div>

    );
  };
  
  export default RentalProductCard;