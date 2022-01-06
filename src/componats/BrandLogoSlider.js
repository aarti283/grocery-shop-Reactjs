import React from  'react';
import Slider from "react-slick";
import {
	Link
	
 } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function BrandLogoSlider(props) {
	
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <Slider {...settings}>
    
       <div className="col">
                    <div className="single-brand-logo">
                        <a >
                            <img src={"../assets/images/brands/brand1.png"} className="img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

                

                <div className="col">
                    <div className="single-brand-logo">
                        <a >
                            <img src={"../assets/images/brands/brand2.png"}className="img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

            

                <div className="col">
                    <div className="single-brand-logo">
                        <a href="/">
                            <img src={"../assets/images/brands/brand3.png"}className="img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

            

                <div className="col">
                    <div className="single-brand-logo">
                        <a href="/">
                            <img src={"../assets/images/brands/brand4.png"} className="img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

            

                <div className="col">
                    <div className="single-brand-logo">
                        <a href="/">
                            <img src={"../assets/images/brands/brand5.png"}className="img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

            

                <div className="col">
                    <div className="single-brand-logo">
                        <a href="/">
                            <img src={"../assets/images/brands/brand6.png"} className="img-fluid" alt=""/>
                        </a>
                    </div>
                </div>
     	
      </Slider>
    );
  }