import { createStore } from "redux";
import cartReducer from "./cart";

const store = createStore(cartReducer);

export default store;
