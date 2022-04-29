import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const UseDresses = () => {
    const [dresses,setDresses] = useState([])
    const [user] = useAuthState(auth)
    const email = user?.email
    useEffect(()=>{
        (async ()=>{
            const {data} = await axios.get(`https://secure-reaches-83838.herokuapp.com/dress`)
           setDresses(data)
        })()
    },[])
    return [dresses,setDresses]
};

export default UseDresses;