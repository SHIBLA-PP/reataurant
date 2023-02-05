import React from 'react';
import { useState,useEffect  } from 'react'; 
import { useParams } from 'react-router-dom';
import {Row,Col} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Collapse from 'react-bootstrap/Collapse';

function RestDetails() {

  const [RestaurantList,setRestaurantList]=useState([])
  const params=useParams()
   console.log(params['id'])

   // For modal
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // For collaps
  const [open, setOpen] = useState(false);

    //Async in await
    async function fetchData(){
        await fetch('/restaurants.json').then(results=>results.json()    // API CALL
        .then(data=>{
            setRestaurantList(data.restaurants)
        })
        )
    }
    useEffect(()=>{
        fetchData()
    },[])

    
    //  Access/Find a single restaurant - whose params[id] and RestaurantList[id] is equal

    const singleRestaurant = RestaurantList.find(restDetail=>restDetail.id==params.id)
    console.log(singleRestaurant)
   
  return (
   
    <div>
      {
        singleRestaurant?  //Ternary operator is used to overcome the missing of data [due to asynchrouse function)
        (<Row className='my-3 mx-3 bg'>
          <Col md={4}>  {/* to display image it will take 4 columns*/}
            <Image className='p-5' src={singleRestaurant.photograph} fluid />
          </Col>
          <Col md={8}>  {/* to display the details it will take next 8 columns [4+8=12*/}
          <ListGroup className='my-5'>
              <ListGroup.Item><h3>{singleRestaurant.name}</h3></ListGroup.Item>
              <ListGroup.Item>{singleRestaurant.neighborhood}</ListGroup.Item>
              <ListGroup.Item>Cuisine: {singleRestaurant.cuisine_type}</ListGroup.Item>
              <ListGroup.Item>Address: {singleRestaurant.address}</ListGroup.Item>  
          </ListGroup>
          <Button variant="dark" onClick={handleShow}>
             Operating Hours
          </Button>
          { /* MODAL*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup>
              <ListGroup.Item>Monday: {singleRestaurant.operating_hours.Monday}</ListGroup.Item>
              <ListGroup.Item> Tuesday: {singleRestaurant.operating_hours.Tuesday}</ListGroup.Item>
              <ListGroup.Item>Wednesday: {singleRestaurant.operating_hours.Wednesday}</ListGroup.Item>
              <ListGroup.Item>Thursday: {singleRestaurant.operating_hours.Thursday}</ListGroup.Item>
              <ListGroup.Item> Friday: {singleRestaurant.operating_hours.Friday}</ListGroup.Item>
              <ListGroup.Item>Saturday: {singleRestaurant.operating_hours.Saturday}</ListGroup.Item>
              <ListGroup.Item> Sunday: {singleRestaurant.operating_hours.Sunday}</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
      </Modal>

        <br />
        {/* Collaps */}
        <Button variant='dark' className='mt-3'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
        Reviews
        </Button>
        <Collapse in={open}>
        <div id="example-collapse-text">
         {
         singleRestaurant.reviews.map(item=>(
          <div className='mt-5 mb-3'>
            <h6>Name: {item.name}</h6>
            <span>({item.date})</span>
            <p>Rating:  {item.rating}</p>
            <p>{item.comments}</p>
          </div>
         ))
         }
        </div>
      </Collapse>

          </Col>
        </Row>):'null'
      }
    </div>
  )
}

export default RestDetails