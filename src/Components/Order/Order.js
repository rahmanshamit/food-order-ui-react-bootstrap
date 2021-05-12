import 'bootstrap/dist/css/bootstrap.min.css';
import TopNavbar from '../Navbar/Navbar.js';
import Main from './Main.js';
import Basket from './Basket.js';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import data from '../../products.json';



function Order() {
  /* Normally I would use axios to do something like:
   const product_list = await axios.get(api_source_url);
   to asynchornously fetch the reponse, and then do
   async componentDidMount() function to set the state
 */
  const products = data['products'];
  const product_list = products.filter(product => product.title !== "Vitamin A")
  const cartItems = [];

  const onAdd = (product) => {
    /*implement*/
  };

  const onRemove = (product) => {
    /*implement*/
  };

  return (
    <main>
        <TopNavbar />
        <div className="order">
          <Row>
            <Col sm={9}>
              <Main product_list = {product_list} 
              onAdd={onAdd}
              />
            </Col>
            <Col sm={3}>
              <Basket cartItems = {cartItems} 
               onAdd={onAdd}
               onRemove={onRemove}
               />
            </Col>
          </Row>
        </div>
    </main>
  );
}

export default Order;