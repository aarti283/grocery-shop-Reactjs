import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Api from '../Api';
import {
	Link
	
 } from "react-router-dom";
 import { useAlert } from 'react-alert';
 import {CartContext} from '../auth/CartContext'; 

 import { authContext } from '../auth/AuthContext'; 
 


const Cart =(props)=>{
    const {cart ,setCardData, removeCardItem,emptyCardItem} = useContext(CartContext);
    const { auth  } = useContext(authContext);
    const alert = useAlert();
    let messsage = '';
    let sub_total = 0;
    let cartData = cart.cartItem;
   
    let userId =0;	
	if(auth.data) {
		userId=auth.data.id;
	}
    let currency = '€';

    function updateCartItmQty(e, type,item){
    
        if(type==1){
            messsage = 'Product has been added in cart Successfully';
        }else{
             messsage = 'Product has been removed in cart Successfully';   
        }
       
        let qty = 0;
        if(type==1){
            qty = parseInt(item.cartQty)+1;
        }else{
            qty = (parseInt(item.cartQty) >1)?item.cartQty-1:1;
        }
        setCardData(item,qty);

        alert.show(messsage, {
            //timeout: 2000, // custom timeout just for this one alert
            type: 'success',
            /*onOpen: () => {
              console.log('hey')
            }, */ // callback that will be executed after this alert open
            /*onClose: () => {
                
             
                //console.log('closed');
            } */
        });
       
    }


    function removeCartItm(e, product_id){
        let  messsage = 'Product has been removed in cart Successfully';
        removeCardItem(product_id);
        alert.show(messsage, {
            //timeout: 2000, // custom timeout just for this one alert
            type: 'success',
            /*onOpen: () => {
              console.log('hey')
            }, */ // callback that will be executed after this alert open
            /*onClose: () => {
                
             
                //console.log('closed');
            } */
        });
       
    }

   
    
    function checkout(){
        if(userId !=0){    
            // alert(JSON.stringify(data));
            Api.checkout(userId,cartData).then(
             (response)=>{
                 // console.log(response.data.data);
                  if(response.data.success){
                    
                     alert.show(response.data.message, {
                         timeout: 3000, // custom timeout just for this one alert
                         type: 'success',
                         onOpen: () => {
                            
                          // console.log('hey')
                         },  // callback that will be executed after this alert open
                         onClose: () => {
                             //return <Redirect to='/' />
                             window.location.href = '/';
                          // console.log('closed')
                         } 
                         
                     });
     
                  }
                  
                  else{
     
                    // console.log(response.data.message);
                     alert.show(response.data.message, {
                         timeout: 3000, // custom timeout just for this one alert
                         type: 'error'
                         /*onOpen: () => {
                           console.log('hey')
                         }, // callback that will be executed after this alert open
                         onClose: () => {
                           console.log('closed')
                         } */
                     });
     
                  }
             }
             ) 
     
        }else{

            alert.show('Please login to order', {
                timeout: 3000, // custom timeout just for this one alert
                type: 'error'
                /*onOpen: () => {
                  console.log('hey')
                }, // callback that will be executed after this alert open
                onClose: () => {
                  console.log('closed')
                } */
               });
        } 

    }

    function emptyCart(){

        let  messsage = 'Cart has been Empty';
        emptyCardItem();
        alert.show(messsage, {
            //timeout: 2000, // custom timeout just for this one alert
            type: 'success',
            /*onOpen: () => {
              console.log('hey')
            }, */ // callback that will be executed after this alert open
            /*onClose: () => {
                
             
                //console.log('closed');
            } */
        });

    }
 
	let imageUrl = 'http://asianfoodscork.apoliums.com/';

	return (
			<>
				<Header  />
				<div className="breadcrumb-area mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="breadcrumb-container">
                                    <ul>
                                        <li><a href="/"><i className="fa fa-home"></i> Home</a></li>
                                        <li className="active">Cart</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-section section mb-50">
                    <div className="container">
                        <div className="row">
                            {  cartData !==null && cartData.length >0 ?  
                            <div className="col-12">
                                <form action="#">
                                 
                                    <div className="cart-table table-responsive mb-40">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="pro-thumbnail">Image</th>
                                                    <th className="pro-title">Product</th>
                                                    <th className="pro-price">Price</th>
                                                    <th className="pro-quantity">Quantity</th>
                                                    <th className="pro-subtotal">Total</th>
                                                    <th className="pro-remove">Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            { cartData != null ? cartData.map((item,key)=>{
                                                 let subtotal = parseInt(item.price)*parseInt(item.cartQty);
                                                 sub_total +=subtotal;
                                              return  <tr key={key}>
                                                    <td className="pro-thumbnail">
                                                    <Link to={'/single-product-'+item.id}> 
                                                             <img src={imageUrl+item.thumbnail} className="img-fluid" alt="Product" />
                                                    </Link>
                                                       
                                                    </td>
                                                    <td className="pro-title">  <Link to={'/single-product-'+item.id}> {item.product_name}</Link></td>
                                                    <td className="pro-price"><span>{currency}{item.price}</span></td>
                                                    <td className="pro-quantity">
                                                        <div className="pro-qty"><input type="text" value={(item.cartQty)} />{item.cartQty}<a className="inc qty-btn" onClick={(e) => { updateCartItmQty(e, 1,item); }}  >+</a><a  className="dec qty-btn" onClick={(e) => { updateCartItmQty(e, 2,item); }}>-</a></div>
                                                    </td>
                                                    <td className="pro-subtotal"><span>{currency}{subtotal}</span></td>
                                                    <td className="pro-remove">
                                                        <a onClick={(e) => { removeCartItm(e, item.id); }} ><i className="fa fa-trash-o"></i></a>
                                                    </td>
                                                </tr>
                                                 }) :null }
                                              
                                            </tbody>
                                        </table>
                                    </div>

                                    
                                </form>

                                <div className="row">
                                    <div className="col-lg-6 col-12">
                                        
                                    <div className="cart-summary">
                                           
                                            <div className="cart-summary-button">
                                                <button  onClick={(e) => { emptyCart(e); }}  className="checkout-btn">Empty Cart</button>
                                                <button className="update-btn"><Link to="/">Update Cart</Link></button>
                                            </div>
                                        </div>

                                        
                                    </div>

                                    <div className="col-lg-6 col-12 d-flex">
                                        

                                        <div className="cart-summary">
                                            <div className="cart-summary-wrap">
                                                <h4>Cart Summary</h4>
                                                <p>Sub Total <span>{currency}{sub_total}</span></p>
                                                <p>Shipping Cost <span>{currency}00.00</span></p>
                                                <h2>Grand Total <span>{currency}{sub_total}</span></h2>
                                            </div>
                                            <div className="cart-summary-button">
                                                 <button   className="checkout-btn"><Link to="/checkout">Checkout</Link></button>
                                                <button className="update-btn" onClick={(e) => { checkout(e); }} >Checkout With Login</button>
         
                                              
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                            :<div className="w-100"> <p className="text-center text-danger">Cart is Empty  <button className="btn btn-success ml-2"><Link to="/">Continue Shopping</Link></button></p> </div> }
                        </div>
                    </div>
                </div>


				<Footer/>
		</>
	);
	
}
export default Cart;