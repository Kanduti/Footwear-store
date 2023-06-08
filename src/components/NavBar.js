import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LowcostLogo from "../assets/lowcost_logo.png"
/*GLUPO JE DA IMAS POSEBAN ROUT ZA SVAKU KATEGORIJU JER JE CE PAGE BITI ISTI JEDINA RAZLIKA CE BITI ITEMI*/ 
//DAKLE ZA MENU CLICK RENDERUJES KOMPONENTU SA PARAMATERIMA ZAVISNO OD KATEGORIJA
//HOME BUTTON?
/* Expandovane kategorije izizskuju posebnu kostimizaciju*/

/*NEMA POTREBE ZA TIM LINKOVIMA BITNI SU SAMO PARAMETRI ZA CONTROLER*/ 

const MutualCategs = ({}) => {
//dakle mozda i nije lose sto si imao likext ovde ne znam uopste kako cu kondiciono da izrenderujem odabrane kategorije.
//cipele, patike, sandale, cizme, papuce

  return(
    <>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to="/inventory">
   Cipele
  </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to="/inventory">
  Patike
  </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to="/inventory">
Sandale
  </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to="/inventory">
  Čizme
  </NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-links"  exact to="/inventory">
  Papuče
  </NavLink>
    </li>
         </>
  )
}





function NavBar() {
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
            <div >
          <img src={LowcostLogo} alt="Lowcost luxe" style={{height:80}}></img>
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
           <MutualCategs />
            </div>
            <div className="dropdown">
            <MutualCategs/>
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
           <MutualCategs/>
            </div>

            <div className="dropdown">
            <MutualCategs/>
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
                Muškarci
              </NavLink>
            </li>
            <div style={{display: expMan ? "block":"none"}}>
           <MutualCategs/>
            </div>

            <div className="dropdown">
            <MutualCategs/>
            </div>
            </div>

          </ul>
   <div className="flex-right">
   {mediaFunc(true)}
          <div>
            <i className="fa" onClick={toggleShowInp}>&#xf002;</i>
          </div>
          <div >
          <i className="fa fa-shopping-cart" ></i>
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
