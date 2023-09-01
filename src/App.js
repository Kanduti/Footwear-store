import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Inventory } from "./components/Pages/Inventory";
import Favorites from './components/Pages/Favorites'
import {useState} from 'react'
import Basket from './components/Basket'


function App() {


  return (
    <>
      <Router>
        <NavBar />
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket  />}></Route>
            <Route path="/favorites" element={<Favorites/>}></Route>
            <Route path="/:id" element={<Inventory path={''} />} ></Route>
            <Route path="/inventory" >
              <Route path="women"> 
              <Route path="patike" element={<Inventory path={'/women/patike'} />}/>
                <Route path="cipele"  element={<Inventory path={'/women/cipele'} />}></Route>
                <Route path="papuce" element={<Inventory path={'/women/papuce'} />}></Route>
                <Route path="sandale"element={<Inventory path={'/women/sandale'} />}></Route>
                <Route path="cizme"element={<Inventory path={'/women/cizme'} />}></Route>
                <Route path="stikle"element={<Inventory path={'/women/stikle'} />}></Route>
              </Route>
              <Route path="man"> 
              <Route path="patike" element={<Inventory path={'/man/patike'} />}/>
  <Route path="cipele"  element={<Inventory path={'/man/cipele'} />}></Route>
  <Route path="papuce" element={<Inventory path={'/man/papuce'} />}></Route>
  <Route path="sandale"element={<Inventory path={'/man/sandale'} />}></Route>
  <Route path="cizme"element={<Inventory path={'/man/cizme'} />}></Route>
              </Route>
              <Route path="kids"> 
           
  <Route path="patike" element={<Inventory path={'/kids/patike'} />}/>
  <Route path="cipele"  element={<Inventory path={'/kids/cipele'} />}></Route>
  <Route path="papuce" element={<Inventory path={'/kids/papuce'}/>}></Route>
  <Route path="sandale"element={<Inventory path={'/kids/sandale'}/>}></Route>
  <Route path="cizme"element={<Inventory path={'/kids/cizme'}/>}></Route>
              </Route>
              <Route path="sale"> 
              <Route path="patike" element={<Inventory path={'/sale/patike'}/>}/>
  <Route path="cipele"  element={<Inventory path={'/sale/cipele'}/>}></Route>
  <Route path="papuce" element={<Inventory path={'/sale/papuce'}/>}></Route>
  <Route path="sandale"element={<Inventory path={'/sale/sandale'}/>}></Route>
  <Route path="cizme"element={<Inventory path={'/sale/cizme'}/>}></Route>
              </Route>
            </Route>
           
          </Routes>
     
      </Router>
  </>
  );
}

export default App;
