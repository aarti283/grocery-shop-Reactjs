import axios from 'axios';

//Get parameters from url by key
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for(var i=0; i<vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] === variable) {
            return pair[1];
        }
    }
    return (false);
}

// Create instance called instance
//const siteUrl = 'https://www.utf-tour.com/webservices/oop1.0.0/';
const siteUrl = 'http://asianfoodscork.apoliums.com/webservices/v1.0.0/';
const instance = axios.create({
    baseURL: siteUrl,
    headers: {
        'content-type': 'application/json',
        'Client-Service': 'frontend-client',
        'Auth-Key': 'b6a6af7226f48e3a75e9ecff44a212b92141'
    }
});

export default {
    //Get Category data
    getCategortyItems: () =>
    instance({
        'method': 'GET',
        'url': 'afcmainApi/getCategory'
        
    }),

    getProductByCategortyId: (cat_id) =>
    instance({
        'method': 'GET',
        'url': 'afcmainApi/getProductByCategory/'+cat_id
        
    }),

    getAllProduct: () =>
    instance({
        'method': 'GET',
        'url': 'afcmainApi/getAllProduct'
        
    }),


    registerUser: (params) => {
        return axios.post(
            siteUrl + 'afcmainApi/registerUser',
            {
                'formdata': params
            }
        );
    },        

    loginUser: (params) => {
        return axios.post(
            siteUrl + 'afcmainApi/loginUser',
            {
                'formdata': params
            }
        );
    }, 
    
    
    contactUser: (params) => {
        return axios.post(
            siteUrl + 'afcmainApi/contactUser',
            {
                'formdata': params
            }
        );
    }, 

    getProductDetailsById: (product_id) =>
    instance({
        'method': 'GET',
        'url': 'afcmainApi/getProductDetailsById/'+product_id
        
    }),
    
    checkout: (userId,params) => {
        return axios.post(
            siteUrl + 'afcmainApi/checkout/'+userId,
            {
                'formdata': params
            }
        );
    },  

    getOrderByUserId: (userId) =>
    instance({
        'method': 'GET',
        'url': 'afcmainApi/getOrderByUserId/'+userId
        
    }),

    getOrderByOrderId: (order_id) =>
    instance({
        'method': 'GET',
        'url': 'afcmainApi/getOrderByOrderId/'+order_id
        
    }),


    makeStripePayment: (userId,params) => {
        return axios.post(
            siteUrl + 'paymentGatewayController/makeStripePayment/'+userId,
            {
                'formdata': params
            }
        );
    },  

    
    //Save Fill Entire Row data
    saveFillEntireRow: (params) => {
        return axios.post(
            siteUrl + 'oopboxApi/saveFillEntireRow',
            {
                'tour_id': getQueryVariable('tour_id'),
                'formdata': params
            }
        );
    }
    
}