import React from 'react';
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import {Link}  from 'react-router-dom'
import { IoHeartOutline } from 'react-icons/io5';

import SearchBox from '../components/SearchBox';
import AddFavourite from '../components/AddFavourites';
import MovieList from '../components/MovieList';

 

const Header = () => {
      const [moviess, setMovies] = useState([]);
      const [searchValue, setSearchValue] = useState('');
      const [searchRes, setSearchRes] = useState([]);
    
    return (
        <>
        <div className='mt-0 p-3 flex justify-between items-baseline z-10'>
                <h1 className='px-10 font-extrabold text-xl  text-white'>TeamTen </h1>
            <div className=' mt-0 flex-1 '>
                <div className='mt-0 px-10'>
                  <SearchBox set={setSearchRes}/>
                </div> 
            </div>

            <ul className='flex justify-between text-white'>
                   <li className='px-10 font-bold hover:text-gray-300' >
                       <NavLink to='/' > Home</NavLink>
                 </li>

                 <li className='px-10 font-bold hover:text-gray-300' >
                       <NavLink to='/Loginpage' >Signin</NavLink>
                 </li>

                 <li className='px-10 font-bold hover:text-gray-300' >
                       <NavLink to='/Signout' >About Us</NavLink>
                 </li>

                 <li className='px-10 font-bold hover:text-gray-300' >
                       <NavLink to='/Fav' > <IoHeartOutline/>  </NavLink>
                 </li>
            </ul>
        </div>

      <div className='row'>
            
      </div>
      </>
    )
}
export default Header;