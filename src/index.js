import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta name="description" content="get the best mediterreanean foods in europe"/>
    <meta name="og:title" content="Little Lemon Restautrant"/>
    <meta name="og:description" content="We are a family owned mediterreanean restaurant, focused on traditional recipes served with a modren twist."/>
    <meta name="og:image" content="little-lemon.jpg"/>
    <Router>
    <App />
    </Router>
    <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
