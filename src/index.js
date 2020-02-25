import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from "react-router-dom"; 

//we use Router as our base component that will wrap our entire app. We'll do this by wrapping
//our <App /> component that we pass to ReactDOM.render

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
