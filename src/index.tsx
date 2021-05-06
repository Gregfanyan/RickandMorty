import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import App from "./App";
import { baseUrl } from "./api/api";
import GlobalStyles from "./GlobalStyles";

const client: any = new ApolloClient({
  uri: baseUrl,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
