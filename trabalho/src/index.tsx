import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import Navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import Register from './Register';

ReactDOM.render(
        <div>
            <div className = 'landingBody'>
                <Navbar/>
                <Register/>
            </div>
        </div>,
    document.getElementById('root')
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
