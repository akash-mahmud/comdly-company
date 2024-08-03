import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from 'cross-fetch';

import { SERVER_1 } from "../config/secrets";
import { RefreshTokenDocument } from "../graphql/generated/schema";

const token = typeof (window) !== 'undefined' ? `Bearer ${localStorage.getItem('yellow-cartee') as string}` : ''
export const renewTokenApiClient = new ApolloClient({
  link: new HttpLink({
    uri: SERVER_1,
    headers: {
      Authorization: token,
      'Apollo-Require-Preflight': 'false'
    },
    credentials: 'include',
    fetch
  }),
  cache: new InMemoryCache(),
})
export const refreshToken = async (): Promise<string | null> => {

  const { data } = await renewTokenApiClient.mutate({
    mutation: RefreshTokenDocument
  })

  const newAccessToken = data?.refreshToken

  return newAccessToken
};