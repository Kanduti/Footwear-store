import React, { useState, useEffect } from "react";
import { NavLink, Router } from "react-router-dom";
import "./NavBar.css";
import {useSelector} from 'react-redux'
import obucaService from "../services/obuca"
import { BrowserRouter as  Route, Routes } from "react-router-dom";
import { Inventory } from "./Pages/Inventory";
import {Buffer} from 'buffer';
window.Buffer = window.Buffer
const MutualCategs = ({spol, setExp, setClick}) => {

var x = spol === "women"
  return(
    <>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to={`/inventory/${spol}/cipele`} onClick={()=>{setExp(false); setClick(false)}}>
   Cipele
  </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to={`/inventory/${spol}/patike`}  onClick={()=>{setExp(false); setClick(false)}}>
  Patike
  </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to={`/inventory/${spol}/sandale`} onClick={()=>{setExp(false); setClick(false)}}>
Sandale
  </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to={`/inventory/${spol}/cizme`}  onClick={()=>{setExp(false); setClick(false)}}>
  Čizme
  </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to={`/inventory/${spol}/papuce`}  onClick={()=>{setExp(false); setClick(false)}}>
  Papuče
  </NavLink>
    </li>
    {x?       <li className="nav-item">
      <NavLink className="nav-links"  exact to={`/inventory/${spol}/stikle`}  onClick={()=>{setExp(false); setClick(false)}}>
    Stikle
    </NavLink>
      </li> : null}
         </>
  )
}


const SearchItems = ({items, search, setSearch, setResults, setItems}) =>{
  let tempo = items;
    let resulting = tempo.filter(temp => temp.Model_Naslov.substring(0, search.length) == search)
   
if(items.length == 0){
  return(<div></div>)
}
else{
return(<>

  
    {resulting.map(item => <li className="nav-item" style={{}}>
    <NavLink className="nav-links"  exact to={`/${item.idObuca}`}  onClick={()=>{setResults(item); setSearch(''); setItems([])}}>
                            <img className='nav-image'style={{display:'inline'}} src={`data:image/png;base64,${Buffer.from(item.Slika? item.Slika : "ahrhregaewadawsgf").toString('base64')}`}/> {item.Model_Naslov} 
                             </NavLink>
                   </li>)}

</>)}}



