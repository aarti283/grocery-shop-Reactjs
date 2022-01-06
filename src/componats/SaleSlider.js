import React from  'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";

 import { confirmAlert } from 'react-confirm-alert'; // Import
 import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
 
 import { useAlert } from 'react-alert';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  { useEffect, useState, useContext } from 'react';
import { CartContext } from '../auth/CartContext';



export default function SaleSlider(props) {
    const { setCardData} = useContext(CartContext);

	let productData = props.product_data;
    let currency = '€';
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };

    
	function addToCard(item,qty){

		setCardData(item,qty);

	}

    let imageUrl = 'http://asianfoodscork.apoliums.com/';

    function quickView (pr,nm,im){
        productData.map((item)=>{let price = parseInt(pr)+5;
         confirmAlert({ 
             customUI: ({ onClose }) => {
               return (
                     <div className="row">
                         <div  id="modal" class="mod">
         <div class="modal-dialog modal-dialog-centered" role="document">
             <div class="modal-content">
                 <div class="modal-header">
                     <button type="button" onClick={onClose}  class="close" aria-label="Close">
                         <span  className="alert__btn alert__btn--no"   aria-hidden="true">&times;</span>
                     </button>
                 </div>
                 <div class="modal-body">
                     <div class="row">
                         <div class="col-lg-5 col-md-6 col-xs-12">
                             <div class="product-image-slider">
                                 <div class="tab-content product-large-image-list" id="myTabContent">
                                     <div class="tab-pane fade show active" id="single-slide1" role="tabpanel"
                                         aria-labelledby="single-slide-tab-1">
                                         <div class="single-product-img img-full">
                                             <img src={im} class="img-fluid" alt=""/>
                                         </div>
                                     </div>
                                     <div class="tab-pane fade" id="single-slide2" role="tabpanel" aria-labelledby="single-slide-tab-2">
                                         <div class="single-product-img img-full">
                                             <img src="assets/images/products/product02.jpg" class="img-fluid" alt=""/>
                                         </div>
                                     </div>
                                     <div class="tab-pane fade" id="single-slide3" role="tabpanel" aria-labelledby="single-slide-tab-3">
                                         <div class="single-product-img img-full">
                                             <img src="assets/images/products/product03.jpg" class="img-fluid" alt=""/>
                                         </div>
                                     </div>
                                     <div class="tab-pane fade" id="single-slide4" role="tabpanel" aria-labelledby="single-slide-tab-4">
                                         <div class="single-product-img img-full">
                                             <img src="assets/images/products/product04.jpg" class="img-fluid" alt=""/>
                                         </div>
                                     </div>
                                 </div>
                                 
                                 
                             </div>
                             
                         </div>
                         <div class="col-lg-7 col-md-6 col-xs-12">
                             <div class="product-feature-details">
                                 <h2 class="product-title mb-15">{nm}</h2>
 
                                 <h2 class="product-price mb-15">
                                     <span class="main-price">€{price}</span>
                                     <span class="discounted-price"> €{pr}</span>
                                 </h2>
 
                                 <p class="product-description mb-20">lorem</p>
 
 
                                 <div class="cart-buttons mb-20">
                                
                                     <div  class="add-to-cart-btn">
                                         <a onClick={(e) => { addToCard(item,1) }}><i class="fa fa-shopping-cart"></i> Add to Cart</a>
                                     </div>
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
     </div>
                     </div>
               );
             }
           });
       })
     };



    return (
      <Slider {...settings}>
    
    {
	productData.map((item,key)=>{
		let discount = parseInt(item.price)+5;				
        return <div key={key} className="sale-single-product">
            <div className="product-countdown" data-countdown="2020/05/01"></div>
            <div className="row">
                <div className="col-lg-4 offset-lg-2 col-md-12">
                    

                    <div className="image text-md-center">
                        <a href="single-product.html">
                            <span className="onsale">Sale!</span>
                            <img src={imageUrl+item.thumbnail} className="img-fluid pro-imeg2" alt=""/>
                        </a>
                        <div className="product-hover-icons">
                            <a onClick={e => quickView(item.price,item.product_name,imageUrl+item.thumbnail)} data-tooltip="Quick view" data-toggle="modal"
                                data-target="#quick-view-modal-container"> <span className="icon_search"></span> </a>
                        </div>
                    </div>

                
                </div>
                <div className="col-lg-6 col-md-12">
                    

                    <div className="sale-single-product-content text-center">
                        <h2 className="product-title"><a href="single-product.html">{item.product_name}</a></h2>
                        <h2 className="price"> <span className="main-price">${discount}</span>
                         <span
                                className="discounted-price">{currency}{item.price}</span></h2>
                        <p className="product-description">
                        {item.description}
                        </p>
                        <a onClick={(e) => { addToCard(item,1) }} className="single-sale-add-to-cart-btn">add to cart</a>
                    </div>

                    
                </div>
            </div>
        </div>
                        
                    })

                }        
                        
                        
                       
      </Slider>
    );
  }