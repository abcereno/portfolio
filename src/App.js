import React from "react";
import Home from "./Links/Home/Home";
import About from "./Links/About/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import Navibar from "./Common/Navibar/Navibar";
import Footer from "./Common/Footer/Footer";
import Affiliate from "./Links/Affiliates/Affiliate";
function App() {
  return (
      <BrowserRouter>
      <Navibar/>
      <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/affiliates' element={<Affiliate />} />
          </Routes>
      </Container>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
