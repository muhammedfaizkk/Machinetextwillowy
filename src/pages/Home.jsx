import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav'
import Cart from '../components/Cart'
import axios from 'axios';
import Productcards from '../components/Productcards';
import { Col, Container, Row } from 'react-bootstrap';

function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState()

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        const res = axios.get('./products.json')
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.error('Error fetching products');
            });

    }

    return (
        <div>
            <Nav handleShow={handleShow} />
            <Cart handleClose={handleClose} show={show} />
            <Container>
                <Row className='py-5 row-gap-4'>
                    {data?.map((item, index) => (
                        <Col key={index} md={4} lg={3}>
                            <Productcards
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                image={item.image}
                                item={item}
                                
                            />
                        </Col>
                    ))}
                </Row>
            </Container>


        </div>
    )
}

export default Home
