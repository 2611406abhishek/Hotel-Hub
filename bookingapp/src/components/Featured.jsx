 import React from "react";
import '../style/Featured.css';
import Berlin from '../Images/Berlin.jpg';
import Madrid from '../Images/Madrid.jpg';
import London from '../Images/London.jpg';
import useFetch from "../hooks/useFetch.js";


const Featured = () =>{

  const {data,loading,error}= useFetch("/hotels/countByCity?cities=Berlin,madrid,Delhi");
  console.log(data);
     return (
        <>
            <div className="featured"> 
             { loading ? ("Loading please wait"):
              ( <>
               <div className="featuredItem">
                <img src={Berlin} alt="myimg" className="featuredImg"/>
                <div className="featuredTitles">
                     <h2>Berlin</h2>
                     <h2>{data[0]} properties</h2>
                </div>
             </div>
             <div className="featuredItem">
                <img src={Berlin} alt="myimg" className="featuredImg"/>
                <div className="featuredTitles">
                     <h2>Madrid</h2>
                     <h2>{data[1]} properties</h2>
                </div>
             </div>
             <div className="featuredItem">
                <img src={Berlin} alt="myimg" className="featuredImg"/>
                <div className="featuredTitles">
                     <h2>Delhi</h2> 
                     <h2>{data[2]} properties</h2>
                </div>
             </div>
             </>)
             }
            </div>
        </>
     );

}


export default Featured;