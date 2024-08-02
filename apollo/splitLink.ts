import { ApolloLink } from "@apollo/client";

import { server2Link } from "./server2Link";
import { server1Link } from "./server1Link";
import { dataServerLink } from "./dataServer";





export const splitLink = new ApolloLink((operation, forward) => {
  const serverName = operation.getContext().server; // Assumes that you set the server name in the operation context
  let selectedLink;
  console.log(serverName);
  
  // Determine which server to use based on the serverName
  switch (serverName) {
    case 'main':
      selectedLink = server1Link();
      break;
    case 'nebula':
      selectedLink = server2Link();
      break;
    case 'data':
      selectedLink = dataServerLink();
      break;
    default:
      selectedLink = server1Link(); // Default to server 1 if serverName is not recognized
  }

  // Use the selected link for the operation
  return selectedLink.request(operation);
});
