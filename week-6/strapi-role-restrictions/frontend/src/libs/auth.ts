import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"; // Import GoogleProvider
import { LOGIN_MUTATION } from "./mutations";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "your-cool-email",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }
        try {
          console.log("credentials", credentials)
          const { data } = await apolloClient.mutate({
            mutation: LOGIN_MUTATION,
            variables: {
              identifier: credentials.email,
              password: credentials.password,
            },
          });

          const { user, jwt } = data.login;
          return { ...user, jwt };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
    

  ],
  callbacks: {
    async session({ session, token }) {
      session.user = token;
      return Promise.resolve(session);
    },
    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn && account?.provider === "credentials") {
        console.log(token, user, account)
        token.id = user.id;
        token.name = user.email;
        console.log("User logged in");
      }
      return Promise.resolve(token);
    },
  },
  // ... other configurations
};

// Create an Apollo Client instance
const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL + '/graphql', // Set your GraphQL server URI here
});

const authLink = setContext((_, { headers }) => {
  // You need to implement token retrieval from the session or cookie here.
  const token = ''; // Implement token retrieval logic here.

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;