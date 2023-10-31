import { ApolloClient, DefaultOptions, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// if we want no cache
const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // console.log("localstorage", localStorage)
  // let token = "";
  
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL + "/graphql",
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink), // Replace with your Strapi GraphQL endpoint
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});
