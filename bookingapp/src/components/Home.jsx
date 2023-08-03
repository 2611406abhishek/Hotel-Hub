import React from "react";
import '../style/Home.css';
import Navbar from "./Navbar";
import Header from "./Header";
import Featured from "./Featured";
import PropertyList from "./PropertyList";
import FeaturedProperties from "./FeaturedProperties";
import MailList from "./MailList";
import Footer from "./Footer";
const Home = () => {
 
    
    return (

        <>
           <Navbar/>
           <Header />
           <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Home Guests Love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
           </div>
        </>
    );


}

export default Home;