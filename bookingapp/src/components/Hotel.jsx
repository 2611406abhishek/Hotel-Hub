import React, { useContext, useState } from "react";
import '../style/Hotel.css';
import Navbar from "./Navbar";
import Header from "./Header";
import {faCircleLeft, faCircleRight, faCircleXmark, faMap} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myimg from '../Images/hero.jpg';
import Footer from "./Footer";
import MailList from "./MailList";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";
import Reserve from "./Reserve";

const Hotel = () => {
      

    const location = useLocation();
    const id= location.pathname.split('/')[2];
    // console.log(id);
    const [sliderIdx,setsliderIdx] = useState(0);
    const [open,setOpen]=useState(false);
    const [openModal,setOpenModal]=useState(false);
    const {data,loading,error}=useFetch(`/hotels/find/${id}`); 
    const navigate=useNavigate();
    const {dates,options} = useContext(SearchContext);
    const {user}=useContext(AuthContext);

    console.log(dates);
    
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
    function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
    }
     const days = dayDifference(dates[0].endDate, dates[0].startDate);
  
     const handleOpen = (idx,op) =>{
        setsliderIdx(idx);
        setOpen(true);

     }

     const handleMove =(dir) =>{
            let newidx;
            if(dir==="l")
            {
               newidx = sliderIdx===0?5:sliderIdx-1;
            }
            else{
                newidx = sliderIdx===5?0:sliderIdx+1;
            }

            setsliderIdx(newidx);
     }
   
     const handleClick = () =>{
           if(user)
           {
                setOpenModal(true); 
           }
           else{
              navigate('/login');
           }
     }
    return (

        <div>
               <Navbar/>
               <Header type="list"/>
              {loading?"Loading Please wait":( <> 
                  <div className="hotelContainer">
                   { open && <div className="slider">
                     <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                     <FontAwesomeIcon icon={faCircleLeft} className="arrow" onClick={()=>handleMove("l")}/>
                      <div className="sliderWrapper">
                           <img src={data.photos[sliderIdx]} alt="" className="slideImg"/>
                      </div>

                     <FontAwesomeIcon icon={faCircleRight} className="arrow" onClick={()=>handleMove("r")}/>
                   </div>}
                   <div className="hotelWrapper">
                     <button className="bookNow" onClick={handleClick}> Reserve or Book Now</button>
                     <h1 className="hotelTitle">{data.name}</h1>
                     <div className="hotelAddress">
                          <FontAwesomeIcon icon={faMap}/>
                          <span>{data.address}</span>
                     </div>
                     <span className="hotelDistance">Excellent loaction- {data.distance}m from center</span>
                     <span className="hotelPriceHighlight">Book a stay over {data.cheapestPrice} at this property and get a gree airport taxi</span>
                     <div className="hotelImages">
                          {
                            data.photos?.map( (photo,ind) => (
                               <div className="hotelImgWrapper" key={ind}>
                                    <img onClick={()=>handleOpen(ind,!open)} src={photo} alt="" className="hotelImg"/>
                                </div>
                            ))
                          }
                     </div>
                     <div className="hotelDetails">
                         <div className="hotelDetailsTexts">
                            <h1 className="hotelTitle">{data.title}</h1>
                            <p className="hotelDesc"> 
                                {data.desc}
                            </p>
                         </div>
                         <div className="hotelDetailsPrice">
                             <h1>Perfect for a {days}-night stay!</h1>
                             <span>
                               Locatted in the real heart of krakow,this property has an excellent location score of 9.8!
                             </span>
                             <h2>
                                 <b> {days*data.cheapestPrice*options.room}</b> ({days} nights)
                             </h2>
                             <button onClick={handleClick}>Reserve or Book Now!</button>
                         </div>
                     </div>
                   </div>   
                   <MailList/>
                   <Footer/>
               </div></>)}
            {openModal && <Reserve setOpen={setOpenModal} hotelId={id}/> }
        </div>
    );


}

export default Hotel;