import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div style={{marginTop:"100px"}} className='mt-5 text-center'>
            <h1 className='text-danger mt-5 mb-2'>404 Not Found</h1>
            <button className='btn btn-info px-5 py-3 text-white' onClick={()=> navigate("/")}>Go to Home</button>
        </div>
    );
};

export default NotFound;