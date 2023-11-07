import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, from } from "@apollo/client";
  import { setContext } from "@apollo/link-context";
  import React from "react";
  import { useAuth0 } from "@auth0/auth0-react";
  import { onError } from "@apollo/client/link/error";
  
  const ApolloWrapperProvider = ({ children }) => {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  
    //custom error
    const errorLink = onError(({ graphqlErrors, networkError }) => {
      if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path }) => {
          alert(`Graphql error ${message}`);
        });
      }
    });
  
    const authLink = setContext(async (_, { headers }) => {
      // Get access token if user is authenticated
      const token = isAuthenticated ? await getAccessTokenSilently() : undefined;
      if (token) {
        return {
          headers: {
            authorization: token ? `Bearer ${token}` : "",
          },
        };
      } else {
        return null;
      }
    });
  
    const link = from([
      authLink,
      errorLink,
      new HttpLink({ uri: import.meta.env.VITE_APP_API_URI }),
    ]);
  
    const client = new ApolloClient({
      cache: new InMemoryCache(),
      connectToDevTools: true,
      link,
    });
  
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
  };
  
  export default ApolloWrapperProvider;
  