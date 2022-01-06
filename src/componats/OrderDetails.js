import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Api from '../Api';
import {
	Link
	
 } from "react-router-dom";
 import { useAlert } from 'react-alert';

 import { authContext } from '../auth/AuthContext'; 
 import { useParams } from 'react-router-dom';
 


const OrderDetails =(props)=>{
    const { order_id } = useParams();
    const [orderData,setOrderData] = useState([]);
    const { auth  } = useContext(authContext);
    const alert = useAlert();
    let messsage = '';
    let sub_total = 0;
    
   
    let userId =0;	
	if(auth.data) {
		userId=auth.data.id;
	}

    useEffect(()=>{
       
            Api.getOrderByOrderId(order_id).then(
                (response)=>{
                    setOrderData(response.data.data);
                }
            );  
        
    }, [setOrderData]);
   

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

    function removeProductItm(){

    }
   
   
    
 

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
                                            { orderData != null ? orderData.map((item,key)=>{
                                                 let subtotal = parseInt(item.amount);
                                                 sub_total +=subtotal;
                                              return  <tr key={key}>
                                                    <td className="pro-thumbnail">
                                                    <Link to={'/single-product-'+item.id}> 
                                                             <img src="assets/images/products/product01.jpg" className="img-fluid" alt="Product" />
                                                    </Link>
                                                       
                                                    </td>
                                                    <td className="pro-title">  <Link to={'/single-product-'+item.id}> {item.product_name}</Link></td>
                                                    <td className="pro-price"><span>${item.order_price}</span></td>
                                                    <td className="pro-quantity">
                                                    <span>{item.buy_qty}</span>
                                                    </td>
                                                    <td className="pro-subtotal"><span>${item.amount}</span></td>
                                                    <td className="pro-remove">
                                                        <a onClick={(e) => { removeProductItm(e, item.id); }} ><i className="fa fa-trash-o"></i></a>
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
                                                <button   className="checkout-btn"><Link to="/my-account">Order List</Link></button>
                                                <button className="checkout-btn"><Link to="/">Shopping</Link></button>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div className="col-lg-6 col-12 d-flex">
                                        

                                        <div className="cart-summary">
                                            <div className="cart-summary-wrap">
                                                <h4>Order Summary</h4>
                                                <p>Sub Total <span>${sub_total}</span></p>
                                                <p>Shipping Cost <span>$00.00</span></p>
                                                <h2>Grand Total <span>${sub_total}</span></h2>
                                            </div>
                                           
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


				<Footer/>
		</>
	);
	
}
export default OrderDetails;