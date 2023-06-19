import React, {useState, useEffect, useRef} from "react";
import obucaService from "../../services/obuca"

import './Inv.css'
import {useDispatch, useSelector} from 'react-redux'
import {newFavorite} from '../../reducers/favoritesReducer'
import {Buffer} from 'buffer';
import {newArtikl} from '../../reducers/artiklReducer'
import {useParams} from 'react-router-dom';
window.Buffer = window.Buffer
export const Inventory = ({path}) => {
  const dispatch = useDispatch()
 
const [artikli, setArtikli] = useState([])

const favoriti = useSelector(state => state)
const params = useParams();

  useEffect(() => {
    if(path == '')
    {console.log(localStorage.getItem('rezultat'));
   
    const inter = JSON.parse(localStorage.getItem('rezultat'));
    inter.Slika = Buffer.from(inter.Slika).toString('base64')
     
       setArtikli([inter])
    }
    else{
  obucaService
  .get(path)
  .then((response) => {
    console.log(favoriti, 'favrotiti');
    var im = []
    
    if(favoriti.favorite !== undefined){
    im = favoriti.favorite.filter(item => item.vrsta === response[0].vrsta)
    }
   
    for(let i = 0; i<response.length; i++){
      response[i].Checked ="fa fa-star"
    for(let x = 0; x<im.length;x++)
    {
      if(im[x].Model_Naslov===response[i].Model_Naslov){
        console.log('im in');
        response[i].Checked ="fa fa-star checked"
      
      }
    }
    
    if(response[i].Slika){
  response[i].Slika = Buffer.from(response[i].Slika).toString('base64')}
  }
setArtikli(response)

})}
 },[params])

console.log('windows search',window.location.search);
function starHandler (index) {
  console.log('im inside');
  
  const temp = artikli.map(a => {return {...a}})
  if(artikli[index].Checked === 'fa fa-star')
  {
    temp[index].Checked = 'fa fa-star checked'
    
    setArtikli(temp)
    var action = {
      type: 'add',
      payload: artikli[index]
    }
    dispatch(newFavorite(action))
  }
  
  else if(artikli[index].Checked === 'fa fa-star checked')
  {console.log('artikli.checked',artikli[index].Checked)
    temp[index].Checked = 'fa fa-star'
    setArtikli(temp)
    action ={
      type: 'remove',
      payload: artikli[index].Model_Naslov
    }
   
  dispatch(newFavorite(action))
  
  }
  else{console.log('artikli.checked',artikli[index].Checked);}


}

  return (
    <div><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 <div class="image_wrapper">
 {artikli.map((item, index) => 
    <div> <img  src={`data:image/png;base64,${item.Slika}`} alt="image unavialable" /><div style={{alignItems: 'flex-end'}}>{item.Model_Naslov}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item["Market_price_in_€"]}€ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span className={item.Checked} onClick={()=>starHandler(index)}></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button onClick={()=>dispatch(newArtikl({type: 'add', payload: item}))}> Kupi <i className="fa fa-shopping-cart" ></i></button></div>
  </div> )}


    </div>
    </div>
  );
};
