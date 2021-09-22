import "./App.css";
import Cart from "./components/Cart";
import { createStore } from "redux";
import { reducer } from "./utils/reducers";
import { Provider } from "react-redux";

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
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <Cart />
        </header>
      </Provider>
    </div>
  );
}

export default App;
