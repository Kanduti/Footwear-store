import React, {useState, useEffect, useRef} from "react";
import obucaService from "../../services/obuca"
import './Inv.css'
import {Buffer} from 'buffer';
window.Buffer = window.Buffer
export const Inventory = ({path, func, basket}) => {

 const [artikli, setArtikli] = useState([])
 
const [counter, setCounter] = useState(0)

  useEffect(() => {
    
  obucaService
  .get(path)
  .then((response) => {
    for(let i = 0; i<response.length; i++){
    if(response[i].Slika){
  response[i].Slika = Buffer.from(response[i].Slika).toString('base64')}
  }
 setArtikli(response)
})
 },[path])

  return (
    <div>
 <div class="image_wrapper">
 {artikli.map(item => 
    <div> <img  src={`data:image/png;base64,${item.Slika}`} alt="image unavialable" /><div style={{justifyContent: 'flex-end'}}>{item.Model_Naslov}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item["Market_price_in_€"]}€ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={()=>func(basket.concat(item))}> Kupi <i className="fa fa-shopping-cart" ></i></button></div>
  </div> )}


    </div>
    </div>
  );
};
