import axios from 'axios';
import { useEffect, useState } from 'react';

const UseDresses = () => {
    const [dresses,setDresses] = useState([])
    useEffect(()=>{
        (async ()=>{
            const {data} = await axios.get(`https://secure-reaches-83838.herokuapp.com/dress`)
           setDresses(data)
        })()
    },[])
    return [dresses,setDresses]
};

export default UseDresses;