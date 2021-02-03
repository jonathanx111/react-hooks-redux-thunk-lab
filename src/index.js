import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import catsReducer from "./features/cats/catsSlice.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(catsReducer, composedEnhancer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
