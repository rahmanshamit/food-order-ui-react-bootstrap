import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const striptags = require('striptags');

function Product(props)  {

    const title = props.title;
    const body = props.body;
    const price = props.price;
    const image = props.image;
    const onAdd = props.onAdd;
    

    return (
    <Col sm={4}>
      <div className="product">
          <Card className="product-card align-items-center">
          <Card.Img variant="top" src={image} />
          <Card.Body className="align-items-center">
            <Card.Title>{title}</Card.Title>
            <Card.Text>{striptags(body)}</Card.Text>
            <Card.Text>${price}</Card.Text>
            <Button variant="success" onClick={onAdd}>Add To Cart</Button>
          </Card.Body>
          </Card>
      </div>
      </Col>
    );
 }
  
  export default Product;