import { createStore } from "redux";
import rootReducer from "./reducers"; // Ez az általad írt gyökérreducer

const store = createStore(rootReducer);

export default store;
