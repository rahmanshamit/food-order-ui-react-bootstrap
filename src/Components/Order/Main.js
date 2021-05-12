import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Product from './Product.js';


function Main(props) {

  const {product_list, onAdd} = props

  return (
      <React.Fragment>
        <Row>
        {product_list.map(product => (
            <Product
                id = {product.id}
                title = {product.title}
                body = {product.body_html}
                price = {product.variants[0].price}
                image = {product.images[0].src}
                onAdd = {onAdd}
            />
        ))} 
        </Row>
      </React.Fragment>
    );
  }
  
  export default Main;