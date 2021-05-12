import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import Order from './Components/Order/Order.js';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
      <Router>
      <div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/order"><Order /></Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
