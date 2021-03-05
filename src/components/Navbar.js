import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';


function Navbar() {
  const [isOpen, setIsOpen] = useState (false)
  const [input, setInput] = useState('')
  let history = useHistory()
  
  const search = (e) => {
    const results = {
      cpus: [],
      gpus: [],
      computers: []
    }

    e.preventDefault()

    Promise.all([
      fetch('http://localhost:3000/cpus'),
      fetch('http://localhost:3000/gpus'),
      fetch('http://localhost:3000/computers')
    ]).then(function (responses) {
      // Get a JSON object from each of the responses
      return Promise.all(responses.map(function (response) {
        return response.json();
      }));
    }).then(data => {
      // Iterate through each dataset returned and filter the results
      data[0].filter(cpu => {
        if (cpu.brand.toLowerCase().includes(input.toLowerCase())) {
          results["cpus"].push(cpu)
        }
      })

      data[1].filter(gpu => {
        if (gpu.brand.toLowerCase().includes(input.toLowerCase())) {
          results["gpus"].push(gpu)
        }
      })

      data[2].filter(computer => {
        if ((computer.name.toLowerCase().includes(input.toLowerCase())) || (computer.Cpu.brand.toLowerCase().includes(input.toLowerCase())) || (computer.Gpu.brand.toLowerCase().includes(input.toLowerCase()))) {
          results["computers"].push(computer)
        }
      })

      console.log(results)
      history.push({
        pathname: '/results',
        search: `?query=${input}`,
        state: { results }
      })
    })
    .catch(function (error) {
      // if there's an error, log it
      console.log(error);
    });
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