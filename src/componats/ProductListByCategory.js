import React, { useEffect, useState, useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import Api from '../Api';
import { useParams } from 'react-router-dom';
import {
	Link
	
 } from "react-router-dom";

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { useAlert } from 'react-alert';
import { CartContext } from '../auth/CartContext';
import SinglepPoduct from './SinglepPoduct'
import PopUps from './Popup'




const ProductListByCategory =(props)=>{
    let messsage = '';
    const { cat_id,subcategoryId } = useParams();
  	const [productData,setProductData] = useState([]);
    const [searchterm,setSearchterm] = useState([]);
    const [productDBData,setProductDBData] = useState([]);
    const [subCategoryData,setSubCategoryData] = useState([]);
    const [categoryData,setCategoryData] = useState([]);
    const [toglleData,setToglleData] = useState(0);
    const { setCardData} = useContext(CartContext);
    
    const alert = useAlert()
    let currency = '€';

    useEffect(()=>{
        Api.getProductByCategortyId(cat_id).then(
            (response)=>{
              //  console.log(response.data.data);
                setProductData(response.data.data);
                setProductDBData(response.data.data);
                setSubCategoryData(response.data.subcatData);
                setCategoryData(response.data.catData);
               
            }
        )
	
	}, [setProductData]);

    

   
    function clickOnToggle(e,type){
        setToglleData(type);
    }

    function sortBy(type){
       
        if(type==2){
            productDBData.sort((a, b) => (a.price > b.price) ? 1 : -1); 
        }

        if(type==3){
            productDBData.sort((a, b) => (a.price < b.price) ? 1 : -1); 
         }

        setProductData(productDBData);
    }


    function addToCard(item,qty){

        setCardData(item,qty);

    }

    function updateCartItmQty(e, type,item){
    
        if(type==1){
            messsage = 'Product has been added in cart Successfully';
        }else{
             messsage = 'Product has been removed in cart Successfully';   
        }
       
        let qty = 0;
        if(type==1){
            qty = parseInt(item.cartQty)+1;
        }else{
            qty = (parseInt(item.cartQty) >1)?item.cartQty-1:1;
        }
        setCardData(item,qty);

        alert.show(messsage, {
            //timeout: 2000, // custom timeout just for this one alert
            type: 'success',
            /*onOpen: () => {
              console.log('hey')
            }, */ // callback that will be executed after this alert open
            /*onClose: () => {
                
             
                //console.log('closed');
            } */
        });
       
    }

    let imageUrl = 'http://asianfoodscork.apoliums.com/';

    function quickView (pr,nm,im){
        
       productData.map((item)=>{let price = parseInt(pr)+5;
        
		let imageUrl = 'http://asianfoodscork.apoliums.com/';
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
                                            <img src={im}  class="img-fluid" alt=""/>
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="single-slide2" role="tabpanel" aria-labelledby="single-slide-tab-2">
                                        <div class="single-product-img img-full">
                                            <img src={item.thumbnail} class="img-fluid" alt=""/>
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

                                <p class="product-description mb-20"></p>


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
    function clickOnSubCategory(subcatid){
        let productDBDataArr = []; 
        productDBData.map(
            (item,key)=>{
               if(subcatid ==0){
                 return productDBDataArr.push(item);
               }else{ 
                    if(item.sub_category_id===subcatid){
                        return productDBDataArr.push(item);
                    }
              }

            }
        )
        setProductData(productDBDataArr);
    }



    function Search(subcatid){
        let instrumentdataArr = []; 
        productData.filter((val)=>{
            if(searchterm==""){
                 return instrumentdataArr.push(val);
            }
            else if(val.name.toLowercase().includes(searchterm.toLowercase()))
            { return instrumentdataArr.push(val);
        }}).map(
            (val,key)=>{

            }
        )
        setProductData(instrumentdataArr);
    }

    function addToCart(item){
        setCardData(item,1);
    }

    console.log(productData);

    


	return (
			<>
				<Header  />
				
                <div className="breadcrumb-area mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="breadcrumb-container">
                                    <ul>
                                        <li><a href="/"><i className="fa fa-home"></i> Home</a></li>
                                        <li className="active">Shop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shop-page-container mb-50">
                    <div className="container">
                        <div className="row">
                           
                            <div className="col-lg-12 order-1 order-lg-2 mb-sm-35 mb-xs-35">
                              
                                <div className="shop-page-banner mb-35">
                                    <a href="shop-left-sidebar.html">
                                    <img src="assets/images/banners/shop-banner.jpg" className="img-fluid" alt=""/>
                                    </a>
                                </div>
                               

                                <div className="shop-header mb-35">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-2 col-sm-12 d-flex align-items-center">
                                            <div className="view-mode-icons mb-xs-10">
                                                <a className={ toglleData===0?'active':'' }    onClick={(e) => { 
                                                    clickOnToggle(e, 0);
                                                 }}  data-target="grid"><i className="fa fa-th"></i></a>
                                                <a  className={ toglleData===1?'active':'' }  data-target="list" onClick={(e) => { 
                                                    clickOnToggle(e,1);
                                                 }}><i className="fa fa-list"></i></a>
                                            </div>
                                        </div>


                                        <div className="col-lg-3 col-md-3 col-sm-12 d-flex flex-column flex-sm-row justify-content-between align-items-left align-items-sm-center">
                                          

                                          <div className="sort-by-dropdown d-flex align-items-center mb-xs-10">
                                          
                                                    <select onChange={e => clickOnSubCategory(e.target.value)} name="sort-by" id="sort-by" className="nice-select" >
                                                        <option value="0">All</option>
                                                        { subCategoryData.map((item,key)=>{
                                                            return  <option key={key} value={item.id}>{item.name}</option>
                                                        }) }    
                                                    </select>
                                                 
                                              </div>
  
                                             
                                          </div>           

                                        <div className="col-lg-4 col-md-4 col-sm-12">

                                            <div className="header-advance-search">
                                                <form action="#">
                                                    <input onChange={(event)=>{
                                            setSearchterm(event.target.value);
                                        }} type="text" placeholder="Search your product"  />
                                               
                                                    <button >
                                                        <span onClick={()=>Search(searchterm)} className="icon_search">
                                                        </span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>


                                                  

                                        <div className="col-lg-3 col-md-3 col-sm-12">
                                        <div className="sort-by-dropdown d-flex flex-row-reverse mb-xs-10">
                                               
                                                <select onChange={e => sortBy(e.target.value)} name="sort-by" id="sort-by" className="nice-select" >
                                                    <option value="1">Sort By Newness</option>
                                                    <option value="2">Sort By Price: Low to High</option>
                                                    <option value="3">Sort By Price: High to Low</option>
                                                </select>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="slider tab-slider mb-35">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="tab-slider-wrapper">
                                                    <nav>
                                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">

                                                            <a className="nav-item nav-link active" id="all-product-tab" data-toggle="tab" href="#allproduct" role="tab"
                                                                aria-selected="true">All Product</a>

                                                            <a className="nav-item nav-link" id="featured-tab" data-toggle="tab" href="#featured" role="tab"
                                                                aria-selected="true">Featured</a>
                                                            <a className="nav-item nav-link" id="new-arrival-tab" data-toggle="tab" href="#new-arrivals" role="tab"
                                                                aria-selected="false">New Arrival</a>
                                                            <a className="nav-item nav-link" id="nav-onsale-tab" data-toggle="tab" href="#on-sale" role="tab"
                                                                aria-selected="false">On Sale</a>
                                                        </div>
                                                    </nav>
                                                    <div className="tab-content" id="nav-tabContent">

                                                    <div className="tab-pane fade show active" id="allproduct" role="tabpanel" aria-labelledby="all-product-tab">
                                                            

                                                            <div  className={"shop-product-wrap row no-gutters mb-35 "+(toglleData===0?'grid':'list' )}>

                                                                { productData.map((item,key)=>{
                                                                    let price = parseInt(item.price)+5;

                                                                    let product_type = '';
                                                                    if(item.is_feature ==1){
                                                                        product_type ='Feature!';
                                                                    }else if(item.is_new_arrival ==1){
                                                                        product_type ='New Arrival!';
                                                                    }
                                                                    
                                                                    else if(item.sell !=0){
                                                                        product_type ='Sell!';
                                                                    }


                                                                    return <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                                    
                                                                        <div className="gf-product shop-grid-view-product">
                                                                            <div className="image">
                                                                                <Link to={'/single-product-'+item.id}>                                               
                                                                                <span className="onsale">{product_type}</span>
                                                                                <img src={imageUrl+item.thumbnail} className="img-fluid pro-imeg" alt=""/>
                                                                                </Link>
                                                                                <div className="product-hover-icons">
                                                                                    <a  data-tooltip="Add to cart"  onClick={(e) => { addToCard(item,1) }}  > <span className="icon_cart_alt"></span></a>
                                                                                    <a  data-tooltip="Quick view" onClick={e => quickView(item.price,item.product_name,imageUrl+item.thumbnail)}  >
                                                                                    <span className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a >{categoryData.name}</a>,
                                                                                    <a >{item.sub_cat_name}</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">{item.product_name}</a></h3>
                                                                                <div className="price-box">
                                                                                    <span className="main-price">{currency}{ price}</span>
                                                                                    <span className="discounted-price">{currency}{item.price}</span>
                                                                                </div>
                                                                            </div>                                                                  
                                                                        </div>
                                                                    
                                                                        <div className="gf-product shop-list-view-product">
                                                                            <div className="image">
                                                                                <a href="single-product.html">
                                                                                <span className="onsale">Sale!</span>
                                                                                <img src={imageUrl+item.thumbnail} className="img-fluid" alt=""/>
                                                                                </a>
                                                                                <div className="product-hover-icons">
                                                                                    <a href="#" data-tooltip="Quick view" data-toggle="modal" data-target="#quick-view-modal-container">
                                                                                    <span onClick={e => quickView(item.price,item.product_name,imageUrl+item.thumbnail)} className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                                                                <div className="price-box mb-20">
                                                                                    <span className="main-price">$89.00</span>
                                                                                    <span className="discounted-price">$80.00</span>
                                                                                </div>
                                                                                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
                                                                                    tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet
                                                                                    consectetur adipisicing elit. Ullam, magni.
                                                                                </p>
                                                                                <div className="list-product-icons">
                                                                                    <a href="#"  onClick={(e) => { addToCard(item,1) }} data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                                                    <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                                                    <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                    </div>
                                                                    
                                                                    }) }        

                                                                </div>   
                                                            
                                                        </div>    


                                                        <div className="tab-pane fade" id="featured" role="tabpanel" aria-labelledby="featured-tab">
                                                            

                                                            <div  className={"shop-product-wrap row no-gutters mb-35 "+(toglleData===0?'grid':'list' )}>

                                                                { productData.map((item,key)=>{
                                                                      if(item.is_feature ==1){
                                                                    let price = parseInt(item.price)+5;

                                                                    return <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                                    
                                                                        <div className="gf-product shop-grid-view-product">
                                                                            <div className="image">
                                                                                <Link to={'/single-product-'+item.id}>                                               
                                                                                <span className="onsale">feature!</span>
                                                                                <img src={imageUrl+item.thumbnail} className="img-fluid" alt=""/>
                                                                                </Link>
                                                                                <div className="product-hover-icons">
                                                                                    <a  data-tooltip="Add to cart"  onClick={(e) => { addToCard(item,1) }} > <span className="icon_cart_alt"></span></a>
                                                                                    <a  data-tooltip="Quick view" onClick={e => quickView(item.price,item.product_name,imageUrl+item.thumbnail)}  >
                                                                                    <span className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a >{categoryData.name}</a>,
                                                                                    <a >{item.sub_cat_name}</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">{item.product_name}</a></h3>
                                                                                <div className="price-box">
                                                                                    <span className="main-price">${ price}</span>
                                                                                    <span className="discounted-price">${item.price}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        <div className="gf-product shop-list-view-product">
                                                                            <div className="image">
                                                                                <a href="single-product.html">
                                                                                <span className="onsale">Sale!</span>
                                                                                <img src={imageUrl+item.thumbnail} className="img-fluid" alt=""/>
                                                                                </a>
                                                                                <div className="product-hover-icons">
                                                                                    <a href="#" data-tooltip="Quick view" data-toggle="modal" data-target="#quick-view-modal-container">
                                                                                    <span onClick={e => quickView(item.price,item.product_name,imageUrl+item.thumbnail)} className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                                                                <div className="price-box mb-20">
                                                                                    <span className="main-price">$89.00</span>
                                                                                    <span className="discounted-price">$80.00</span>
                                                                                </div>
                                                                                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
                                                                                    tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet
                                                                                    consectetur adipisicing elit. Ullam, magni.
                                                                                </p>
                                                                                <div className="list-product-icons">
                                                                                    <a href="#"  onClick={(e) => { addToCard(item,1) }} data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                                                    <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                                                    <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                    </div>
                                                                    
                                                                    }
                                                                    }) }        

                                                                </div>   
                                                            
                                                        </div>


                                                        <div className="tab-pane fade" id="new-arrivals" role="tabpanel" aria-labelledby="new-arrival-tab">
                                                            
                                                        <div  className={"shop-product-wrap row no-gutters mb-35 "+(toglleData===0?'grid':'list' )}>

                                                                { productData.map((item,key)=>{
                                                                    if(item.is_new_arrival ==1){
                                                                    let price = parseInt(item.price)+5;

                                                                    return <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                                    
                                                                        <div className="gf-product shop-grid-view-product">
                                                                            <div className="image">
                                                                                <Link to={'/single-product-'+item.id}>                                               
                                                                                <span className="onsale">New Arrival!</span>
                                                                                <img src={imageUrl+item.thumbnail} className="img-fluid" alt=""/>
                                                                                </Link>
                                                                                <div className="product-hover-icons">
                                                                                    <a  data-tooltip="Add to cart"  onClick={(e) => { addToCard(item,1) }} > <span className="icon_cart_alt"></span></a>
                                                                                    <a  data-tooltip="Quick view" onClick={e => quickView(item.price,item.product_name,imageUrl+item.thumbnail)}  >
                                                                                    <span className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">{item.product_name}</a></h3>
                                                                                <div className="price-box">
                                                                                    <span className="main-price">${ price}</span>
                                                                                    <span className="discounted-price">${item.price}</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                        <div className="gf-product shop-list-view-product">
                                                                            <div className="image">
                                                                                <a href="single-product.html">
                                                                                <span className="onsale">Sale!</span>
                                                                                <img src={imageUrl+item.thumbnail} className="img-fluid" alt=""/>
                                                                                </a>
                                                                                <div className="product-hover-icons">
                                                                                    <a href="#" data-tooltip="Quick view" data-toggle="modal" data-target="#quick-view-modal-container">
                                                                                    <span onClick={e => quickView(item.price,item.product_name,imageUrl+item.thumbnail)} className="icon_search"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="product-content">
                                                                                <div className="product-categories">
                                                                                    <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                    <a href="shop-left-sidebar.html">Vegetables</a>
                                                                                </div>
                                                                                <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                                                                <div className="price-box mb-20">
                                                                                    <span className="main-price">$89.00</span>
                                                                                    <span className="discounted-price">$80.00</span>
                                                                                </div>
                                                                                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
                                                                                    tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet
                                                                                    consectetur adipisicing elit. Ullam, magni.
                                                                                </p>
                                                                                <div className="list-product-icons">
                                                                                    <a href="#"  onClick={(e) => { addToCard(item,1) }} data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                                                    <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                                                    <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    
                                                                    </div>
                                                                    
                                                                    }
                                                                    }) }        

                                                                </div>       
                                                       

                                                        
                                                        </div>
                                                        <div className="tab-pane fade" id="on-sale" role="tabpanel" aria-labelledby="nav-onsale-tab">
                                                        <div  className={"shop-product-wrap row no-gutters mb-35 "+(toglleData===0?'grid':'list' )}>

                                                            { productData.map((item,key)=>{
                                                                if(item.sale !=0){
                                                                let discount = (parseFloat(item.price * parseInt(item.sale))/100);
                                                                let price =  Math.round(parseFloat(item.price) - discount);       
                                                                return <div key={key} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                                                                
                                                                    <div className="gf-product shop-grid-view-product">
                                                                        <div className="image">
                                                                            <Link to={'/single-product-'+item.id}>                                               
                                                                            <span className="onsale">Sale!</span>
                                                                            <img src={imageUrl+item.thumbnail} className="img-fluid" alt=""/>
                                                                            </Link>
                                                                            <div className="product-hover-icons">
                                                                                <a  data-tooltip="Add to cart"  onClick={(e) => { addToCard(item,1) }} > <span className="icon_cart_alt"></span></a>
                                                                                <a  data-tooltip="Quick view" onClick={e => quickView(item.price,item.product_name,imageUrl+item.thumbnail)}  >
                                                                                <span className="icon_search"></span> </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="product-content">
                                                                            <div className="product-categories">
                                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                                            </div>
                                                                            <h3 className="product-title"><a href="single-product.html">{item.product_name}</a></h3>
                                                                            <div className="price-box">
                                                                                <span className="main-price">${ item.price}</span>
                                                                                <span className="discounted-price">${price}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                
                                                                    <div className="gf-product shop-list-view-product">
                                                                        <div className="image">
                                                                            <a href="single-product.html">
                                                                            <span className="onsale">Sale!</span>
                                                                            <img src={imageUrl+item.thumbnail} className="img-fluid" alt=""/>
                                                                            </a>
                                                                            <div className="product-hover-icons">
                                                                                <a href="#" data-tooltip="Quick view" data-toggle="modal" data-target="#quick-view-modal-container">
                                                                                <span onClick={e => quickView(item.price,item.product_name,imageUrl+item.thumbnail)} className="icon_search"></span> </a>
                                                                            </div>
                                                                        </div>
                                                                        <div className="product-content">
                                                                            <div className="product-categories">
                                                                                <a href="shop-left-sidebar.html">Fast Foods</a>,
                                                                                <a href="shop-left-sidebar.html">Vegetables</a>
                                                                            </div>
                                                                            <h3 className="product-title"><a href="single-product.html">Ornare sed consequat nisl eget</a></h3>
                                                                            <div className="price-box mb-20">
                                                                                <span className="main-price">$89.00</span>
                                                                                <span className="discounted-price">$80.00</span>
                                                                            </div>
                                                                            <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere esse
                                                                                tempora magnam dolorem tenetur eos eligendi non temporibus qui enim. Lorem ipsum dolor sit amet
                                                                                consectetur adipisicing elit. Ullam, magni.
                                                                            </p>
                                                                            <div className="list-product-icons">
                                                                                <a href="#" onClick={(e) => { addToCard(item,1) }}  data-tooltip="Add to cart"> <span className="icon_cart_alt"></span></a>
                                                                                <a href="#" data-tooltip="Add to wishlist"> <span className="icon_heart_alt"></span> </a>
                                                                                <a href="#" data-tooltip="Compare"> <span className="arrow_left-right_alt"></span> </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                
                                                                </div>
                                                                
                                                                } }) }        

                                                            </div>
                                                               
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
export default ProductListByCategory;