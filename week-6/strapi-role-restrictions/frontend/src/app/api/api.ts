import { client } from "@/libs/apollo";
import { ADD_ITEM } from "@/libs/mutations";
import { QUERY_GET_ALL_ITEMS } from "@/libs/queries";
export const GetItemList = async () => {
  const { data } = await client.query({
    query: QUERY_GET_ALL_ITEMS,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
      Headers: {
        
      }
    },


  });
  const rentalProducts = data.items.data; // Adjust this based on your GraphQL response structure
  return rentalProducts;
};

export const AddItem = async (name: string) => {
    const { data } = await client.mutate({
        mutation: ADD_ITEM,
        variables: {
        name: name
        },
        
    });
    const rentalProducts = data; 
    return rentalProducts;
    };
    

