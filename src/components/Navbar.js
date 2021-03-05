import React, { useState } from 'react';
import styled from 'styled-components';


 function Navbar() {
  const [isOpen, setIsOpen] = useState (false)
  const [input, setInput] = useState('')
  const [results, setResults] = useState('')
   
  const search = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/cpus")
      .then(resp => resp.json())
      .then(data => {
        data.filter(cpu => {
          if (cpu.brand.toLowerCase().includes(input.toLowerCase())) {
            console.log(cpu)
          }
        })
      })

    fetch("http://localhost:3000/gpus")
    .then(resp => resp.json())
    .then(data => {
      data.filter(gpu => {
        if (gpu.brand.toLowerCase().includes(input.toLowerCase())) {
          console.log(gpu)
        }
      })
    })

    fetch("http://localhost:3000/computers")
    .then(resp => resp.json())
    .then(data => {
      data.filter(computer => {
        if ((computer.name.toLowerCase().includes(input.toLowerCase())) || (computer.Cpu.brand.toLowerCase().includes(input.toLowerCase())) || (computer.Gpu.brand.toLowerCase().includes(input.toLowerCase()))) {
          console.log(computer)
        }
      })
    })
  }
    
  return (
      <div className="nav">
      <div className="nav-link-left">
        <i className="fas fa-keyboard logo"></i>
        <i className="fas fa-mouse-pointer"></i>
        <a href="/home" className="home-logo">Home</a>
      </div>
      <form className="d-flex" onSubmit={e => {search(e)}}>
        <input className="form-control me-2 search-bar" type="search" onChange={e => {setInput(e.target.value)}} placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </div>
      <Menu isOpen={isOpen }>
      
        <a href="/signup" className="menu-link">Register</a>
        <a href="/login" className="menu-link">Login</a>
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

@media (max-width: 1410px) {
   overflow: hidden;
   flex-direction: column;
   width: 100%;
   max-height: ${({isOpen}) => (isOpen ? "300px" : "0px")};
   transition: max-height: 0.3 ease-in;
   background-color: #618992;
}
 `

export default Navbar;