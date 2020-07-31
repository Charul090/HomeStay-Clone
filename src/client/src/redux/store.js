import AuthReducer from "./AuthRedux/reducer";
import RegisterReducer from "./RegisterRedux/reducer"
import reducer from "./ListRedux/reducer";
import EntityReducer from "./EntityRedux/reducer"
import BookingReducer from "./BookingRedux/reducer"
import PasswordReducer from "./PasswordRedux/reducer"
import PaymentReducer from "./PaymentRedux/reducer"
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {loadAuth,saveAuth} from "./localstorage.js"
import throttle from "lodash/throttle"

const rootReducer = combineReducers({ auth:AuthReducer,regis:RegisterReducer,list:reducer,entity:EntityReducer,booking:BookingReducer,password:PasswordReducer,payment:PaymentReducer});


let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const preloaded = {
  auth:{...loadAuth()}
}
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer,preloaded,enhancer);

store.subscribe(throttle(() => {
  saveAuth({...store.getState().auth}
  );
}),1000);

export {store};

