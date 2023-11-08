"use client"
import { ApolloProvider } from '@apollo/client'
import { client } from '@/libs/apolloClient'


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}
