import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from './Components/Navbar/Navbar.js'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Order() {
  return (
    <div>
        <TopNavbar />
        <div className="order">
        <Container>
        <h1>Products</h1>
          <Row>
            <Col sm={9}>
              <h2>Products</h2>
            </Col>
            <Col sm={3}>
              <h2>Shopping Cart</h2>
            </Col>
          </Row>
        </Container>
        </div>
    </div>
  );
}

export default Order;