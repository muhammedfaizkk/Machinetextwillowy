
import React from 'react';
import {Modal, Col, Row } from 'react-bootstrap';
import Cartcard from './Cartcard';
import { useSelector } from 'react-redux';

function Cart({ handleClose, show }) {
  const selector = useSelector((state) => state.Mycart.Mycartdata);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='row-gap-4'>
            {selector.map((item, index) => (
              <Col key={index} md={12}>
                <Cartcard
                  title={item.title}
                  price={item.price}
                  image={item.image}
                  id={item.id}
                  qty={item.qty}
                />
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <h5>Total:
            <span className="ms-2">
              ₹{selector.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
            </span>
          </h5>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Cart;
