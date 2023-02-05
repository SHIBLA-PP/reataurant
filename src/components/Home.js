import React from 'react';
import { useState,useEffect  } from 'react';  // use {}.bcz, react is not only a library for useState&useEffect.but, we need only these two.
import RestaurantCard from './RestaurantCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {

    const [RestaurantList,setRestaurantList]=useState([])

    //Async in await
    async function fetchData(){
        await fetch('restaurants.json').then(results=>results.json()    // API CALL
        .then(data=>{
            setRestaurantList(data.restaurants)
        })
        )
    }

    useEffect(()=>{                  // Invoke fetchData() using useEffect()
        fetchData()
    },[])
    
  return (
    <Row className='p-3 m-3'>
         <h1>Restaurant List</h1>
         {
          RestaurantList.map(rest=>(
            <Col className='height:100px;' sm={12}  md={6} lg={4} xl={3}>
                <RestaurantCard data={rest}/>
            </Col>
          ))
         }

    </Row>
  )
}

export default Home