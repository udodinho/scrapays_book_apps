import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import ApolloWrapperProvider from "../provider/ApolloWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={import.meta.env.VITE_APP_API_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_APP_API_AUTH0_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: import.meta.env.VITE_APP_API_AUTH0_AUDIENCE,
    }}
  >
    <ApolloWrapperProvider>
      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </ApolloWrapperProvider>
  </Auth0Provider>
);
