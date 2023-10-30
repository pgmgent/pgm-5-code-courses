import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

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
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        if (!credentials) {
          return null;
        }
        try {
          const { user, jwt } = await axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
              identifier: credentials.email,
              password: credentials.password,
            })
            .then((response) => {
              console.log(response.data)
              return response.data;
            })
            .catch((error) => console.log(error));
          return { ...user, jwt };
        } catch (error) {
          console.log(error);
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
        token.name = user.username;
        console.log("User logged in");
      }
      return Promise.resolve(token);
    },
  },
};
