import axios from "axios";
import { redirect } from "next/navigation";

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
    redirect('/error')
  }
};


export const fetchRentalProduct = async (id: number) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
  const query = `
    query {
        rentalProduct(id: "${id}") {
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
    return response.data.data.rentalProduct.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};



export const createRentalProduct = async (product: RentalProductAttributes) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
  const query = `
  mutation {
    createRentalProduct(data: { title: "${product.title}", numberInStock: ${product.numberInStock} }) {
      data {
        id
        attributes {
          title
          numberInStock
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

export const deleteRentalProduct = async (id: string) => {

  const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
  const query = `
  mutation {
    deleteRentalProduct(id: "${id}") {
      data {
        id
      }
    }
  }`;
      try {
        const response = await axios.post(url, { query });
        return response.data.data.deleteRentalProduct.data;
      }
      catch (error) {
        console.log(error);
        return null;
      }
}

export const updateRentalProduct = async (product: RentalProduct) => {
  
    const url = `${process.env.NEXT_PUBLIC_API_URL}/graphql`;
    const query = `
    mutation {
      updateRentalProduct(id: "${product.id}", data: { title: "${product.attributes.title}", numberInStock: ${product.attributes.numberInStock} }) {
        data {
          id
          attributes {
            title
            numberInStock
          }
        }
      }
    }`;
        try {
          const response = await axios.post(url, { query });
          return response.data.data.updateRentalProduct.data;
        }
        catch (error) {
          console.log(error);
          return null;
        }
  }