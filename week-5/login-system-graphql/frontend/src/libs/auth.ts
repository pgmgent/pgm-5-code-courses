import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
import { access } from 'fs';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email:',
          type: 'text',
          placeholder: 'your-cool-email',
        },
        password: {
          label: 'Password:',
          type: 'password',
          placeholder: 'your-awesome-password',
        },
      },
      async authorize(credentials) {
        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        // const user = { id: '42', name: 'Dave', password: 'nextauth' };

        // if (
        //   credentials?.username === user.name &&
        //   credentials?.password === user.password
        // ) {
        //   return user;
        // } else {
        //   return null;
        // }
        if (credentials == null) return null;

        try {
          const { user, jwt } =
            (await axios
              .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
                identifier: credentials.email,
                password: credentials.password,
              })
              .then((response) => {
                return response.data;
              })
              .catch((error) => {
                console.log(error.response);
                throw new Error(error.response.data.message);
              })) || null;
          console.log('User >>>>>>>>>>>>>> ', user);
          console.log('JWT >>>>>>>>>>>>>> ', jwt);
          return { jwt, ...user };
        } catch (error) {
          console.log('Äutheticate error', error);
          // Sign In Fail
          // return null;
        }
        // );
      },
    }),
  ],
  // database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: { strategy: 'jwt' },
  callbacks: {
    // session: async (session, user) => {
    //   session.jwt = user.jwt;
    //   session.id = user.id;
    //   return Promise.resolve(session);
    // },
    async session({ user, session, token }) {
      session.user = token as any;

      // session.user.id = user ? user.id : null;
      // session.user.name = user ? user.name : null;
      // session.accessToken = token.accessToken;

      return Promise.resolve(session);
    },
    // async jwt({ token, user, account }) {
    //   if (account) {
    //     console.log('Google User >>>>>>>>>>>>>> ', user);
    //     token.accessToken = account.access_token
    //     token.id = user.id
    //     token.name = user.username
    //   }
    //   return token
    // }
    async jwt({ token, user, account }) {
      const isSignIn = user ? true : false;
      if (isSignIn && account) {
        try {
          if (account.provider === 'credentials') {
            user = user as { jwt: string; id: string; username: string}
            token.jwt = user.jwt;
            token.id = user.id;
            token.name = user.username;
            console.log('Credentials User >>>>>>>>>>>>>> ', typeof(user));
            return Promise.resolve(token);
          } else if (account.provider === 'google') {
            const public_url = process.env.NEXT_PUBLIC_API_URL;
            const response = await fetch(
              `${public_url}/api/auth/${account.provider}/callback?access_token=${account?.access_token}`
            );
            const data = await response.json();
            if (!data.error) {
              token.jwt = data.jwt;
              token.id = data.user.id;
            }
          }
        } catch (error) {
          console.error('Fetch failed:', error);
        }
      }
      return Promise.resolve(token);
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
};
