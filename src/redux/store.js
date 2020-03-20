import { createStore } from "redux";

import productReducer from "./product/ProductReducer";

const store = createStore(productReducer);
console.log(store.getState());



export default store