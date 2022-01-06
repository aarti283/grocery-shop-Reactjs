import React, { useEffect,useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Api from '../Api';
import { useParams } from 'react-router-dom';
import { CartContext } from '../auth/CartContext';

const SinglepPoduct =(props)=>{
    const { setCardData} = useContext(CartContext);
    const { product_id } = useParams();
  	const [singleProductData,setSingleProductData] = useState([]);
    const [cartProductQty,setCartProductQtyData] = useState(0);
    
   
    /*if(cart.cartItem){
        let  cartdata =   cart.cartItem;
        console.log("qawsed:"+cartdata);  
        cartdata.map((row,key)=>{
            if(row.id === singleProductData.data.id){
                setCartProductQtyData(row.cartQty);
            } 
        });
    }else{
        setCartProductQtyData(1);  
    }*/

    useEffect(()=>{
        
        Api.getProductDetailsById(product_id).then(
            (response)=>{
              // console.log(response.data.data);
              setSingleProductData(response.data.data);
              setCartProductQtyData(1);  
             // console.log("qawsed:"+cart.cartItem);  
            }
        )
        

    }, [setSingleProductData,setCartProductQtyData]);
   

	let imageUrl = 'http://asianfoodscork.apoliums.com/';

    function addToCart(item){
        setCardData(item,cartProductQty);
     }

     function updateCartItmQty(e, type,item,preQty){
        
        let qty = 0;
        if(type==1){
            qty = parseInt(preQty)+1;
            console.log(qty);
            setCartProductQtyData(qty);
        }else{
            qty = (parseInt(preQty) >1)?cartProductQty-1:1;
            setCartProductQtyData(qty);
        }
        setCardData(item,qty);
       
    }
 


	return (
			<>
                <Header  />
				
				<div class="breadcrumb-area mb-50">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="breadcrumb-container">
                                    <ul>
                                        <li><a href="/"><i class="fa fa-home"></i> Home</a></li>
                                        <li><a href="#">{singleProductData.categoryName}</a></li>
                                        <li class="active">{singleProductData.product_name}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="single-product-content ">
                    <div class="container">
                     
                        <div class="single-product-conte nt-container mb-35">
                            <div class="row">
                                <div class="col-lg-6 col-md-12 col-xs-12">
                                 
                                    <div class="product-image-slider d-flex flex-custom-xs-wrap flex-sm-nowrap align-items-center mb-sm-35">
                                       
                                        <div class="tab-content product-large-image-list">
                                            <div class="tab-pane fade show active" id="single-slide1" role="tabpanel" aria-labelledby="single-slide-tab-1">
                                              
                                                <div class="single-product-img easyzoom img-full is-ready">
                                                    <img src={imageUrl+singleProductData.thumbnail} class="img-fluid pro-big-img" alt=""/>
                                                    <a href={imageUrl+singleProductData.thumbnail} class="big-image-popup"><i class="fa fa-search-plus"></i></a>
                                                  
                                                </div>
                                              
                                            </div>
                                           
                                          
                                        </div>
                                      
                                    </div>
                                
                                </div>
                                <div class="col-lg-6 col-md-12 col-xs-12">
                                  
                                    <div class="product-feature-details">
                                        <h2 class="product-title mb-15">{singleProductData.product_name}</h2>
                                        <p class="product-rating">
                                            <i class="fa fa-star active"></i>
                                            <i class="fa fa-star active"></i>
                                            <i class="fa fa-star active"></i>
                                            <i class="fa fa-star active"></i>
                                            <i class="fa fa-star"></i>
                                            <a href="#">(1 customer review)</a>
                                        </p>
                                        <h2 class="product-price mb-15">
                                            <span class="main-price">$12.90</span>
                                            <span class="discounted-price"> $10.00</span>
                                        </h2>
                                        <p class="product-description mb-20">{singleProductData.description}
                                        </p>
                                        <div class="cart-buttons mb-20">
                                            <div class="pro-qty mr-20 mb-xs-20">
                                                <input type="text" value={cartProductQty}/>
                                                <a  class="inc qty-btn" onClick={(e) => { updateCartItmQty(e, 1,singleProductData,cartProductQty); }}>+</a><a class="dec qty-btn" onClick={(e) => { updateCartItmQty(e, 2,singleProductData,cartProductQty); }}>-</a>
                                            </div>
                                            <div class="add-to-cart-btn">
                                                <a  onClick={e => addToCart(singleProductData)} ><i class="fa fa-shopping-cart"></i> Add to Cart</a>
                                            </div>
                                        </div>
                                        <div class="single-product-action-btn mb-20">
                                            <a href="#" data-tooltip="Add to wishlist"> <span class="icon_heart_alt"></span> Add to
                                            wishlist</a>
                                            
                                        </div>
                                        <div class="single-product-category mb-20">
                                            <h3>Categories: <span><a href="shop-left-sidebar.html">{singleProductData.categoryName}</a>, <a href="shop-left-sidebar.html">{singleProductData.subCategoryName}</a></span></h3>
                                        </div>
                                        <div class="social-share-buttons">
                                            <h3>share this product</h3>
                                            <ul>
                                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a class="google-plus" href="#"><i class="fa fa-google-plus"></i></a></li>
                                                <li><a class="pinterest" href="#"><i class="fa fa-pinterest"></i></a></li>
                                            </ul>
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
export default SinglepPoduct;