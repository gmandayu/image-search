import { configureStore } from "@reduxjs/toolkit";
import Reducers from "../Reducers/Reducers";

const Store = configureStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default Store;
