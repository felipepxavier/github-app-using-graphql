import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

type ApolloProviderProps = {
  children: JSX.Element;
};
function ApolloProvider({ children }: ApolloProviderProps) {
  return <Provider client={client}>{children}</Provider>;
}

export { ApolloProvider };
