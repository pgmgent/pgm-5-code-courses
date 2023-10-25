import axios from "axios";

export const fetchRentalProducts = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
  const query = `
    query {
        rentalProducts {
          data {
            id
            attributes {
              title
              numberInStock
              image { 
                data {
                  attributes{
                     url
                  }
                }
              }
            }
          }
        }
      }`;

  try {
    const response = await axios.post(url, { query });
    return response.data.data.rentalProducts.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};


export const createRentalProduct = async (product: RentalProductAttributes) => {
  // mutation {
  //   createRentalProduct(data: { title: "Testobject", numberInStock: 0 }) {
  //     data {
  //       id
  //       attributes {
  //         title
  //         numberInStock
  //       }
  //     }
  //   }
  // }
  const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
  const query = `
    mutation {
        createRentalProduct(
          data: { 
          title: "${product.title}", 
        numberInStock: ${product.numberInStock}, 
        image: { create: { url: "${product.image.data.attributes.url}" } } }) {
          data {
            id
            attributes {
              title
              numberInStock
              image { 
                data {
                  attributes{
                     url
                  }
                }
              }
            }
          }
        }
      }`;
      try {
        const response = await axios.post(url, { query });
        return response.data.data.createRentalProduct.data;
      }
      catch (error) {
        console.log(error);
        return null;
      }
}