import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);
  
    let location = useLocation();
    if(loading){
        return <Spinner></Spinner>
    }
  
    if (!user) {
      
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
 if (user.providerData[0]?.providerId==="password" &&!user.emailVerified) {
   return <div className='text-center mt-5'>
      <h3 className='text-danger'>Email is Not Verified</h3>
      <h5 className='text-info'>Please verify your Email</h5>
      <button className='btn btn-primary' onClick={async() =>{
        await sendEmailVerification(user.email)
        toast.success("Email sent")
      }}>send email verification</button>
   </div>
 }
    
  
    return children;
};

export default PrivateRoute;