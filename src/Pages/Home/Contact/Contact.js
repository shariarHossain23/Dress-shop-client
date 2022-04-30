import React from 'react';
import apple from '../../../Images/apple.png';
import playstore from '../../../Images/playstore.png';
import './Contact.css';
const Contact = () => {
    return (
        <div className='contact-bg mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 mt-3">
                        <h4 className='text-white'>Customer Care</h4>
                         <small className='d-block text-white'>Help Center</small> 
                         <small className='d-block text-white'>Contact us</small> 
                         <small className='d-block text-white'>Sell on dress shop</small> 
                         <small className='d-block text-white'>join the dress shop</small> 
                    </div>
                    <div className="col-sm-4 mt-3">
                        <h4 className='text-white'>Dress shop</h4>
                        <small className='text-white d-block'>About dress shop</small>
                        <small className='text-white d-block'>Digital payment</small>
                        <small className='text-white d-block'>Dress shop exclusive</small>
                        <small className='text-white d-block'>Dress shop app</small>
                    </div>
                    <div className="col-sm-4 mt-3">
                        <img width={150} src={playstore} alt="" />
                        <img width={190} className="text-white" src={apple} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;