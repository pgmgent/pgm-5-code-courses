"use client"
import { createRentalProduct, fetchRentalProducts } from '@/app/api/api';
import { useState } from 'react'; // Import useState for form state management

function CreateRentalProduct() {
  // Initialize form state with default values
  const [formData, setFormData] = useState({
    title: '',
    available: true,
    address: '',
    price: 0,
  });

	const [open, setOpen] = useState(false);

  const handleInputChange = (e : React.ChangeEvent<HTMLInputElement> ) => {
    // Update form state when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateProduct = async () => {
    // Perform the API call with formData
    await createRentalProduct(formData);

    // After creating the product, fetch the updated list of products
    await fetchRentalProducts('products');
  };

  return (
		<>{open ? (
			<div className="bg-white rounded-lg shadow-md p-4 m-4">
      <h2 className="text-2xl font-semibold mb-4">Create Rental Product</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="available">
            Available
          </label>
          <input
            type="checkbox"
            id="available"
            name="available"
            checked={formData.available}
            onChange={(e) => setFormData({ ...formData, available: e.target.checked })}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
          onClick={handleCreateProduct}
        >
          Create Product
        </button>
      </form>
    </div>) : (
			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
				onClick={() => setOpen(true)}
			>	
				Create Rental Product
			</button>
		)}
		</>
    
  );
}

export default CreateRentalProduct;
