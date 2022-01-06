import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';


const Register =(props)=>{
    const alert = useAlert()
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

      const onSubmit = (data,e) => {

       // alert(JSON.stringify(data));
       Api.registerUser(JSON.stringify(data)).then(
        (response)=>{
             console.log(response.data.data);
             if(response.data.success){
                e.target.reset(); // reset after form submit   
                alert.show(response.data.message, {
                    timeout: 3000, // custom timeout just for this one alert
                    type: 'success',
                    onOpen: () => {
                      window.location.href =  '/Home';
                      
                   // console.log('hey')
                  },  /*onOpen: () => {
                      console.log('hey')
                    }, // callback that will be executed after this alert open
                    onClose: () => {
                      console.log('closed')
                    } */
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
				<div class="breadcrumb-area mb-50">
                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <div class="breadcrumb-container">
                                    <ul>
                                        <li><a href="/"><i class="fa fa-home"></i> Home</a></li>
                                        <li class="active">Register</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="page-content mb-50">
                        <div class="container">
                            <div class="row">
                                
                                <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 offset-lg-3">
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div class="login-form">
                                            <h4 class="login-title">Register</h4>

                                            <div class="row">
                                                <div class="col-md-6 col-12 mb-20">
                                                    <label>First Name</label>
                                                    <input {...register('firstName', { required: "First Name is a required", maxLength: {
                                                    value: 15,
                                                    message: "Max length is 15"
                                                  } })} class="mb-0" type="text" placeholder="First Name"/>
                                                                                            {errors.firstName && <p class="error">{errors.firstName.message}</p>}
                                                </div>
                                                <div class="col-md-6 col-12 mb-20">
                                                    <label>Last Name</label>
                                                    <input {...register('lastName', {  required: "Last Name is a required", maxLength: {
                                                    value: 15,
                                                    message: "Max length is 15"
                                                  } })} class="mb-0" type="text" placeholder="Last Name"/>
                                                                                            {errors.lastName && <p class="error">{errors.lastName.message}</p>}
                                                </div>
                                                <div class="col-md-12 mb-20">
                                                    <label>Email Address*</label>
                                                    <input {...register('email', {  required: "Email is required",
                                                  pattern: {
                                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                    message: "Invalid email address"
                                                  } })}  class="mb-0" type="email" placeholder="Email Address"/>
                                                                                            {errors.email && <p class="error">{errors.email.message}</p>}
                                                </div>

                                                <div class="col-md-12 mb-20">
                                                    <label>Mobile Number*</label>
                                                    <input {...register('mobile', { required: true })}  class="mb-0" type="Number" placeholder="Mobile Number"/>
                                                    {errors.mobile && <p class="error">Mobile Number is required.</p>}
                                                </div>

                                                <div class="col-md-6 mb-20">
                                                    <label>Password</label>
                                                    <input {...register('password', { required: true })} class="mb-0" type="password" placeholder="Password"/>
                                                    {errors.password && <p class="error">Password is required.</p>}
                                                </div>
                                                <div class="col-md-6 mb-20">
                                                    <label>Confirm Password</label>
                                                   <input
          {...register("confirm_password", {
            required: "Please confirm password!",
            validate: {
              matchesPreviousPassword: (value) => {
                const { password } = getValues();
                return password === value || "Passwords should match!";
              }
            }
          })} type="password"
        />
        {errors.confirm_password && (
          <p class="error">
            {errors.confirm_password.message}
          </p>
        )}
                                                </div>
                                                <div class="col-12">
                                                    <button class="register-button mt-0">Register</button>
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
export default Register;