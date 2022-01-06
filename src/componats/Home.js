import React from  'react';
import Header from './Header';
import Footer from './Footer';
import Hero_Slider  from './Hero_Slider';
import CategorySlider from './CategorySlider';
import FeatureSlider from './FeaturedSlider';
import BrandLogoSlider from './BrandLogoSlider';
import BestSellerSlider from './BestSellerSlider';
import SaleSlider from './SaleSlider';


import {
	Link
	
 } from "react-router-dom";
import Api from '../Api';



class Home extends React.Component{

	constructor(){
		super();
		this.state = {
			categoryData : [],
			cartData : [],
			productData : [],

		};
	}

	componentDidMount(){
		//localStorage.removeItem("cartLocalData");
		Api.getCategortyItems().then(
			(response)=>{
				this.setState({categoryData:response.data.data});
			}
		);

		Api.getAllProduct().then(
			(response)=>{
				this.setState({productData:response.data.data});
			}
		);


		
	



		/*let  cartdata =   JSON.parse(localStorage.getItem('cartLocalData'));
		this.setState({	cartData :cartdata });
		cart_data={this.state.cartData}*/
	}	

	render(){
		return (
		<>		
		<Header  />


        <div className="hero-slider-container mb-35">
			<div className="hero-slider-one">
			    <Hero_Slider />
			</div>
		</div>





	<div className="policy-section mb-35">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="policy-titles d-flex align-items-center flex-wrap">
						

						<div className="single-policy">
							<span><img src={require("../assets/images/policy-icon1.png")} className="img-fluid" alt=""/></span>
							<p> FREE SHIPPING ON ORDERS OVER $200</p>
						</div>

					

						<div className="single-policy">
							<span><img src={require("../assets/images/policy-icon2.png")} className="img-fluid" alt=""/></span>
							<p>30 -DAY RETURNS MONEY BACK</p>
						</div> 

					

						<div className="single-policy">
							<span><img src={require("../assets/images/policy-icon3.png")} className="img-fluid" alt=""/></span>
							<p> 24/7 SUPPORT</p>
						</div>

					

					</div>
				</div>
			</div>
		</div>
	</div>

	

	<div className="slider category-slider mb-35">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">		
					<div className="section-title">
						<h3>top categories</h3>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
					<CategorySlider category_data={this.state.categoryData}  />
				</div>
			</div>
		</div>
	</div>



	<div className="slider tab-slider mb-35">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="tab-slider-wrapper">
						<nav>
							<div className="nav nav-tabs" id="nav-tab" role="tablist">
								<a className="nav-item nav-link active" id="featured-tab" data-toggle="tab" href="#featured" role="tab"
									aria-selected="true">Featured</a>
								<a className="nav-item nav-link" id="new-arrival-tab" data-toggle="tab" href="#new-arrivals" role="tab"
									aria-selected="false">New Arrival</a>
								<a className="nav-item nav-link" id="nav-onsale-tab" data-toggle="tab" href="#on-sale" role="tab"
									aria-selected="false">On Sale</a>
							</div>
						</nav>
						<div className="tab-content" id="nav-tabContent">
							<div className="tab-pane fade show active" id="featured" role="tabpanel" aria-labelledby="featured-tab">
								

									
								<FeatureSlider product_data={this.state.productData} />									
								
							

								
							</div>
							<div className="tab-pane fade" id="new-arrivals" role="tabpanel" aria-labelledby="new-arrival-tab">
								

								<FeatureSlider product_data={this.state.productData} />		

							
							</div>
							<div className="tab-pane fade" id="on-sale" role="tabpanel" aria-labelledby="nav-onsale-tab">
								
									<FeatureSlider product_data={this.state.productData} />		
							
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	

	<div className="featured-product-image-gallery mb-80 pt-120 section-bg">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					
					<div className="gallery-product-container">
						<div className="row no-gutters">
							<div className="col-lg-4 col-sm-6">
							

								<div className="single-featured-product">
									<a href="">
										<img src={"../assets/images/product-banners/fullbanner-1.jpg"} className="img-fluid" alt=""/>
									</a>
								</div>

							</div>
							<div className="col-lg-4 col-sm-6">
								

								<div className="single-featured-product">
									<a href="">
										<img src={"../assets/images/product-banners/fullbanner-2.jpg"} className="img-fluid" alt=""/>
									</a>
								</div>

							
							</div>
							<div className="col-lg-4 col-sm-6">
								

								<div className="single-featured-product">
									<a href="">
										<img src={"../assets/images/product-banners/fullbanner-3.jpg"} className="img-fluid" alt=""/>
									</a>
								</div>

							
							</div>
							<div className="col-lg-4 col-sm-6">
							

								<div className="single-featured-product">
									<a href="">
										<img src={"../assets/images/product-banners/fullbanner-4.jpg"} className="img-fluid" alt=""/>
									</a>
								</div>

								
							</div>
							<div className="col-lg-4 col-sm-6">
							

								<div className="single-featured-product">
									<a href="">
										<img src={"../assets/images/product-banners/fullbanner-5.jpg"} className="img-fluid" alt=""/>
									</a>
								</div>

							
							</div>
							<div className="col-lg-4 col-sm-6">
							

								<div className="single-featured-product">
									<a href="">
										<img src={"../assets/images/product-banners/fullbanner-6.jpg"} className="img-fluid" alt=""/>
									</a>
								</div>

							
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</div>

	

	<div className="sale-single-product-section mb-35">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-big-title text-center mb-30">
						<h2>Organic 40% sale off <span>GREENFARM DEAL OF THE DAY</span></h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">
				

					<div className="sale-single-product-container">
						
						<SaleSlider product_data={this.state.productData} />
					
					</div>

				
				</div>
			</div>
		</div>
	</div>

	

	<div className="slider best-seller-slider mb-35">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					

					<div className="section-title">
						<h3>best seller</h3>
					</div>

					
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12">

					<div className="best-seller-slider-container pt-15 pb-15">
						<BestSellerSlider product_data={this.state.productData} />	
					</div>

					
				</div>
			</div>
		</div>
	</div>



	
	

	<div className="slider brand-logo-slider mb-35">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					

					<div className="section-title">
						<h3>brand logos</h3>
					</div>

				
				</div>
			</div>

			<div className="row">
				<div className="col-lg-12">
					<div className="brand-logo-wrapper pt-20 pb-20">
						<BrandLogoSlider  />
					</div>	
				</div>
			</div>
		</div>
	</div>
	  <Footer/>
	  </>
		);
	}
	
}

export default Home;