import React from 'react';
import{Link} from "react-router-dom"

//import styles
import "../../../styles/components/navbar/navbar.css";

//import images
import companyLogo from "../../../assets/images/components/Designity-Registered-Mark-Color-Web.png";
function Navbar() {
  return (
    <nav className='nav'>
        <img className= "nav-logo" src={companyLogo} alt="company designity logo" />
       <ul className='nav-list'>
        <Link className='nav_list_links' to="#">Projects</Link>
        <Link className='nav_list_links' to="#">Testimonials</Link>
        <Link className='nav_list_links' to="#">Contract</Link>
       </ul>
    </nav>
  )
}

export default Navbar;