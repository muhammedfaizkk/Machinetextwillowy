
import React from 'react';
import { Button, Modal, Col, Row } from 'react-bootstrap';
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
      </Modal>
    </>
  );
}

export default Cart;
