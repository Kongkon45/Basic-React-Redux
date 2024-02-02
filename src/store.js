import { createStore } from "redux";
import counterReducer from "./Services/reducers/reducersCounter";

const store = createStore(counterReducer)
export default store;