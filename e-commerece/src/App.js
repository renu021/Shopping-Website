
import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Route/Home';
import Login from './Route/Log';
import Signin from './Route/Sign';
import AddProduct from './Component/AddProducts';
import CartPage from './Route/CartPage';

function App() {
 

  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/Log" component={Login} />
        <Route path="/Sign" component={Signin} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/cart" component={CartPage} />
        <Route path="/" exact component={Home} />
      </Switch>

      </Router>
    </div>
  );
}

export default App;


