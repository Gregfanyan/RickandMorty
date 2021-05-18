import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import localforage from "localforage";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { baseUrl } from "./api/api";
import GlobalStyles from "./GlobalStyles";
const cache = new InMemoryCache();

const client: any = new ApolloClient({
  uri: baseUrl,
  cache,
});

localforage.config({
  driver: localforage.LOCALSTORAGE,
  name: "app",
});

const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID || "";
const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}
  >
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </ApolloProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
