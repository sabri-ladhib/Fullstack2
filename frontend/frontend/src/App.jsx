
import { useState } from 'react'
import './App.css'
import HeaderComponent from './component/HeaderComponent'
import ListCarsComponent from './component/ListCarsComponent'
import FooterComponent from './component/FooterComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CarsComponent from './component/CarsComponent'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
     <Routes>
      
      <Route path='/' element = {<ListCarsComponent/>}></Route>
      
      <Route path='/cars' element = {<ListCarsComponent/>}></Route>

      <Route path='/add-car' element = {<CarsComponent/>}></Route>

      <Route path='/edit-car/:id' element = {<CarsComponent/>}></Route>
     </Routes>
    <FooterComponent/>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
