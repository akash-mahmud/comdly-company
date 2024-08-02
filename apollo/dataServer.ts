import { ApolloLink } from "@apollo/client";
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';


import fetch from 'cross-fetch';
import { DATA_SERVER } from "../config/secrets";
export const dataServerLink =  ()=> { 
  let token =''
  try {
    token = typeof(window) !=='undefined'? `Bearer ${localStorage.getItem('yellow-cartee') as string}`:''
  } catch (error) {
     token =''
  }
  return ApolloLink.from([
  
    createUploadLink({
      uri: DATA_SERVER,
      headers: {      
           authorization: `Bearer ${token}`,
           'Apollo-Require-Preflight': 'true',
// 'Access-Control-Allow-Credentials':'true'
    },
      credentials: 'include',
      fetch,

    }),
  ])}