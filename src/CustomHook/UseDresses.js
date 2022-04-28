import axios from 'axios';
import { useEffect, useState } from 'react';

const UseDresses = () => {
    const [dresses,setDresses] = useState([])

    useEffect(()=>{
        (async ()=>{
            const {data} = await axios.get("http://localhost:5000/dress")
           setDresses(data)
        })()
    },[])
    return [dresses,setDresses]
};

export default UseDresses;