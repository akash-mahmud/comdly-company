
import { ApolloLink } from "@apollo/client";


export const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization:typeof(window) !=='undefined'? `Bearer ${localStorage.getItem('yellow-cartee') as string}`:'',
    },
  }));

  return forward(operation);
});