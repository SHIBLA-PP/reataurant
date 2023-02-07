import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {restaurantListReducer} from './reducers/restReducer';

const reducer=combineReducers({

     restReducer:restaurantListReducer
})

const middleware=[thunk]
const store=createStore(reducer,applyMiddleware(...middleware))

export default store