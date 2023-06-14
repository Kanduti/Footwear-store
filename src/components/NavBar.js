import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LowcostLogo from "../assets/lowcost_logo.png"
/*GLUPO JE DA IMAS POSEBAN ROUT ZA SVAKU KATEGORIJU JER JE CE PAGE BITI ISTI JEDINA RAZLIKA CE BITI ITEMI*/ 
//DAKLE ZA MENU CLICK RENDERUJES KOMPONENTU SA PARAMATERIMA ZAVISNO OD KATEGORIJA
//HOME BUTTON?
/* Expandovane kategorije izizskuju posebnu kostimizaciju*/

/*NEMA POTREBE ZA TIM LINKOVIMA BITNI SU SAMO PARAMETRI ZA CONTROLER*/ 

const MutualCategs = ({spol, setExp, setClick}) => {
//dakle mozda i nije lose sto si imao likext ovde ne znam uopste kako cu kondiciono da izrenderujem odabrane kategorije.
//cipele, patike, sandale, cizme, papuce
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





function NavBar({basket}) {
  const [click, setClick] = useState(false);
  const [showInp, setShowInp] = useState(false)
  const [search, setSearch] = useState('')
  const [expMan, setExpMan] = useState(false)
  const [expWomen, setExpWomen] = useState(false)
  const [expKids, setExpKids] = useState(false)
  const [expSale, setExpSale] = useState(false)
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
  function searchItems(e)
  { e.preventDefault();
     setSearch(e.target.value);
     }
     var midija = window.matchMedia("(max-width: 960px)")
     function mediaFunc (inFlex) {
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
{  return ( <div> <input type='search' name="q" onChange={searchItems} value={search} id="mobileSearch" className={showInp?"fas fa-times": "Nestani"} placeholder='  &#xf002; Search...'></input>  </div>)
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
            {/*MOGAO SI DA UBACIS U NEKI KONTEJNER PA DA SKURBLAS STVAR AL MISLIM DA NEMA POTREBE*/}
            <div style={{color:'chocolate', marginLeft:7}}>
             <b> Gesix <br></br>Obuća</b>
                <i style={{fontSize:24, color:'chocolate', position:'absolute', top:22}} class='fas'>&#xf54b;</i>
             
                
          {/*<img src={LowcostLogo} alt="Lowcost luxe" style={{height:80}}></img>*/}
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
   {mediaFunc(true)}
          <div>
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
                   <div style={{fontSize:16, color:'black' ,position: 'relative', left: -4, bottom:12}}>{basket.length}</div>
              </NavLink>
              </div>
          
          <div onClick={toggleMenu} id="x" >
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
    </div>  
            
        </div>
        
      </nav>
      {mediaFunc(false)}
     
      
       
     
    </div>

  );
}

export default NavBar;
