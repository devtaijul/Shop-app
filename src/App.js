import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./components/Home/Home";
console.log(store);

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row mt-3 header">
          <div className="logo col-md-8">
            <h3>
              <span className="shop">Shop</span> app
            </h3>
          </div>
          <div className="cart col-md-4">
            <h4>
              Active- <span> 5 </span>{" "}
            </h4>
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>

        <div className="product-render mt-4">
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
