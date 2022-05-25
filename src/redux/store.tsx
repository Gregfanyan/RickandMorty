import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import RootReducer from "./RootReducer";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import { baseUrl } from "../api/api";
const cache = new InMemoryCache();

export const client: any = new ApolloClient({
  uri: baseUrl,
  cache,
});

const temp = localStorage.getItem("reduxState");
const persistedState = temp ? JSON.parse(temp) : {};

const store = createStore(
  RootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(client)))
);

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
