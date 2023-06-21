
// import { getAuthData } from '@/utils/session';
// const auth = getAuthData();
// const token = auth.token ? `Bearer ${auth.token}` : "";


// import {  ApolloClient, InMemoryCache } from '@apollo/client';
// import { HttpLink } from '@apollo/client/link/http';


// const apolloClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: new HttpLink({
//     uri: 'http://localhost:8000/graphql',
//     headers: {
//       Authorization: token,
//     },
//   }),
//   headers: {
//     Authorization: token,
//   },
// });



// import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

// export const { getClient } = registerApolloClient(() => {
//   return apolloClient
// });
// const client = getClient();

// export default  client




import { getAuthData } from '@/utils/session';
const auth = getAuthData();
const token = auth.token ? `Bearer ${auth.token}` : "";


import {  ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:8000/graphql',
    headers: {
      Authorization: token,
    },
  }),
  headers: {
    Authorization: token,
  },
});






export default client

