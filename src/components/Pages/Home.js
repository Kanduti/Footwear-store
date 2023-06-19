import React from "react";
import geoxvid from "../../assets/stolen_geox_video.mp4"
import campers from "../../assets/camp.avif"
import './Home.css'
export const Home = () => {
  return (
    <div  style={{marginTop:15, zIndex: -5}}>
      <video data-click-type="OTHER"  tabindex="-1"
 role="application" preload="metadata" loop="true"
 muted="muted" playsinline="playsinline" autoplay=""
 src={geoxvid} style={{width:'100%'}}></video>

 <h2 style={{color:'black', textAlign:'center'}}>Style that inspires</h2>

 <div className="container">
 <img src={campers} style={{width:'100%'}}>
 </img>
 <div className='bottomleft' style={{color:'white'}}>Find your crew, grab your gear and go off the grid. </div> 
  </div>
   </div>
  );
};
