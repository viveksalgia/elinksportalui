import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
    const {title, text, link } = props;

    return (
        <Card className="cards shadow-lg p-3 mb-5 bg-body rounded" border="success" style={{ width: '18rem', padding: "10px", alignSelf: 'center'}}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text> {text} </Card.Text>
            <a href={ link }><Button variant="primary" >Enter</Button></a>
          </Card.Body>
        </Card>
    );
}
 
export default Cards;