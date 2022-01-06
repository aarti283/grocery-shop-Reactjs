import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
    const[cart, setCart] = useState({
        loading: true,
        cartItem: null
    });
    
    //a function that will help us to add the user data in the auth;
    const setCardData = (item,qty) => {
        //console.log("preee"+cart.cartItem);

        let product_id = 0;
        if(item.pid !== undefined ){
            product_id = item.pid;
        }else{
            product_id = item.id;
        }
       
        let cartdataArr = [];
        if(cart.cartItem !==null){
          //  localStorage.removeItem("cartLocalData");
            let  cartdata =   cart.cartItem;
           //console.log("aaaqqqqqqqa" +cartdata);
            //console.log(JSON.parse(cartdata));  
            cartdata.map((row,key)=>{
               // console.log(row);
                if(row.id !=product_id){
                    cartdataArr.push(row);
                } 
            });
            cartdataArr.push({
                id: product_id, 
                product_name:  item.product_name,
                price:  item.price,
                replace_product:  item.replace_product,
                return_product:  item.return_product,
                thumbnail:  item.thumbnail,
                total_stock:  item.total_stock,
                sub_category_id:  item.sub_category_id,
                category_id:  item.category_id,
                cartQty:  qty
            });

           
           
        }else{
            
            cartdataArr.push({
                id: product_id, 
                product_name:  item.product_name,
                replace_product:  item.replace_product,
                price:  item.price,
                return_product:  item.return_product,
                thumbnail:  item.thumbnail,
                total_stock:  item.total_stock,
                sub_category_id:  item.sub_category_id,
                category_id:  item.category_id,
                cartQty:  qty
            });

            
        }
       
        setCart({cartItem:cartdataArr});
    }

    const removeCardItem = (product_id) => {
       
        let cartdataArr = [];
        if(cart.cartItem !==null){
            let  cartdata =   cart.cartItem;
            cartdata.map((row,key)=>{
               // console.log(row);
                if(row.id !=product_id){
                    cartdataArr.push(row);
                } 
            });
           
        }
       
        setCart({cartItem:cartdataArr});
    }

    const emptyCardItem = () => {
       
        window.localStorage.removeItem("cartLocalData");
        let cartdataArr = [];
        setCart({cartItem:cartdataArr});
    }



    useEffect(() => {
        setCart({
            loading: false,
            cartItem: JSON.parse(window.localStorage.getItem('cartLocalData'))
        });
    }, []);
    //2. if object with key 'authData' exists in localStorage, we are putting its value in auth.data and we set loading to false. 
    //This function will be executed every time component is mounted (every time the user refresh the page);

    useEffect(() => {
        window.localStorage.setItem('cartLocalData', JSON.stringify(cart.cartItem));
    }, [cart.cartItem]);
    // 1. when **auth.data** changes we are setting **auth.data** in localStorage with the key 'authData'.

    return (
        <CartContext.Provider value={{cart, setCardData,removeCardItem,emptyCardItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;