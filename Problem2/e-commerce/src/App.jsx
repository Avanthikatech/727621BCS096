import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductDetails from './pages/ProductDetails';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={AllProducts} />
      <Route path="/product/:id" component={ProductDetails} />
    </Switch>
  </Router>
);

export default App;
