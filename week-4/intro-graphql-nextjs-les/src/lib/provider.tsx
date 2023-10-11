'use client'

import {
    ApolloClient, ApolloProvider, InMemoryCache
} from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
    cache: new InMemoryCache()
})

interface IGraphqlProviderProps {
    children: React.ReactNode;
}

export const GraphqlProvider = ({ children }: IGraphqlProviderProps) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
)
