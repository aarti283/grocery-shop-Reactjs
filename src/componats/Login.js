import React, { useContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';
import { authContext } from '../auth/AuthContext';
//import { Redirect } from 'react-router';
import { Redirect } from "react-router-dom";


const Login =(props)=>{
    const {setAuthData} = useContext(authContext);
    const alert = useAlert();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

      const onSubmit = (data,e) => {

       // alert(JSON.stringify(data));
       Api.loginUser(JSON.stringify(data)).then(
        (response)=>{
            // console.log(response.data.data);
             if(response.data.success){
                setAuthData(response.data.data);
                e.target.reset(); // reset after form submit   
               
                alert.show(response.data.message, {
                    timeout: 3000, // custom timeout just for this one alert
                    type: 'success',
                    onOpen: () => {
                       
                     // console.log('hey')
                    },  // callback that will be executed after this alert open
                    onClose: () => {
                        //return <Redirect to='/' />
                        window.location.href = '/';
                     // console.log('closed')
                    } 
                    
                });

             }else{

               // console.log(response.data.message);
                alert.show(response.data.message, {
                    timeout: 3000, // custom timeout just for this one alert
                    type: 'error'
                    /*onOpen: () => {
                      console.log('hey')
                    }, // callback that will be executed after this alert open
                    onClose: () => {
                      console.log('closed')
                    } */
                });

             }
        }
        ) 


      }
	return (
			<>
				<Header />
				<div className="breadcrumb-area mb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="breadcrumb-container">
                                    <ul>
                                        <li><a href="/"><i className="fa fa-home"></i> Home</a></li>
                                        <li className="active">Login</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="page-content mb-50">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-xs-12 col-lg-6 offset-lg-3">
                                  
                                    <form  onSubmit={handleSubmit(onSubmit)} >

                                        <div className="login-form">
                                            <h4 className="login-title">Login</h4>

                                            <div className="row">
                                                <div className="col-md-12 col-12 mb-20">
                                                    <label>Email Address*</label>
                                                    <input {...register('email', { required: "Email is required",
                                              pattern: {
                                                value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: "Invalid email address"
                                              }  })} class="mb-0" type="email" placeholder="Email Address"/>
                                               {errors.email && <p class="error">{errors.email.message}</p>}
                                                </div>
                                                <div className="col-12 mb-20">
                                                    <label>Password</label>
                                                    <input {...register('password', { required: true })} class="mb-0" type="password" placeholder="Password"/>
                                                    {errors.password && <p class="error">Password is required.</p>}
                                                </div>

                                                <div className="col-md-12">
                                                    <button className="register-button mt-0">Login</button>
                                                </div>

                                            </div>
                                        </div>

                                    </form>
                                </div>
                                
                            </div>
                        </div>
                    </div>
				<Footer/>
		</>
	);
	
}
export default Login;