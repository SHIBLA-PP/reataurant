import { R_SUCCESS,R_FAIL } from '../constants/restConstants';

export const restaurantListReducer = (state={resturant:[]},action)=>{    //array-of-ojects are comes to restaurantListReducer  from json

    console.log(action.payload)
    switch(action.type){
        case R_SUCCESS:
            return {resturant:action.payload}   // payload from restAction.js
                                     // resturant key will use in Home.js to access(result.resturant)
        case R_FAIL:
            return {resturant:action.error}     // error from restAction.js

        default:
            return state
    }
}