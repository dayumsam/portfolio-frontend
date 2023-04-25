import { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion"
import Anime from 'react-anime';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

import Cursor from './components/Cursor'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Page from './pages/Page/Page'
import Error from "./pages/Error/Error";

import PsychVideo from "./pages/psych-video/PsychVideo";

import {
  BrowserRouter,
  Routes,
  Route,
  Redirect
} from "react-router-dom";

import { MouseContext } from "./context/mouse-context"; 

function App() {
  useEffect(() => console.log(true), []);

  return (
    <BrowserRouter>

        {/* <div className="loading">
          <div className="wrapper">
            <Anime
                translateY =  {[
                  { value: 250, duration: 0},
                  { value: 0, duration: 1000, easing: 'easeOutElastic'}
                ]}

                scale = {[
                  { value: 1, delay: 500},
                  { value: 20, duration: 500, easing: 'linear'}
                ]}
            >
              <h1>
                dayumsam.
              </h1>
            </Anime>
          </div>
        </div> */}

      {isBrowser ? <Cursor/> : <></> }
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/about" element={<About/>} />  
        <Route path="/projects" element={<Projects/>} /> 
        <Route path="/psych-video" element={<PsychVideo/>} /> 
        <Route path="/work/:id" element={<Page/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
