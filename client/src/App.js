import "./App.css";
import Cart from "./components/Cart";
import { createStore } from "redux";
import { reducer } from "./utils/reducers";
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

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
      <div className="App">
        <Provider store={store}>
          <header className="App-header">
            <Cart />
          </header>
        </Provider>
      </div>
    </ApolloProvider>
  );
}

export default App;
