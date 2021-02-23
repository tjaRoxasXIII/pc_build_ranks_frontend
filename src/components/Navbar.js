import React from 'react';


 function Navbar() {
   
   return (
       <div className="nav">
        <div className="nav-links-left">
          <ul>
            <li>Home</li>
          </ul>
        </div>
        <div className="hamburger">
          <span />
          <span />
          <span />
        </div>
        <div className="nav-links-right">
          <li>Register</li>
          <li>Login</li>

        </div>
        <div className="nav-menu">
          <ul>
            <li>Profile</li>
          </ul>

        </div>
       </div>
       
   );
 };

export default Navbar;