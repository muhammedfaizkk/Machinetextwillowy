import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/dataslice';

function Productcards({item, title, description, price, image }) {
  const dispatch = useDispatch()

  const addTocart = () => {
    dispatch((addToCart(item)))
  }

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{ height: '270px' }} src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <h5><b>₹{price}</b></h5>
          <Button variant="dark" onClick={addTocart}>Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Productcards
