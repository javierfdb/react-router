import {Routes, Route} from 'react-router-dom'
import Container from '@mui/material/Container';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

// DEPLOY --> #
// REPSITORIO --> https://github.com/javierfdb/react-router

function App() {

  return (
   <>
   <Header/>
    <Container maxWidth="lg" className="cont-main">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/QuienesSomos' element={<QuienesSomos/>}/>
        <Route path='/Contacto' element={<Contacto/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Container>
    <Footer/>
   </>
  )
}

export default App
