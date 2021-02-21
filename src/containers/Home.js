import React from 'react';
import styled from 'styled-components';


 const Home = () => {
   return (
     <Navbar>
       <h1>This is a test</h1>
     </Navbar>
   );
 };


const Navbar = styled.div`
  margin-top: -3.35rem;
  padding: 1rem 0;
  font-size: 18px;
  color: black;
  font-weight: 400;
`

export default Home;