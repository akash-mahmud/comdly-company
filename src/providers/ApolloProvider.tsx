"use client";

import client from "@/apollo/client";
import { store } from "@/store";
import { ApolloProvider } from "@apollo/client";

export function ApolloClientProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client} >{children}</ApolloProvider>;
}
