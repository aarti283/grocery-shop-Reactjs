import React from 'react';  
import ReactDOM from 'react-dom'; 
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useAlert } from 'react-alert';

function PopUps(){
/*\
	 Closen=()=>{
		 
document.getElementById("modall").style.visibility = "hidden";
		 
	}*/

return (

		<div  id="modal" class="mod">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button"  class="close" aria-label="Close">
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
											<img src="assets/images/products/product01.jpg" class="img-fluid" alt=""/>
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
								<h2 class="product-title mb-15">Kaoreet lobortis sagittis laoreet</h2>

								<h2 class="product-price mb-15">
									<span class="main-price">$12.90</span>
									<span class="discounted-price"> $10.00</span>
								</h2>

								<p class="product-description mb-20">lorem</p>


								<div class="cart-buttons mb-20">
									<div class="pro-qty mr-10">
										<input type="text" value="1"/>
									</div>
									<div class="add-to-cart-btn">
										<a href="#"><i class="fa fa-shopping-cart"></i> Add to Cart</a>
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
);
}
export default PopUps;