import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Signup from './Components/Signup';
import Menu from './Components/Menu';

function App() {
  const[page,setPage] = useState("home")
  return (
    <div>
     <Navbar setPage={setPage} />
        {page === "home" && <Hero setPage={setPage} />}
        {page === "signup" && <Signup />}
      {page === "menu" && <Menu />}
    </div>
  );
}

export default App