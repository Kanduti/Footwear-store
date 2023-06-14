import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Inventory } from "./components/Pages/Inventory";

import {useState} from 'react'
import Basket from './components/Basket'
//If I am to avoid redux and all that jazz, 
//I am to decalre here bunch of state hooks and pass them to inventory for view and navbar for fetch setting shit
//still seems easier then redux
function App() {
  /*const match = useMatch('/inventory/:id')  
  const obuca = match ?  obucaService
  .get(match.params.id).then(response) : null*/
const [basket, setBasket] = useState([])

  return (
    <>
      <Router>
        <NavBar basket={basket}/>
      
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket  setBasket={setBasket} basket={basket}/>}></Route>
            <Route path="/inventory" >
              <Route path="women"> 
              <Route path="patike" element={<Inventory path={'/women/patike'} func={setBasket} basket={basket}/>}/>
                <Route path="cipele"  element={<Inventory path={'/women/cipele'} func={setBasket} basket={basket}/>}></Route>
                <Route path="papuce" element={<Inventory path={'/women/papuce'} func={setBasket} basket={basket}/>}></Route>
                <Route path="sandale"element={<Inventory path={'/women/sandale'} func={setBasket} basket={basket}/>}></Route>
                <Route path="cizme"element={<Inventory path={'/women/cizme'} func={setBasket} basket={basket}/>}></Route>
                <Route path="stikle"element={<Inventory path={'/women/stikle'} func={setBasket} basket={basket}/>}></Route>
              </Route>
              <Route path="man"> 
              <Route path="patike" element={<Inventory path={'/man/patike'} func={setBasket} basket={basket}/>}/>
  <Route path="cipele"  element={<Inventory path={'/man/cipele'} func={setBasket} basket={basket}/>}></Route>
  <Route path="papuce" element={<Inventory path={'/man/papuce'} func={setBasket} basket={basket}/>}></Route>
  <Route path="sandale"element={<Inventory path={'/man/sandale'} func={setBasket} basket={basket}/>}></Route>
  <Route path="cizme"element={<Inventory path={'/man/cizme'} func={setBasket} basket={basket}/>}></Route>
              </Route>
              <Route path="kids"> 
           
  <Route path="patike" element={<Inventory path={'/kids/patike'} func={setBasket} basket={basket}/>}/>
  <Route path="cipele"  element={<Inventory path={'/kids/cipele'} func={setBasket} basket={basket}/>}></Route>
  <Route path="papuce" element={<Inventory path={'/kids/papuce'}func={setBasket} basket={basket}/>}></Route>
  <Route path="sandale"element={<Inventory path={'/kids/sandale'}func={setBasket} basket={basket}/>}></Route>
  <Route path="cizme"element={<Inventory path={'/kids/cizme'}func={setBasket} basket={basket}/>}></Route>
              </Route>
              <Route path="sale"> 
              <Route path="patike" element={<Inventory path={'/sale/patike'}func={setBasket} basket={basket}/>}/>
  <Route path="cipele"  element={<Inventory path={'/sale/cipele'}func={setBasket} basket={basket}/>}></Route>
  <Route path="papuce" element={<Inventory path={'/sale/papuce'}func={setBasket} basket={basket}/>}></Route>
  <Route path="sandale"element={<Inventory path={'/sale/sandale'}func={setBasket} basket={basket}/>}></Route>
  <Route path="cizme"element={<Inventory path={'/sale/cizme'}func={setBasket} basket={basket}/>}></Route>
              </Route>
            </Route>
           
          </Routes>
        
      </Router>
  </>
  );
}

export default App;
