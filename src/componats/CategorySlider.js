import React from  'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function CategorySlider(props) {
	let categoryData = props.category_data;
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
	 
      speed: 500,
      slidesToShow:1 ,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      variableWidth:true,
      arrows:true
    };

	let imageUrl = 'http://asianfoodscork.apoliums.com/';
    return (
      <Slider {...settings}>
       
  

					
					{
						categoryData.map((item,key)=>{
						return	<div key={key}  className="cat-divv single-category">
							<div className="category-image ">
								<Link to={'/product-list-by-category-'+item.id+'-0'}>
									<img src={imageUrl+item.thumbnail} className="img-fluid" alt=""/>
								</Link>
							</div>
							<div className="category-title">
								<h3>
									<Link to={'/product-list-by-category-'+item.id+'-0'}> {item.name}</Link>
									
								</h3>
							</div>
						</div>

						})

					}
						
				
      </Slider>
    );
  }