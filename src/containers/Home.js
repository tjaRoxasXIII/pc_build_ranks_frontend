import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'

 function Home() {
   const PCs = []

  useEffect(() => {
      fetch('http://localhost:3000/computers')
        .then(resp => resp.json())
        .then(data => console.log(data))
  })

   return (
     <div>
        <Navbar />
      </div>
   );
 };

export default Home;