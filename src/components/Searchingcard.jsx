import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Searchingcard({filteredItems,handleClose}) {

    console.log('filteredItem',filteredItems);
    
    return (
        <div>
            {filteredItems.map((item) => (
                <Card key={item.id} style={{ width: '300px' }}>
                    <Button variant="close" onClick={handleClose} className="ms-2" />
                    <Card.Body className="d-flex justify-content-between">
                        <Card.Title className="d-flex align-items-center">
                            <img className="cartimages" src={item.image} alt={item.title} />
                            
                        </Card.Title>
                        <Card.Text>
                            <p className="m-0">{item.title}</p>
                            <p className="m-0">{item.price} INR per item</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Searchingcard
