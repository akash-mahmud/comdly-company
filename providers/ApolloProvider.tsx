'use client'
import { ApolloProvider } from '@apollo/client'
import React from 'react'
import client from '../apollo/client'

export default function ApolloClientProvider({children}) {
  return (
    <>
    <ApolloProvider client={client}>
{children}
    </ApolloProvider>
    </>
  )
}
