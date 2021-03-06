import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import Search from './Search.js';
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser}/>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink id='createAccountButton' to="/signup" >Create account</NavLink>
      </>
    );
  }

  return (
    <ul className="navbar_container">
      <li>
        <NavLink exact to="/"><img className='logo-image nav-left'  src='/logo.png' alt='Home'/></NavLink>
      </ li>
      <li>
        <Search />
      </li>
      <li className='nav-right'>
        {isLoaded && sessionLinks}
      </li>    
    </ul>
  );
}
       
       

        
        
     

export default Navigation;