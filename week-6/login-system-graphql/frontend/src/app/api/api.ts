import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// export const fetchRentalProducts = async (
//   path: string,
//   params = null
// ): Promise<RentalProduct[]> => {
//   let url;
//   if (params !== null) {
//     url = `${baseUrl}/api/${path}/${params}`;
//   } else {
//     url = `${baseUrl}/api/${path}`;
//   }
//   try {
//     const response = await axios.get(`${url}`);
//     return response.data.data;
//   } catch (error) {
//     console.error('Error fetching rental products:', error);
//     return [];
//   }
// };

export const fetchRentalProducts = async (
  path: string,
  params = null
): Promise<RentalProduct[]> => {
  const url = `${baseUrl}/graphql`; // Pas aan op basis van je GraphQL-eindpunt URL

  const query = `
  # Write your query or mutation here
query {
  products {
    data{
      attributes{
        title
        available
        address
        price
        image {
          data {
            attributes { 
            url}
          }
        }
      }
    }
  }
}`;


  try {
    const response = await axios.post(url, {
      query,
    });
    return response.data.data.products.data;
  } catch (error) {
    console.error("Error fetching rental products:", error);
    return [];
  }
};

export const createRentalProduct = async (product: {
  title: String;
  available: boolean;
  address: String;
  price: Number;
}) => {
  try {
    console.log('product', product, baseUrl);
    const dataForStrapi = {};
    const response = await axios.post(`${baseUrl}/api/products`, {
      data: product,
    });
    return response.data;
  } catch (error) {
    console.error('Error creating rental product:', error);
    return [];
  }
};
