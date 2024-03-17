import { useState } from 'react'

//react router dom
import{
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Outlet,
  Route
}from 'react-router-dom'

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import SignOut from './pages/Signout';
import {Loginpage} from './pages/Loginpage';
import {Details} from './pages/Details';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
       <Route path='/' element={<Root />} >
        <Route index element={<Home />} />
        <Route path="/Fav" element = {<Favorites/>} />
        <Route path="/Loginpage" element = {<Loginpage/>} />
        <Route path="/Signout" element = {<SignOut/>} />
        <Route path="/Details/:index" element = {<Details/>} />
      </Route>
    )
  )
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
export default App;

  const Root=()=>{
    return(
      <>
      <div><Header/></div> 
      <div><Outlet/></div>
      <div><Footer/></div>
      </>
    )
  }


