import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import  { useContext,useState } from 'react';
 import Api from '../Api';
 import { useParams } from 'react-router-dom';
 import Hmenu from './Hmenu';
import { authContext } from '../auth/AuthContext'; 
import { useAlert } from 'react-alert';
import { Redirect } from 'react-router';
import {CartContext} from '../auth/CartContext'; 


const MainMenu =(props)=>{
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
    return (
		<>


<div className="main-menu">
							<nav>
							
								<ul>
									<li className="active"><a href="/">HOME</a>
										
									</li>
									<li className="menu-item-has-children"><a href="/">Shop</a>
										<ul className="sub-menu">
											{
												categoryData.map((row,key)=>{
													let  subcategory = row.subcategory;
													return <li key={key} className="menu-item-has-children">
													<Link to={'product-list-by-category-'+row.id+'-0'}>{row.name}</Link>
													
													<ul className="sub-menu">
														{	subcategory.map((rowc,key)=>{
															return <li key={key} ><Link to={'product-list-by-category-'+row.id+'-'+rowc.id}>{rowc.name}</Link></li>
														})
														}
													
													</ul>
													
													
											</li>		
												})
											}
											
										</ul>
									</li>
									<li className="menu-item-has-children"><a href="/">PAGES</a>
										<ul className="mega-menu three-column">
											<li><a href="/">Column One</a>
												<ul>
													<li><Link to="/cart">Cart</Link></li>
													<li><Link to="/Checkout">Checkout</Link></li>
													

												</ul>
											</li>
											<li><a href="/">Column Two</a>
												<ul>
													<li><Link to="/login">Login </Link></li>
													<li><Link to="/register">Register</Link></li>
													<li><a href="/">FAQ</a></li>
												</ul>
											</li>
											<li><a href="/">Column Three</a>
												<ul>
													{/*<li><a href="/">Compare</a></li>*/}
													<li><Link to="/contact">Contact</Link></li>
												</ul>
											</li>
										</ul>
									</li>
								
									<li><Link to="/contact">CONTACT</Link></li>
								</ul>
							</nav>
						</div>
    </>
	);
}

export default MainMenu;