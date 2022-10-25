import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Link, Switch, Routes, Route} from 'react-router-dom';
//import { Route } from 'react-router';

import data from './data.json';

import Home from './pages/Home/Home.js';
import Nav from './components/Navigation/Nav';
import About from './pages/About/About';
import Single from './pages/Single/Single';
import Error from './pages/404/404';
import Footer from './components/Footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
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
    </React.StrictMode>
);
              

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

