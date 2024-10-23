import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import { Col, Badge, Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Nav({ handleShow }) {
    const cartItems = useSelector((state) => state.Mycart.Mycartdata);
    console.log(cartItems.qty);
    
    const totalCount = cartItems.reduce((cart, item) => cart + item.qty, 0);
    console.log("Total Count:", totalCount);

    return (
        <div className='bg-body-tertiary'>
            <Container>
                <Navbar className="justify-content-between">
                    <Navbar.Brand href="#home"><b>Products</b></Navbar.Brand>
                    <Form inline>
                        <Row>
                            <Col xs="auto" className='d-none d-xs-bock'>
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    className=" mr-sm-2"
                                />
                            </Col>
                            <Col xs="auto">
                                <Button type="submit" variant="outline-success">Submit</Button>{' '}
                            </Col>
                            <Col xs="auto" className="position-relative">
                                <FaShoppingCart
                                    size={24}
                                    onClick={handleShow}
                                    style={{ cursor: 'pointer' }}
                                />
                                {totalCount > 0 && (
                                    <Badge
                                        pill
                                        bg="danger"
                                        className="position-absolute top-0 start-100 translate-middle"
                                        style={{ fontSize: '0.75rem' }}
                                    >
                                        {totalCount}
                                    </Badge>
                                )}
                            </Col>
                        </Row>
                    </Form>
                </Navbar>
            </Container>
        </div>
    )
}

export default Nav
