import React, { useContext, useEffect,useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Api from '../Api';
import { authContext } from '../auth/AuthContext'; 
import {
	Link
	
 } from "react-router-dom";
 import { Redirect } from 'react-router';
 import { useAlert } from 'react-alert';

const MyAccount =(props)=>{

const alert = useAlert();    
const { auth  } = useContext(authContext);
const [orderData,setOrderData] = useState([]);

    let user_id =5;	
	if(auth.data) {
		user_id=auth.data.id;
	}
	 
  

useEffect(()=>{
    console.log(user_id);
   
        Api.getOrderByUserId(user_id).then(
            (response)=>{
                setOrderData(response.data.data);
            }
        );  
    
}, [setOrderData]);


function logout(){
    localStorage.removeItem("authData");
    alert.show('Log out Successfully', {
        timeout: 2000, // custom timeout just for this one alert
        type: 'success',
        /*onOpen: () => {
          console.log('hey')
        }, */ // callback that will be executed after this alert open
        onClose: () => {
            
            window.location.reload(); 
            return <Redirect to='/' />
            //console.log('closed');
        } 
    });

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
                                        <li className="active">My Account</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-account-section section position-relative mb-50 fix">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                   
                                    <div className="col-lg-3 col-12">
                                        <div className="myaccount-tab-menu nav" role="tablist">
                                            <a href="#dashboad" className="active" data-toggle="tab"><i className="fa fa-dashboard"></i>
                                            Dashboard</a>
                                            <a href="#orders" data-toggle="tab"><i className="fa fa-cart-arrow-down"></i> Orders</a>
                                            <a href="#download" data-toggle="tab"><i className="fa fa-cloud-download"></i> History</a>
                                            <a href="#payment-method" data-toggle="tab"><i className="fa fa-credit-card"></i> Payment
                                            Method</a>
                                            <a href="#address-edit" data-toggle="tab"><i className="fa fa-map-marker"></i> address</a>
                                            <a href="#account-info" data-toggle="tab"><i className="fa fa-user"></i> Account Details</a>
                                            <Link to="" onClick={(e) => { logout() }} ><i className="fa fa-sign-out"></i>Log out</Link>
                                           
                                        </div>
                                    </div>
                                   
                                    <div className="col-lg-9 col-12">
                                        <div className="tab-content" id="myaccountContent">
                                         
                                            <div className="tab-pane fade show active" id="dashboad" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Dashboard</h3>
                                                    <div className="welcome">
                                                        <p>Hello, <strong>Alex Tuntuni</strong> (If Not <strong>Tuntuni !</strong><a href="login-register.html" className="logout"> Logout</a>)</p>
                                                    </div>
                                                    <p className="mb-0">From your account dashboard. you can easily check &amp; view your
                                                        recent orders, manage your shipping and billing addresses and edit your
                                                        password and account details.
                                                    </p>
                                                </div>
                                            </div>
                                           
                                            <div className="tab-pane fade" id="orders" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Orders</h3>
                                                    <div className="myaccount-table table-responsive text-center">
                                                        <table className="table table-bordered">
                                                            <thead className="thead-light">
                                                                <tr>
                                                                    <th>No</th>
                                                                    <th>Order Id</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Total</th>
                                                                    <th>Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                            { orderData != null ? orderData.map((item,key)=>{


                                                               return <tr key={key} >
                                                                    <td>1</td>
                                                                    <td>{item.order_id} </td>
                                                                    <td>{item.created_at} </td>
                                                                    <td>Confirmed</td>
                                                                    <td>${item.amount}</td>
                                                                    <td> <Link to={'order_detail-'+item.order_id}>View</Link> </td>
                                                                </tr>
                                                            }) :null }
                                                              
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                          
                                            <div className="tab-pane fade" id="download" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Downloads</h3>
                                                    <div className="myaccount-table table-responsive text-center">
                                                        <table className="table table-bordered">
                                                            <thead className="thead-light">
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Date</th>
                                                                    <th>Expire</th>
                                                                    <th>Download</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>Mostarizing Oil</td>
                                                                    <td>Aug 22, 2018</td>
                                                                    <td>Yes</td>
                                                                    <td><a href="#" className="btn">Download File</a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>Katopeno Altuni</td>
                                                                    <td>Sep 12, 2018</td>
                                                                    <td>Never</td>
                                                                    <td><a href="#" className="btn">Download File</a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                          
                                            <div className="tab-pane fade" id="payment-method" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Payment Method</h3>
                                                    <p className="saved-message">You Can't Saved Your Payment Method yet.</p>
                                                </div>
                                            </div>
                                          
                                            <div className="tab-pane fade" id="address-edit" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Billing Address</h3>
                                                    <address>
                                                        <p><strong>Alex Tuntuni</strong></p>
                                                        <p>1355 Market St, Suite 900 <br/>
                                                            San Francisco, CA 94103
                                                        </p>
                                                        <p>Mobile: (123) 456-7890</p>
                                                    </address>
                                                    <a href="#" className="btn d-inline-block edit-address-btn"><i className="fa fa-edit"></i>Edit Address</a>
                                                </div>
                                            </div>
                                          
                                            <div className="tab-pane fade" id="account-info" role="tabpanel">
                                                <div className="myaccount-content">
                                                    <h3>Account Details</h3>
                                                    <div className="account-details-form">
                                                        <form action="#">
                                                            <div className="row">
                                                                <div className="col-lg-6 col-12 mb-30">
                                                                    <input id="first-name" placeholder="First Name" type="text"/>
                                                                </div>
                                                                <div className="col-lg-6 col-12 mb-30">
                                                                    <input id="last-name" placeholder="Last Name" type="text"/>
                                                                </div>
                                                                <div className="col-12 mb-30">
                                                                    <input id="display-name" placeholder="Display Name" type="text"/>
                                                                </div>
                                                                <div className="col-12 mb-30">
                                                                    <input id="email" placeholder="Email Address" type="email"/>
                                                                </div>
                                                                <div className="col-12 mb-30">
                                                                    <h4>Password change</h4>
                                                                </div>
                                                                <div className="col-12 mb-30">
                                                                    <input id="current-pwd" placeholder="Current Password" type="password"/>
                                                                </div>
                                                                <div className="col-lg-6 col-12 mb-30">
                                                                    <input id="new-pwd" placeholder="New Password" type="password"/>
                                                                </div>
                                                                <div className="col-lg-6 col-12 mb-30">
                                                                    <input id="confirm-pwd" placeholder="Confirm Password" type="password"/>
                                                                </div>
                                                                <div className="col-12">
                                                                    <button className="save-change-btn">Save Changes</button>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
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
export default MyAccount;