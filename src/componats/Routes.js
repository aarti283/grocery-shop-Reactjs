import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from  './About';
import ProductListByCategory from  './ProductListByCategory';
import MyAccount from  './MyAccount';
import SingleProduct from  './SinglepPoduct';
import Cart from './Cart';
import Checkout from './Checkout';
import Register from './Register';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './Login';
import OrderDetails from './OrderDetails';
import PlaceOrder from './PlaceOrder';

import Hmenu from './Hmenu';

const Routes = (props) => (
    <Router {...props}>
        <Switch>
            <Route exact path="/" component ={Home} />
            <Route path="/contact" component ={Contact} />
            <Route path="/product-list-by-category-:cat_id-:subcategoryId" component ={ProductListByCategory} />
            <Route path="/single-product-:product_id" component ={SingleProduct} />
            <Route path="/my-account" component ={MyAccount} />
            <Route path="/cart" component ={Cart} />
            <Route path="/order_detail-:order_id" component ={OrderDetails} />
            <Route path="/checkout" component ={Checkout} />
            <Route path="/register" component ={Register} />
            <Route path="/login" component ={Login} />
            <Route path="/about" component ={About} />
            <Route path="/placeorder" component ={PlaceOrder} />
            <Route path="/Hmenu" component ={Hmenu} />
        </Switch>
    </Router>
);
export default Routes;