function NavBar({basket}) {
  const [click, setClick] = useState(false);
  const [showInp, setShowInp] = useState(false)
  const [search, setSearch] = useState('')
  const [expMan, setExpMan] = useState(false)
  const [expWomen, setExpWomen] = useState(false)
  const [expKids, setExpKids] = useState(false)
  const [expSale, setExpSale] = useState(false)
  const [items, setItems] = useState([])
  const artikl = useSelector(state=>state)
  const [results, setResults] = useState({})

  const toggleMenu = () => {setClick(!click)
   setShowInp(false)}
  const toggleShowInp = () => {setShowInp(!showInp)
   setClick(false)}
//Dalje search treba sa useEffectom da spika sa serverom pogledati countries projekat iz part1
function expand(str) {
 var midija = window.matchMedia("(max-width: 960px)")
  if(midija.matches){
  switch (str){
    case 'man':
    setExpMan(!expMan)
    break;
    case 'women':
     setExpWomen(!expWomen)
     break
     case 'kids':
      setExpKids(!expKids)
      break
      case 'sale':
        setExpSale(!expSale)
        break;
  }
} else return
}

useEffect(()=> {
localStorage.setItem('rezultat',  JSON.stringify(results))
},[results])

  function searchItems(e)
  { e.preventDefault();
     setSearch(e.target.value);
     console.log('current search', search);
    if(search.length >= 3)
    {
        if(items.length===0)
        {
          obucaService
           .getAll()
           .then((response)=> {
            console.log(response.map(item => item.Model_Naslov));
            
            setItems(response)
           })
        }


    }
    else {
      setItems([])
    }
     }

     var midija = window.matchMedia("(max-width: 960px)")
     function searchFieldFunc (inFlex) {
      if(inFlex){
        if(!midija.matches)
        {
          return ( <div> <input type='search' name="q" onChange={searchItems} value={search} id="mobileSearch" className="fas fa-times" placeholder='  &#xf002; Search...'></input>  </div>)
        }
        else 
        {
          return
        }
      }
      else {
        if(midija.matches)
{  return ( <div> {console.log(showInp, 'inp')}<input type='search' name="q" style={{display:'block' , zIndex:10}}onChange={searchItems} value={search} id="mobileSearch" className={showInp?"fas fa-times": "Nestani"} placeholder='  &#xf002; Search...'></input>  </div>)
}
else 
{
  return
}
      }
 
     }
  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          
            <div style={{color:'black', marginLeft:7}}>
             <b> Gesix <br></br>Obuća</b>
                <i style={{fontSize:24, color:'black', position:'absolute', top:22}} class='fas'>&#xf54b;</i>
             
    
            </div>
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
         
            <div className="parent">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={()=>expand('women') }
              >
                Žene <div className='arrowheads'> &#x2304; </div> 
              </NavLink>
              {/*drop down is for desktop and inline one is for mobile*/}
            </li>
            <div style={{display: expWomen ? "block":"none"}}>
           <MutualCategs spol={'women'}  setExp={setExpWomen} setClick={setClick}/>
            </div>
            <div className="dropdown">
            <MutualCategs spol={'women'}/>
            </div>
            </div>
            <div className="parent">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={()=>expand('kids') }
              >
                Deca <div className='arrowheads'> &#x2304; </div> 
              </NavLink>
              {/*drop down is for desktop and inline one is for mobile*/}
            </li>
            <div style={{display: expWomen ? "block":"none"}}>
           <MutualCategs spol={'kids'}  setExp={setExpKids} setClick={setClick}/>
            </div>
            <div className="dropdown">
            <MutualCategs spol={'kids'}/>
            </div>
            </div>
      

            <div className="parent">
            <li className="nav-item">
              <NavLink
               exact
               to="/"
                activeClassName="active"
                className="nav-links"
                onClick={() => expand('sale') } >
                Rasprodaja <div className='arrowheads'> &#x2304; </div> 
              </NavLink>
            </li>

            <div style={{display: expSale ? "block":"none"}}>
           <MutualCategs spol={'sale'} setExp={setExpSale} setClick={setClick}/>
            </div>

            <div className="dropdown">
            <MutualCategs spol={'sale'}/>
            </div>
            </div>
            <div className="parent">
                      <li className="nav-item">
              <NavLink
                exact
                to="/Muskarci"
                activeClassName="active"
                className="nav-links"
                onClick={()=>expand('man') }>
                Muškarci  <div className='arrowheads'> &#x2304; </div> 
              </NavLink>
            </li>
       
            <div style={{display: expMan ? "block":"none"}}>
           <MutualCategs spol={'man'} setExp={setExpMan} setClick={setClick}/>
         
            </div>
        
            <div className="dropdown">
        
            <MutualCategs spol={'man'}/>
            </div>
        
            </div>
          
          </ul>
   <div className="flex-right">
   {searchFieldFunc(true)}
          <div >
            <i className="fa" onClick={toggleShowInp}>&#xf002;</i>
       
          </div>
          <div >
          <NavLink
                exact
                to="/basket"
                activeClassName="active"
                className="nav-links"
                onClick={()=> setClick(false)}
               >
                   <i className="fa fa-shopping-cart" ></i>
                   <i style={{fontSize:19, color:'red' ,position: 'relative', left: -32, bottom:-14}} className='fas'>&#xf111;</i>
                   <div style={{fontSize:16, color:'black' ,position: 'relative', left: -4, bottom:12}}>{artikl.artikl.length}</div>
              </NavLink>
              </div>
          <div>
          <NavLink
                exact
                to="/favorites"
                activeClassName="active"
                className="nav-links"
                onClick={()=> setClick(false)}
               >
                   <i className="fa fa-star" ></i>
              </NavLink>
          </div>
          <div onClick={toggleMenu} id="x" >
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
    </div>  
    
        </div>
        
      </nav>
      <div className='pacenik'>
         <SearchItems items={items} search={search} setSearch={setSearch} setResults = {setResults} setItems = {setItems}/>
         </div>
      {searchFieldFunc(false)}

    
    </div>

  );
}

export default NavBar;
