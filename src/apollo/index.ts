import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Create an auth link that adds the token to every request
const authLink = setContext((_, { headers }) => {
  // Get the authentication token from local storage if it exists
  const token = localStorage.getItem("token");

  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Use production URL when deployed, localhost for development
const API_URL = import.meta.env.PROD
  ? "https://quantify-backend-production.up.railway.app/graphql"
  : "https://localhost:7009/graphql";

const httpLink = new HttpLink({
  uri: API_URL,
  // Allow self-signed certificates in development
  fetchOptions: {
    mode: "cors",
  },
});

const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allPurchaseOrder: {
            merge(_existing, incoming) {
              return incoming;
            },
          },
          inventoryItems: {
            merge(_existing, incoming) {
              return incoming;
            },
          },
          allStorageLocations: {
            merge(_existing, incoming) {
              return incoming;
            },
          },
          warehouses: {
            merge(_existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

export default client;
