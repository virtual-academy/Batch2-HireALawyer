import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom'
import design from "../../assets/imgs/design.jpg"
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineExpandMore } from "react-icons/md";


const Header = () => {
  return (
    <>
      <div className="navbar-container">
        <div>
        <img src={design} className="navbar-logo" alt="logo" />            
        </div>
        <div >
          <input type='text' className='navbar-search' placeholder='Search for any services...' />
          <button className='navbar-search-icon' type='submit'><IoSearchOutline /></button>
        </div>
        <div className='navbar-nav-line'>
          <Link className='navbar-nav' to='/Home'>Home</Link>
          <Link className='navbar-nav' to='/Profile'>Profile</Link>
          <Link className='navbar-nav' to='/LawsRegs'>Laws & Regs</Link>
          <Link className='navbar-nav' to='/ResearchtheLaw'>Find A Lawyer <MdOutlineExpandMore /></Link>
          <button className='navbar-log' type='submit'> LOG IN</button>
        </div>
      </div>
    </>
    );
};

export default Header;