import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import  { useContext,useState } from 'react';
 import Api from '../Api';
 import { useParams } from 'react-router-dom';
import { authContext } from '../auth/AuthContext'; 
import { useAlert } from 'react-alert';
import { Redirect } from 'react-router';
import {CartContext} from '../auth/CartContext'; 
const Hmenu =(props)=>{

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
         <nav id="navv">
       
        <label for="btn" class="icon">
            <span class="fa fa-bars"></span>
        </label>
        <input type="checkbox" id="btn"/>

        <ul>
            <li><a href="art-treasure.html">Home</a></li>
            <li>
                <label for="btn-1" class="show">Features<i class="fa fa-angle-down" aria-hidden="true"></i></label>
                <a href="#">Features<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <input type="checkbox" id="btn-1" name=""/>
                <ul >
											{
												categoryData.map((row,key)=>{
													let  subcategory = row.subcategory;
													return <li key={key} className="menu-item-has-children">
													<Link to={'product-list-by-category-'+row.id+'-0'}>{row.name}</Link>
													
													
													
													
											</li>		
												})
											}
											
										</ul>
            </li>
            <li>
                <label for="btn-2" class="show">Pages<i class="fa fa-angle-down" aria-hidden="true"></i></label>
                <a href="#">Pages<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                <input type="checkbox" id="btn-2" name=""/>
                <ul>
                <li><Link to="/login">Login </Link></li>
                            <li><Link to="/register">Register</Link></li>
                 
                    <li>
                        <label for="btn-3" class="show">More<i class="fa fa-angle-down" aria-hidden="true"></i></label>

                        <a href="#">More<i class="fa fa-angle-down" aria-hidden="true"></i></a>
                        <input type="checkbox" id="btn-3" name=""/>

                        <ul>
                        <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/Checkout">Checkout</Link></li>
                            <li><a href="artgallery.html">Digital-art</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
           <li><Link to="/contact">Contact</Link></li>
           

        </ul>
    </nav>
	</>
	);
}

export default Hmenu;
