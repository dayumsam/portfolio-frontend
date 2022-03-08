import { useContext } from "react";

import Cursor from './components/Cursor'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Page from './pages/Page/Page'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { MouseContext } from "./context/mouse-context"; 

function App() {

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  return (
    <BrowserRouter>
      <Cursor/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/about" element={<About/>} />  
        <Route path="/projects" element={<Projects/>} /> 
        <Route path="/work/:id" element={<Page/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
