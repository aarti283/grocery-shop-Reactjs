import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Api from '../Api';

 import { useAlert } from 'react-alert';
 import {CartContext} from '../auth/CartContext'; 

 import { authContext } from '../auth/AuthContext'; 

 import ReactDOM from 'react-dom';
 import {loadStripe} from '@stripe/stripe-js';
 import {
    CardElement,
    Elements,
    useStripe,
    useElements,
  } from '@stripe/react-stripe-js';




const PlaceOrder =(props)=>{
    
    const {cart } = useContext(CartContext);
    const { auth  } = useContext(authContext);
    const alert = useAlert();
    let messsage = '';
    let sub_total = 0;
    let cartData = cart.cartItem;
    let amount = 0;
    let currency = '€';

    let userId =0;	
	if(auth.data) {
		userId=auth.data.id;
	}


  if(cartData !=null) {
		cartData.map((item,key)=>{
			//console.log(item);
			amount += parseInt(item.price)*parseInt(item.cartQty);
			//totalQty += parseInt(item.cartQty);
		});
	}

   
    const stripe = useStripe();
  const elements = useElements();




  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#000",
        color: "#000",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": {
          color: "#fce883"
        },
        "::placeholder": {
          color: "#000"
        }
      },
      invalid: {
        iconColor: "#f00",
        color: "#f00"
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

     if(!error){

      try {
        const { id } = paymentMethod;
        
        const postsData =  {id: id, amount: amount,payment:paymentMethod};
         
      
        
        Api.makeStripePayment(userId,postsData).then(
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
  
               }else{
  
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

          


        
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }

     } 

  };

    
  const stripePromise = loadStripe('pk_test_N8WnMFL73lgh9jCjD3MWukiG');
     
     

	return (
			<>
				<Header />
				<div class="breadcrumb-area mb-50">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="breadcrumb-container">
                                    <ul>
                                        <li><a href="/"><i class="fa fa-home"></i> Home</a></li>
                                        <li class="active">Place Order</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="page-section section mb-50">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 offset-md-4">
                               
                            <form onSubmit={handleSubmit}>
                              <div className="StripeElement">
                                 <CardElement options={CARD_OPTIONS} />
                                 </div>
  
                                <button className="btn btn-success w-100" type="submit" disabled={!stripe}>
                                  Pay  {currency} {amount}
                                </button>
                          </form>



                            </div>
                        </div>
                    </div>
                </div>

				<Footer/>
		</>
	);
	
}
export default PlaceOrder;