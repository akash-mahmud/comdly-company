import { split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { splitLink } from "./splitLink";
import { wsLink } from "./websocketLink";

export const splitOperation = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    splitLink,
  );