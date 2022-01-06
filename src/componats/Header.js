import React, { useContext, useEffect,useState } from 'react';
import { Link } from "react-router-dom";
 import Api from '../Api';
 import Hmenu from './Hmenu';
 import { useParams } from 'react-router-dom';
import { authContext } from '../auth/AuthContext'; 
import { useAlert } from 'react-alert';
import { Redirect } from 'react-router';
import {CartContext} from '../auth/CartContext'; 
import MainMenu from './Main_menu';


const Header=(props)=>{
	
	const alert = useAlert();
	const { cat_id,subcategoryId } = useParams();
	const { auth  } = useContext(authContext);
	const { cart  } = useContext(CartContext);
	//console.log('CART=',cart.cartItem);
	let currency = '€';
	const [categoryData,setCategoryData] = useState([]);
	const [userData,setUserData] = useState({});
	let userId =0;	
	if(auth.data) {
		userId=auth.data.id;
	}
	
	let cartData = cart.cartItem;
	let subtotal =0;
	let total =0;
	let totalQty = 0;
	//console.log('ssss'+cartData);
	if(cartData !=null) {
		cartData.map((item,key)=>{
			//console.log(item);
			total += parseInt(item.price)*parseInt(item.cartQty);
			totalQty += parseInt(item.cartQty);
		});
	}

	
	useEffect(()=>{
		
		Api.getCategortyItems().then(
			(response)=>{
				setCategoryData(response.data.data);
			}
		);

	}, [setCategoryData]);

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

	const logo ={
		width :"155px"
	} 

	return (
	<header>
		<div className="header-top pt-10 pb-10 pt-lg-10 pb-lg-10 pt-md-10 pb-md-10">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 text-center text-sm-left">
						
						<div className="lang-currency-dropdown">
							<ul>
								<li> <a>English <i className="fa fa-chevron-down"></i></a>
									<ul>
										<li><a>English</a></li>
									</ul>
								</li>
								<li><a>Euro <i className="fa fa-chevron-down"></i></a>
									<ul>
										<li><a >Euro</a></li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12  text-center text-sm-right">
						
						<div className="header-top-menu">
							<ul>
								{/*(userId > 0 ) ? (<li><Link to="/my-account">My account</Link></li>) : null*/}
								{(userId == 0 ) ? (<li><Link to="/register">Register</Link></li>) : null}
								{(userId == 0 ) ? (<li><Link to="/login">Login</Link></li>) : null}
							
								<li><a href="/">Checkout</a></li>
								{(userId > 0 ) ? (<li><Link to="" onClick={(e) => { logout() }} >Log out</Link></li>) : null}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="header-bottom header-bottom-one header-sticky">
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-12 col-xs-12 text-lg-left text-md-center text-sm-center">
						
						<div className="logo mt-15 mb-15">
							<a href="/">
								<img src={"../assets/images/logo.png"} className="img-fluid" style={logo} alt=""/>
							</a>
						</div>
						
					</div>
					<div className="col-md-9 col-sm-12 col-xs-12">
						<div
							className="menubar-top d-flex justify-content-between align-items-center flex-sm-wrap flex-md-wrap flex-lg-nowrap mt-sm-15">
							<div className="header-contact d-flex">
								<div className="phone-icon">
									<img src={"../assets/images/icon-phone.png"} className="img-fluid" alt=""/>
								</div>
								<div className="phone-number">
									Phone: <span className="number">+353 87 270 8050</span>
								</div>
							</div>
							
							<div className="header-advance-search">
								<form action="#">
									<input type="text" placeholder="Search your product"/>
									<button>
										<span className="icon_search">
										</span>
									</button>
								</form>
							</div>
							
							<div className="shopping-cart" id="shopping-cart">
								<a href="/">
									<div className="cart-icon d-inline-block">
										<span className="icon_bag_alt"></span>
									</div>
									<div className="cart-info d-inline-block">
										<p>Shopping Cart
											<span>
												{totalQty} items - {currency}{total}
											</span>
										</p>
									</div>
								</a>
							
								<div className="cart-floating-box" id="cart-floating-box">
									<div className="cart-items">
									{  cartData != null ? cartData.map((item,key)=>{
										//console.log(item);
                                        subtotal += parseInt(item.price)*parseInt(item.cartQty);
										return <div  className="cart-float-single-item d-flex">
											<div className="cart-float-single-item-image">
												<a href="/"><img src={require("../assets/images/products/product01.jpg")} className="img-fluid"
														alt=""/></a>
											</div>
											<div className="cart-float-single-item-desc">
												<p className="product-title"> <Link to={'/single-product-'+item.id}>{item.product_name} </Link></p>
												<p className="price"><span className="count">{item.cartQty}x</span> {currency}{item.price}</p>
											</div>
										</div>
									 }) :null }
										
									</div>
									<div className="cart-calculation">
										<div className="calculation-details">
											<p className="total">Subtotal <span>{currency}{subtotal}</span></p>
										</div>
										<div className="floating-cart-btn text-center">
											<Link to="/Checkout">Checkout</Link>
											<Link to="/cart">View Cart</Link>
										</div>
									</div>
								</div>
								
							</div>
						</div>
									
						
					
					</div>
					<div className="col-12">
						<div className="mobile-menu d-block d-lg-none"></div>
					</div>
				</div>
			</div>
		</div>
		<Hmenu/>
	</header>
	
	);
	
} 
export default Header;