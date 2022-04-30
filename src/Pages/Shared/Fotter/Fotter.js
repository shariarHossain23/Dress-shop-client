import { InboxIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Fotter.css';


const Fotter = () => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className='bg-fotter'>

           <div className="container">
           <div className="row">
                <div className="col-md-4 mt-3 ">
                    <h6 className='text-white ms-2'>Dress shop</h6>
                    <LocationMarkerIcon className='text-white' style={{width:"15px"}}></LocationMarkerIcon> <span className='text-white'>New work</span> <br />
                    <InboxIcon className='text-white' style={{width:"15px"}}></InboxIcon> <span className='text-white'>dress@gmail.com</span> <br />
                    <PhoneIcon className='text-white' style={{width:"15px"}}></PhoneIcon> <span className='text-white'>+99 98645</span>
                </div>
                <div className="col-md-4 mt-3">
                    <Link className='text-white text-decoration-none' to='/'>Home</Link> <br />
                    <Link className='text-white text-decoration-none' to='/blogs'>Blog</Link> <br />
                    <Link className='text-white text-decoration-none' to='/myitems'>Myitem</Link><br />
                    <Link className='text-white text-decoration-none' to='/additem'>Additem</Link><br />
                </div>
                <div className="col-md-4 mt-3 ">
                    <h4 className='text-white '>Follow Us</h4>
                    <FaFacebook className='text-white fs-6 mx-1'></FaFacebook>
                    <FaLinkedin className='text-white fs-6 mx-1'></FaLinkedin>
                    <FaInstagram className='text-white fs-6 mx-1'></FaInstagram>
                    <FaYoutube className='text-white fs-6 mx-1'></FaYoutube>
                </div>
            </div>
            <p className='text-white text-center mt-5'>&copy;{year} all right reserved Shariar</p>
           </div>
        </div>
    );
};

export default Fotter;