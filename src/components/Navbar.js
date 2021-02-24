import React, { useState } from 'react';
import styled from 'styled-components'


 function Navbar() {
   const [isOpen, setIsOpen] = useState (false)
   
   return (
       <div className="nav">
        <div className="nav-link-left">
          <i className="fas fa-keyboard logo"></i>
          <i className="fas fa-mouse-pointer"></i>
          <a href="#" className="home-logo">Home</a>
        </div>
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </div>
        <Menu isOpen={isOpen }>
          <a href="#" className="menu-link">Register</a>
          <a href="#" className="menu-link">Login</a>
          <a href="#" className="menu-link">Profile</a>
          <a href="#" className="menu-link">PC builds</a>
        </Menu>
       </div>
       
   );
 };

 const Menu = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 position: relative;

@media (max-width: 768px) {
   overflow: hidden;
   flex-direction: column;
   width: 100%;
   max-height: ${({isOpen}) => (isOpen ? "300px" : "0px")};
   transition: max-height: 0.3 ease-in;
   background-color: #618992;
}
 `

export default Navbar;