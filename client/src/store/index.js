import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"; //el thunk para poder poner el middelwers

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);//le paso nuestro reducer

export default store;
