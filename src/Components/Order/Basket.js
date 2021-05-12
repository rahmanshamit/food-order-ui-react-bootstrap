import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function Basket(props) {

  return (
      <div className="basket">
          <Card className="basket-sticky">
          <Card.Body>
          <Card.Title style={{textAlign: "left"}}>Your Cart:</Card.Title>
          <ListGroup>
          <ListGroup.Item>Bison Burger Club<br/>
          <div className='count-row'> 
          <Button className="add-button">+</Button>
          <div className="product-count">1</div>
          <Button className="remove-button">-</Button>
          </div> 
          </ListGroup.Item>
            <ListGroup.Item>Chicken Bruscetta<br/>
          <div className='count-row'> 
          <Button className="add-button">+</Button>
          <div className="product-count">3</div>
          <Button className="remove-button">-</Button>
          </div> 
            </ListGroup.Item>
            <ListGroup.Item>Grilled Tailgate Chicken<br/>
          <div className='count-row'> 
          <Button className="add-button">+</Button>
          <div className="product-count">2</div>
          <Button className="remove-button">-</Button>
          </div> 
          </ListGroup.Item>
          </ListGroup>

          <Button variant="success" className="checkout-button">Checkout!</Button>
          </Card.Body>
          </Card>
      </div>
    );
 }
  
  export default Basket;