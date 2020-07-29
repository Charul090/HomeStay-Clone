import AuthReducer from "./AuthRedux/reducer";
import RegisterReducer from "./RegisterRedux/reducer"
import reducer from "./ListRedux/reducer";
import EntityReducer from "./EntityRedux/reducer"
import BookingReducer from "./BookingRedux/reducer"
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ auth:AuthReducer,regis:RegisterReducer,list:reducer,entity:EntityReducer,booking:BookingReducer});


let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export {store};

