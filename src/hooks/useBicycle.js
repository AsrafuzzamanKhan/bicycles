import { useEffect } from "react";
import { useState } from "react";


const useBicycle = () => {
    const [bicycle,setBicycle]=useState([])
     const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('bicycles.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setBicycle(data)
            setLoading(false)
        })
    },[])
    return [bicycle,loading];
};

export default useBicycle;