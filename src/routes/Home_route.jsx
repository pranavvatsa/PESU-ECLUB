import React from 'react'
import Footer from '../components/Footer';
import Home from '../components/Home'
import Navbar from '../components/Navbar'


const Home_route = () => {
  return (
    <div>
        <Navbar />
        <Home />
        <Footer />
    </div>
  );
};

export default Home_route