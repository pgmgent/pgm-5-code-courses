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
      } catch(error) {
        console.log(error);
        return null;
      }
    }

export const createRentalProduct = async ({title, numberInStock, image} : { title: string, numberInStock: string, image: string}) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
  console.log("CREATED")
  // const query = `
  // mutation {
  //   createRentalProduct(
  //     data: {
  //       attributes: {
  //         title: "${title}"
  //         numberInStock: ${numberInStock}
  //       }
  //     }
  // }) {
  //     rentalProduct {
  //       id
  //       attributes {
  //         title
  //         numberInStock
  //         }
  //       }
  //     }
  //   }
  // }`;
  const query = `mutation {
    createRentalProduct(
      data: {
        title: "${title}"
        numberInStock:  ${numberInStock}
      }
    ) {
      data{
        id
        attributes {
                  title
                  numberInStock
                  }
      }
    }
  }
  `;  

  try {
    const response = await axios.post(url, { query });
    return response.data.data.createRentalProduct.rentalProduct;
  } catch(error) {
    console.log(error);
    return null;
  }
}