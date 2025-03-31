import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <Router>
      <Route>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/" exact component={ProductList} />
      </Route>
    </Router>
  );
};

export default App;
