import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import { Col, Badge, Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Searchingcard from './Searchingcard';
import './styles/style.css'

function Nav({ handleShow, data }) {
    const [searchInput, setSearchInput] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [close, setClose] = useState(true)

    const cartItems = useSelector((state) => state.Mycart.Mycartdata);
    const totalCount = cartItems.reduce((cart, item) => cart + item.qty, 0);
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };


    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchInput.trim()) {
            const filtered = data.filter((item) =>
                item.title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredItems(filtered);
            setClose(true)
        } else {
            setFilteredItems([]);
        }
    };

    console.log(filteredItems);



    const handleClose = () => {
        setClose(false)
    }

    return (
        <div className="bg-body-tertiary">
            <Container>
                <Navbar className="justify-content-between px-3 px-sm-0">
                    <Navbar.Brand href="#home">
                        <b>Products</b>
                    </Navbar.Brand>
                    <Form inline onChange={handleSearchSubmit} className="d-flex align-items-center ">
                        <Row className="align-items-center">
                            <Col xs="auto" className='d-none d-sm-block'>
                                <Form.Control
                                    type="text"
                                    placeholder="Search"
                                    value={searchInput}
                                    onChange={handleSearchChange}
                                    className="me-2"
                                />
                            </Col>
                            <Col xs="auto" className='d-none d-sm-block'>
                                <Button type="submit" variant="outline-success">
                                    Submit
                                </Button>
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
                <Row className='d-flex justify-content-center'>
                    <Col xs="auto" className='d-block d-sm-none'>
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={searchInput}
                            onChange={handleSearchChange}
                            className="me-2"
                        />
                    </Col>
                    <Col xs="auto" className='d-block d-sm-none'>
                        <Button type="submit" variant="outline-success">
                            Submit
                        </Button>
                    </Col>
                </Row>

                <div className='position-absolute z-1 d-flex' style={{ right: '18%' }}>
                    {filteredItems.length > 0 && close && (
                        <Searchingcard handleClose={handleClose} filteredItems={filteredItems} />
                    )}
                </div>
            </Container>
        </div>
    );
}

export default Nav;
