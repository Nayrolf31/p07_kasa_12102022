import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createRoot } from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import data from './data.json';

import './styles/index.css';

import Home from './pages/Home/Home.js';
import Nav from './components/Navigation/Nav';
import About from './pages/About/About';
import Single from './pages/Single/Single';
import Error from './pages/404/404';
import Footer from './components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/single/:id" element={<Single data={data} />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
);
              
reportWebVitals();

