import React from 'react';
import Dashboard from './Dashboard';
import Navi from '../navi/Navi';
import CartDetail from '../cart/CartDetail';
import ProductDetail from '../products/ProductDetail'
import { Container } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import AddOrUpdateProduct from '../products/AddOrUpdateProduct';
function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/product" exact component={AddOrUpdateProduct} />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        <Route path="/cart" exact component={CartDetail} />
      </Switch>
    </Container>
  );
}

export default App;
