import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery';
//import AppendScript from './AppendScript';

const Footer =(props)=>{
 useEffect(()=>{ 
	 
	 var windows = $(window);
    var screenSize = windows.width();
    var sticky = $('.header-sticky');
    var menubarTop = $('.menubar-top');


    windows.on('scroll', function () {
    	var scroll = windows.scrollTop();


    	if (scroll < 300) {
    		sticky.removeClass('is-sticky');

    		menubarTop.removeClass('d-none');
    		menubarTop.addClass('d-flex');
    	} else {
    		sticky.addClass('is-sticky');
    		menubarTop.addClass('d-none');
    		menubarTop.removeClass('d-flex');
    	}


		//code for scroll top

		if (scroll >= 400) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}

	});


	$("#shopping-cart").mouseenter(function () {
    	$("#cart-floating-box").stop().slideDown(1000);
    });

    $("#shopping-cart").mouseleave(function () {
    	$("#cart-floating-box").stop().slideUp(1000);
    });	


	




}, []);

/*--
	Category slider active
	-----------------------------------*/
	/*$.getScript('../assets/js/plugins.js',function(){
	var catSlider = $('.category-slider-container');
	catSlider.slick({
		arrows: true,
		autoplay: false,
		draggable: false,
		dots: false,
		infinite: true,
		slidesToShow: 6,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-caret-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-caret-right"></i></button>',
		responsive: [{
			breakpoint: 1499,
			settings: {
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 991,

			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 2,
			}
		}
		]
	});
	});
	

}, []);*/

	return (
		<>
	<footer>
		<div className="newsletter-section pt-50 pb-50" id="news">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 col-sm-12 mb-sm-20 mb-xs-20">
					

						<div className="newsletter-title">
							<h1>
								<img src={"../assets/images/icon-newsletter.png"} alt=""/>
								Send Newsletter
							</h1>
						</div>

					
					</div>

					<div className="col-lg-8 col-md-12 col-sm-12">
						

						<div className="subscription-form-wrapper d-flex flex-wrap flex-sm-nowrap">
							<p className="mb-xs-20">Sign up for our newsletter to get up-to-date from us</p>
							<div className="subscription-form">
								<form id="mc-form" className="mc-form subscribe-form">
									<input type="email" id="mc-email" autoComplete="off" placeholder="Your email address"/>
									<button id="mc-submit" type="submit"> subscribe!</button>
								</form>

								
								<div className="mailchimp-alerts">
									<div className="mailchimp-submitting"></div>
									<div className="mailchimp-success"></div>
									<div className="mailchimp-error"></div>
								</div>
							</div>
						</div>

					
					</div>
				</div>
			</div>
		</div>

		

		<div className="social-contact-section pt-50 pb-50">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 order-2 order-md-2 order-sm-2 order-lg-1">
					

						<div className="social-media-section">
							<h2>Follow us</h2>
							<div className="social-links">
								

								<a className="facebook" href="/" data-tooltip="Facebook"><i
										className="fa fa-facebook"></i></a>
								<a className="twitter" href="/" data-tooltip="Twitter"><i
										className="fa fa-twitter"></i></a>
								<a className="instagram" href="/" data-tooltip="Instagram"><i
										className="fa fa-instagram"></i></a>
								<a className="linkedin" href="/" data-tooltip="Linkedin"><i
										className="fa fa-linkedin"></i></a>
								<a className="rss" href="/" data-tooltip="RSS"><i className="fa fa-rss"></i></a>
							</div>
						</div>

					

					</div>
					<div className="col-lg-8 col-md-12 order-1 order-md-1 order-sm-1 order-lg-2  mb-sm-50 mb-xs-50">
					

						<div className="contact-summery">
							<h2>Contact us</h2>

							

							<div className="contact-segments d-flex justify-content-between flex-wrap flex-lg-nowrap">
								

								<div className="single-contact d-flex mb-xs-20">
									<div className="icon">
										<span className="icon_pin_alt"></span>
									</div>
									<div className="contact-info">
										<p>Address: <span>14 North Main Street, Centre, Cork, Ireland</span></p>
									</div>
								</div>

							

								<div className="single-contact d-flex mb-xs-20">
									<div className="icon">
										<span className="icon_mobile"></span>
									</div>
									<div className="contact-info">
										<p>Phone: <span>+353 87 270 8050</span></p>
									</div>
								</div>

								

								<div className="single-contact d-flex">
									<div className="icon">
										<span className="icon_mail_alt"></span>
									</div>
									<div className="contact-info">
										<p>Email: <span>zeeshan_pk09@hotmail.com</span></p>
									</div>
								</div>

								
							</div>

							



						</div>

						

					</div>
				</div>
			</div>
		</div>

		
		{/*
		<div className="footer-navigation-section pt-40 pb-40">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
						

						<div className="single-navigation-section">
							<h3 className="nav-section-title">INFORMATION</h3>
							<ul>
								<li> <a href="/">About Us</a></li>
								<li> <a href="/">Delivery Information</a></li>
								<li> <a href="/">Privacy Policy</a></li>
								<li> <a href="/">Terms & Condition</a></li>
							</ul>
						</div>

						
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
					

						<div className="single-navigation-section">
							<h3 className="nav-section-title">MY ACCOUNT</h3>
							<ul>
								<li> <a href="/">My Account</a></li>
								<li> <a href="/">Wishlist</a></li>
								<li> <Link to="/cart">Shopping Cart</Link></li>
								<li> <a href="#news">Newsletter</a></li>
							</ul>
						</div>

						
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb-xs-30">
						

						<div className="single-navigation-section">
							<h3 className="nav-section-title">CUSTOMER SERVICE</h3>
							<ul>
								<li> <Link to="/contact">Contact</Link></li>
								<li> OUR SERVICE</li>
								<li> RETURNS</li>
								<li> SITE MAP</li>
							</ul>
						</div>

						
					</div>
					<div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
					

						<div className="single-navigation-section">
							<h3 className="nav-section-title">Extras</h3>
							<ul>
								<li> <a href="">BRANDS</a></li>
								<li> <a href="">GIFT VOUCHERS</a></li>
								<li> <a href="">AFFILIATES</a></li>
								<li> <a href="">SPECIALS</a></li>
							</ul>
						</div>

					
					</div>
				</div>
			</div>
		</div>
		*/
		}

	


	

		<div className="copyright-section pt-35 pb-35">
			<div className="container">
				<div className="row align-items-md-center align-items-sm-center">
					<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 text-center text-md-left">
					

						<div className="copyright-segment">
							<p>
								<a href="/">Privacy Policy</a>
								<span className="separator">|</span>
								<a href="/">Term and conditions</a>
							</p>
							<p className="copyright-text">&copy; 2021 <a href="/">Greenfarm</a>. All Rights Reserved</p>
						</div>

						

					</div>
					<div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
						

						<div className="payment-info text-center text-md-right">
							<p>Allow payment base on <img src={"../assets/images/payment-icon.png"} className="img-fluid" alt=""/></p>
						</div>

						

					</div>
				</div>
			</div>
		</div>

	</footer>
	
	</>
	);
}
export default Footer;