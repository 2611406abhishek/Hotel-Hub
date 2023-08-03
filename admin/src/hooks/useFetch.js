import { useEffect, useState } from "react"
import axios from "axios"


const useFetch = (url) =>{

    // a fter making any api request loading is set to be true 
    const [loading,setLoading] = useState(false);
    // if loading is succesful then we set our data 
    const [data,setData] = useState("");
    // if loading is not successful then error will be true
    const [error,setError] = useState(false);
   
    useEffect(()=>{
        const fetchData= async ()=>{
            setLoading(true);
        try{

            const res=await axios.get(url);
            setData(res.data);
            setLoading(false);

        }catch(err)
        {
              setError(err);
        }
           
        }

        fetchData();
    },[])

    const reFetch= async ()=>{
        setLoading(true);
        console.log(url);
        try{
       
            const res=await axios.get(url);
            setData(res.data);
            setLoading(false);
    
        }catch(err)
        {
            setError(err);
        }
       
    }
    

    return {data,loading,error,reFetch};
}

export default useFetch;

