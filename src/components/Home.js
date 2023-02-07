import React from 'react';
import { useState,useEffect  } from 'react';  // use {}.bcz, react is not only a library for useState&useEffect.but, we need only these two.
import RestaurantCard from './RestaurantCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch,useSelector } from 'react-redux';
import { restaurantList } from '../actions/restAction';


function Home() {

    const [RestaurantList,setRestaurantList]=useState([])

    //Async in await
    // async function fetchData(){
    //     await fetch('restaurants.json').then(results=>results.json()    // API CALL
    //     .then(data=>{
    //         setRestaurantList(data.restaurants)
    //     })
    //     )
    // }    the are coded inside the action folder for redux purpose

    // Dispatch
    const dispatch=useDispatch()

    const result=useSelector(state=>state.restReducer) // restReducer - key from store which  hold the result from restaurantListReducer function
    
    //console.log(result.resturant)    // resturant - updated key(resturant[]) from restReducer.js
    let {resturant} =result        // using props data is passed
    console.log(resturant)

    useEffect(()=>{                  // Invoke fetchData() using useEffect()
        //fetchData()
        dispatch(restaurantList())    //arg from restAction.js
    },[])
    
  return (
    <Row className='p-3 m-3'>
         <h1>Restaurant List</h1>
         {
          resturant.map(rest=>(
            <Col className='height:100px;' sm={12}  md={6} lg={4} xl={3}>
                <RestaurantCard data={rest}/>
            </Col>
          ))
         }

    </Row>
  )
}

export default Home