import axios from "axios";
import { R_SUCCESS,R_FAIL } from "../constants/restConstants";
                                                                    //Action files are executed by components
 
export const restaurantList=()=> async (dispatch)=>{          
    try
   {
    const {data}= await axios.get('./restaurants.json')         // API call using axios
    console.log(data)
    dispatch({
        type:R_SUCCESS,payload:data.restaurants      // arrayname from reastaurants.json
        
    })
   }
   catch(error){
        dispatch({
            type:R_FAIL,error:error
        })
   }
}