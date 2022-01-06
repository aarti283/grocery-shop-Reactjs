import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useForm } from 'react-hook-form';
import Api from '../Api';
import { useAlert } from 'react-alert';


const Contact =(props)=>{

	const alert = useAlert()
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onChange" // "onChange /onBlur"
      });

      const onSubmit = (data,e) => {

       // alert(JSON.stringify(data));
       Api.contactUser(JSON.stringify(data)).then(
        (response)=>{
             console.log(response.data.data);
             if(response.data.success){
                e.target.reset(); // reset after form submit   
                alert.show(response.data.message, {
                    timeout: 3000, // custom timeout just for this one alert
                    type: 'success'
                    /*onOpen: () => {
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
										<li class="active">Contact</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>	
				<div class="page-content mb-50">
					
					<div class="container">
						<div class="row">
							<div class="col-lg-3 col-md-4 mb-xs-35">
							
								<div class="contact-page-side-content">
									<h3 class="contact-page-title">Contact Us</h3>
									
									<div class="single-contact-block">
										<h4><img src="assets/images/icons/contact-icon1.png" alt=""/> Address</h4>
										<p>14 North Main Street, Centre, Cork, Ireland</p>
									</div>
								
									<div class="single-contact-block">
										<h4><img src="assets/images/icons/contact-icon2.png" alt=""/> Phone</h4>
										<p>Mobile: +353 87 270 8050</p>
										
									</div>
								
									<div class="single-contact-block">
										<h4><img src="assets/images/icons/contact-icon3.png" alt=""/> Email</h4>
										<p>zeeshan_pk09@hotmail.com</p>
										
									</div>
								
								</div>
								
							</div>
							<div class="col-lg-9 col-md-8 pl-100 pl-xs-15">
							
								<div class="contact-form-content">
									<h3 class="contact-page-title">Tell Us Your Message</h3>
									<div class="contact-form">
										<form  onSubmit={handleSubmit(onSubmit)}>
											<div class="form-group">
												<label>Your Name <span class="required">*</span></label>
												<input {...register('yourname', { required: true })} type="text"  />
												{errors.yourname && <p class="error">Your name is required.</p>}
											</div>
											<div class="form-group">
												<label>Your Email <span class="required">*</span></label>
												<input {...register('email', { required: true })} type="email" />
												{errors.email && <p class="error">Email is required.</p>}
											</div>
											<div class="form-group">
												<label>Subject<span class="required">*</span></label>
												<input {...register('subject', { required: true })} type="text" />
												{errors.subject && <p class="error">Subject is required.</p>}
											</div>
											<div class="form-group">
												<label>Your Message<span class="required">*</span></label>
												<textarea {...register('message', { required: true })} ></textarea>
												{errors.message && <p class="error">Your Message is required.</p>}
											</div>
											<div class="form-group">
												<button type="submit" value="submit"  class="contact-form-btn" name="submit">send</button>
											</div>
										</form>
									</div>
									<p class="form-messege pt-10 pb-10 mt-10 mb-10"></p>
								</div>
							
							</div>
						</div>
					</div>
				</div>


				<Footer/>
		</>
	);
	
}
export default Contact;