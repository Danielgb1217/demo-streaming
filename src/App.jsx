import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Series from './components/pages/Series'
import Movies from './components/pages/Movies'

function App() {

  const [isHome, setIsHome] = useState(true);
  const [titleHeader, setTitleHeader] = useState("Titles");
  return (
    <>
      <BrowserRouter>
        <Header title={titleHeader} />
        {isHome && (
          <nav className='navRouter'>
            <div className='navRouterLink'>
              <Link to={'/series'}><Home title={'Series'} setIsHome={setIsHome} setTitleHeader={setTitleHeader} /></Link>
              <Link to={'/movies'}><Home title={'Movies'} setIsHome={setIsHome} setTitleHeader={setTitleHeader} /></Link>
            </div>
          </nav>

        )}
        <Routes>
          <Route path='/series' element={<Series />} />
          <Route path='/movies' element={<Movies />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
