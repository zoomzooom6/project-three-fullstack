import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { createStore } from "redux";
import { reducer } from "./utils/reducers";
import { Provider } from "react-redux";
import { setContext } from '@apollo/client/link/context'
import { createHttpLink } from "@apollo/client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import CustomerDashboard from "./pages/CustomerDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import Success from "./pages/Success";

import "bulma/css/bulma.min.css";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "http://localhost:3001/graphql",
});

const globalState = {
  cart: [],
  products: [],
  categories: [],
};

const store = createStore(
  reducer,
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
                  path="/vendor-dashboard"
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
