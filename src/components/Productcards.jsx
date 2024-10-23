import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/dataslice';
import { updateQty } from '../redux/dataslice';

function Productcards({ item, title, description, price, image,id}) {

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()
  const [buttonManage, setButtonmanage] = useState(true)
  const addTocart = () => {
    dispatch((addToCart(item)))
    setButtonmanage(false)
  }
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
    dispatch(updateQty({ id, quantity: quantity + 1 }))
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      dispatch(updateQty({ id, quantity: quantity - 1 }))
    }
  };
  

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

          {buttonManage ?
            <Button variant="dark" onClick={addTocart}>Add To Cart</Button>
            :

            <div className="d-flex gap-3 mt-3 align-items-center">
              <Button onClick={handleDecrease}>-</Button>
              <p className="mt-2">
                <b>{quantity}</b>
              </p>
              <Button onClick={handleIncrease}>+</Button>
            </div>

          }


        </Card.Body>
      </Card>
    </div>
  )
}

export default Productcards
