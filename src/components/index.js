import React from 'react';
// import NavBar from './NavBar';
// import Footer from './Footer';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

const Index = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='menu' element=<Menu /> />
            </Route>
        </Routes>
    </div>
  )
}

export default Index;
