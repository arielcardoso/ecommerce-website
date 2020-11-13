import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/products' component={ProductsPage} />
      <Route path='/product/:id' component={ProductPage} />
    </Router>
  );
}

export default App;
