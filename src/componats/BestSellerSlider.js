import React from  'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function BestSellerSlider(props) {
	let  productData = props.product_data;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,

	variableWidth:true,
	arrows:true
    };
    return (
      <Slider {...settings}>
       
  

					
					{
						productData.map((item,key)=>{
						return	<div key={key} className="col">
                        <div className="single-best-seller-item">
                            <div className="best-seller-sub-product">
                                <div className="row">
                                    <div className="col-lg-4 pl-0 pr-0">
                                        <div className="image">
                                            <a href="">
                                                <img src={require("../assets/images/products/product01.jpg")} className="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 pl-0 pr-0">
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="">Sed tempor ehicula non commodo</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="best-seller-sub-product">
                                <div className="row">
                                    <div className="col-lg-4 pl-0 pr-0">
                                        <div className="image">
                                            <a href="">
                                                <img src={require("../assets/images/products/product02.jpg")} className="img-fluid" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 pl-0 pr-0">
                                        <div className="product-content">
                                            <div className="product-categories">
                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                            </div>
                                            <h3 className="product-title"><a href="">Officiis debitis varius risus</a></h3>
                                            <div className="price-box">
                                                <span className="main-price">$89.00</span>
                                                <span className="discounted-price">$80.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

						})

					}
						

				
      </Slider>
    );
  }