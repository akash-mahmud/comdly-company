


import {  ApolloClient, InMemoryCache } from '@apollo/client';
import { link } from './link';









const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,



});





export default client
