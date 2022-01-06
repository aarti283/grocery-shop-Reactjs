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
 import { useForm } from 'react-hook-form';
 import { Redirect ,useHistory } from "react-router-dom";




const Checkout =(props)=>{
    const [checked,setChecked] = useState(false);
    const {cart } = useContext(CartContext);
    const { auth  } = useContext(authContext);
    const alert = useAlert();
    let messsage = '';
    let sub_total = 0;
    let cartData = cart.cartItem;
    let currency = '€';
    let history = useHistory();
    let userId =0;	
	if(auth.data) {
		userId=auth.data.id;
	}

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

     
      const onSubmit = (data,e) => {
          console.log("place order");
          history.push("/placeorder");
        // return <Redirect to='/placeorder' />
        // alert(JSON.stringify(data));
      /*  Api.contactUser(JSON.stringify(data)).then(
         (response)=>{
              console.log(response.data.data);
              if(response.data.success){
                 e.target.reset(); // reset after form submit   
                 alert.show(response.data.message, {
                     timeout: 3000, // custom timeout just for this one alert
                     type: 'success'
                     /*onOpen: () => {
                       console.log('hey')
                     }, // callback that will be executed after this alert open
                     onClose: () => {
                       console.log('closed')
                     } */
             /*    });
 
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
           /*      });
 
              }
         }
         ) */
 
 
       }
       const shiping_address = watch("shiping_address"); 

    function clickToglleShipAdr(type){
        setChecked(type);
    }

	return (
			<>
				<Header />
				<div className="breadcrumb-area mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="breadcrumb-container">
                                    <ul>
                                        <li><a href="index.html"><i className="fa fa-home"></i> Home</a></li>
                                        <li className="active">Checkout</li>
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
                               
                                <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
                                    <div className="row row-40">
                                        <div className="col-lg-7 mb-20">
                                          
                                            <div id="billing-form" className="mb-40">
                                                <h4 className="checkout-title">Billing Address</h4>
                                                <div className="row">
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>First Name*</label>
                                                        <input {...register('firstName', { required: true })} type="text"  />
												        {errors.firstName && <p className="error">Your First Name is required.</p>}
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Last Name*</label>
                                                        <input {...register('lastName', { required: true })} type="text"  />
												        {errors.lastName && <p className="error">Your Last Name is required.</p>}

                                                       
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Email Address*</label>
                                                        <input {...register('email', { required: true })} type="text"  />
												        {errors.email && <p className="error">Your Email is required.</p>}
                                                        
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Phone no*</label>
                                                        <input {...register('phone', { required: true })} type="text"  />
												        {errors.phone && <p className="error">Phone number is required.</p>}
                                                    </div>
                                                    
                                                    <div className="col-12 mb-20">
                                                        <label>Address*</label>
                                                        <input {...register('address', { required: true })} type="text"  />
												        {errors.address && <p className="error">Address is required.</p>}
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Country*</label>
                                                        <select {...register('country', { required: true })} className="nice-select" >
                                                            <option value="1">Ireland</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>State*</label>
                                                        <select {...register('state', { required: true })} className="nice-select" >
                                                            <option value="1">Cork</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Town/City*</label>
                                                        <input  {...register('city', { required: true })} type="text" placeholder="Town/City"/>
                                                        {errors.city && <p className="error">Town/City is required.</p>}
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Zip Code*</label>
                                                        <input {...register('zipcode', { required: true })} type="text" placeholder="Zip Code"/>
                                                        {errors.zipcode && <p className="error">Zip Code is required.</p>}
                                                    </div>
                                                    <div className="col-12 mb-20">
                                                        <div className="check-box">
                                                            <input type="checkbox" id="create_account"/>
                                                            <label for="create_account">Create an Acount?</label>
                                                        </div>
                                                        <div className="check-box">
                                                            <input {...register('shiping_address')}  type="checkbox" id="shiping_address" />
                                                            <label for="shiping_address">Ship to Different Address</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            <div   className="mb-40">
                                                <h4 className="checkout-title">Shipping Address</h4>
                                                {shiping_address && (
                                                <div className="row">
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>First Name*</label>
                                                        <input {...register('shiping_firstname', { required: true })}  type="text" placeholder="First Name"/>
                                                        {errors.shiping_firstname && <p className="error">First Name is required.</p>}
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Last Name*</label>
                                                        <input {...register('shiping_lastname', { required: true })} type="text" placeholder="Last Name"/>
                                                        {errors.shiping_lastname && <p className="error">Last Name is required.</p>}
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Email Address*</label>
                                                        <input {...register('shiping_email', { required: true })} type="email" placeholder="Email Address"/>
                                                        {errors.shiping_email && <p className="error">Email is required.</p>}
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Phone no*</label>
                                                        <input {...register('shiping_phone', { required: true })} type="text" placeholder="Phone number"/>
                                                        {errors.shiping_phone && <p className="error">Phone no is required.</p>}
                                                    </div>
                                                   
                                                    <div className="col-12 mb-20">
                                                        <label>Address*</label>
                                                        <input  {...register('shiping_address1', { required: true })} type="text" placeholder="Address line "/>
                                                        {errors.shiping_address1 && <p className="error">Address is required.</p>} 
                                                    </div>

                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Country*</label>
                                                        <select {...register('shiping_country', { required: true })} className="nice-select" >
                                                            <option value="1">Ireland</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>State*</label>
                                                        <select {...register('shiping_state', { required: true })} className="nice-select" >
                                                            <option value="1">Cork</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Town/City*</label>
                                                        <input {...register('shiping_city', { required: true })} type="text" placeholder="Town/City"/>
                                                        {errors.shiping_city && <p className="error">Town/City is required.</p>} 
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-20">
                                                        <label>Zip Code*</label>
                                                        <input {...register('shiping_zipcode', { required: true })} type="text" placeholder="Zip Code"/>
                                                        {errors.shiping_zipcode && <p className="error">Zip Code is required.</p>} 
                                                    </div>                                                   
                                                </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="row">
                                          
                                                <div className="col-12 mb-60">
                                                    <h4 className="checkout-title">Cart Total</h4>
                                                    <div className="checkout-cart-total">
                                                        <h4>Product <span>Total</span></h4>
                                                        <ul>
                                                        { cartData != null ? cartData.map((item,key)=>{
                                                            let subtotal = parseInt(item.price)*parseInt(item.cartQty);
                                                            sub_total +=subtotal;
                                                             return  <li>{item.product_name} X {(item.cartQty)} <span>{currency}{subtotal}</span></li>
                                                 
                                                         }) :null }
                                                        </ul>
                                                        <p>Sub Total <span>{currency}{sub_total}</span></p>
                                                        <p>Shipping Fee <span>{currency}00.00</span></p>
                                                        <h4>Grand Total <span>{currency}{sub_total}</span></h4>
                                                    </div>
                                                </div>
                                               
                                                <div className="col-12">
                                                    <h4 className="checkout-title">Delivery Time</h4>
                                                    <div className="checkout-payment-method">
                                                        <div className="single-method">
                                                            <input type="radio" id="time1" name="delivery_time" value="check"/>
                                                            <label for="time1">1 PM - 2.30 PM</label>
                                                            
                                                        </div>
                                                        <div className="single-method">
                                                            <input type="radio" id="time2" name="delivery_time" value="bank"/>
                                                            <label for="time2">5 PM - 10 PM</label>
                                                          
                                                        </div>
                                                        <div className="single-method">
                                                            <input type="radio" id="anytime" name="delivery_time" value="cash"/>
                                                            <label for="anytime">Any Time</label>
                                                           
                                                        </div>
                                                       
                                                    </div>
                                                    <button className="place-order">Place order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

				<Footer/>
		</>
	);
	
}
export default Checkout;