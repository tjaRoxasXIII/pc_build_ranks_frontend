import React from 'react';
import Navbar from '../components/Navbar'
import ComputerListContainer from '../components/ComputersComponents/ComputerListContainer';

 function Home() {
   return (
     <div>
        <Navbar />
        <ComputerListContainer />
      </div>
   );
 };

export default Home;