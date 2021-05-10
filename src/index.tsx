import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import localforage from "localforage";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";
import { baseUrl } from "./api/api";
import GlobalStyles from "./GlobalStyles";

const client: any = new ApolloClient({
  uri: baseUrl,
});

localforage.config({
  driver: localforage.LOCALSTORAGE,
  name: "app",
});

const clientID = process.env.REACT_APP_AUTH0_CLIENT_ID || "";
const domain = process.env.REACT_APP_AUTH0_DOMAIN || "";
console.log("clientID", clientID);
console.log("domain", domain);

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
