// Cartcard.js
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './styles/style.css';
import { FaTrashAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart, updateQty } from '../redux/dataslice';

function Cartcard({ id, title, price, image,qty}) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch()


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

  const handleDelete = () => {
    dispatch(deleteItemFromCart(id))
  };

  const total = price * quantity;



  return (
    <div>
      <Card>
        <Card.Body className="d-flex justify-content-between">
          <Card.Title>
            <img className="cartimages" src={image} alt={title} />
          </Card.Title>
          <Card.Text>
            <p className="m-0">{title}</p>
            <p className="m-0">{price} INR per item</p>
            <div className="d-flex gap-3 mt-3 align-items-center">
              <Button onClick={handleDecrease}>-</Button>
              <p className="mt-2">
                <b>{qty}</b>
              </p>
              <Button onClick={handleIncrease}>+</Button>
            </div>
          </Card.Text>
          <Card.Text className="text-center d-flex flex-column align-items-center justify-content-center">
            <h5>{total} INR</h5>
            <FaTrashAlt style={{ cursor: 'pointer' }} className="text-danger" onClick={handleDelete} />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cartcard;
