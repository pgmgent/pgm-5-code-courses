import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({	
      name: "Credentials",	
      credentials: {	
        username: { label: "Username", type: "text", placeholder: "Your name" },	
        password: { label: "Password", type: "password", placeholder: "Password" },	
      },	
      async authorize(credentials) {	
        if(credentials == null) return null;
        // TODO: Make connection with database or other service
        const user = { id: "1", name: "Admin", password: "admin" };
        if (user && user.password === credentials?.password) {	
          return user;	
        } else {	
          return null;	
        }
       
      },
    }),
  ],
};

