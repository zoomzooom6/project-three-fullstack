import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { createStore } from "redux";
import reducers from "./app/reducers/reducers";
import { Provider } from "react-redux";
import { setContext } from '@apollo/client/link/context';

import Header from "./components_old/Header";
import Footer from "./components_old/Footer";
import Home from "./pages_old/Home";
import Login from "./pages_old/Login";
import Signup from "./pages_old/Signup";
import NoMatch from "./pages_old/NoMatch";
import CustomerDashboard from "./pages_old/CustomerDashboard";
import VendorDashboard from "./pages_old/VendorDashboard";
import Success from "./pages_old/Success";

import "bulma/css/bulma.min.css";

// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem("id_token");
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : "",
//       },
//     });
//   },
//   uri: "http://localhost:3001/graphql",
// });

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return{
    headers: { 
      ...headers,
      authorization: token? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const globalState = {
  cart: [],
  products: [],
  categories: [],
};

const store = createStore(
  reducers,
  globalState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Provider store={store}>
          <div className="flex-column justify-flex-start min-100-vh">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route
                  exact
                  path="/customerdashboard"
                  component={CustomerDashboard}
                />
                <Route
                  exact
                  path="/vendordashboard"
                  component={VendorDashboard}
                />
                <Route exact path="/success" component={Success} />

                <Route component={NoMatch} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
