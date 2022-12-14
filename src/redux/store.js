import {legacy_createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { cartReducer } from "./reducers/cartReducer";
const reducer=combineReducers({
cart:cartReducer,
});
const middleware=[thunk];
const cartFromLocalStorage=localStorage.getItem("cart")? 
JSON.parse(localStorage.getItem("cart")):[]
const INITIAL_STATE={
    cart:{
        cartItems:cartFromLocalStorage
    }
}
const store=legacy_createStore(reducer,INITIAL_STATE,
     composeWithDevTools(applyMiddleware(...middleware)));
export default store;