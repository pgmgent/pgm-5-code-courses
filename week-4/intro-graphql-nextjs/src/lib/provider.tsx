'use client';

import {
 ApolloClient,
 ApolloProvider,
 InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
 uri: 'https://countries.trevorblades.com',
 cache: new InMemoryCache(),
});

interface IGraphQlProviderProps {
 children: React.ReactNode;
}

const GraphQlProvider: React.FC<IGraphQlProviderProps> = ({
 children,
}) => {
 return (
  <ApolloProvider client={client}>
   {children}
  </ApolloProvider>
 );
};

export default GraphQlProvider;