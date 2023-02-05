import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestaurantCard({data}) {

    console.log(data)
  return (
    <Link style={{textDecoration:'none',color:'white'}} to={`restaurant/${data.id}`} >
    <div className='p-3'>
       <Card className="p-3">
      <Card.Img variant="top" src={data.photograph} className='img-fluid p-3' />
      <Card.Body>
        
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.address} &nbsp;&nbsp;
          {data.neighborhood}   
        </Card.Text>
        <Card.Text>
          Cuisine: {data.cuisine_type}
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
  </Link>
  
  )
}

export default RestaurantCard