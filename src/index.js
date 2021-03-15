import React, {
  useState, useEffect
} from 'react';
import _ from 'underscore';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import Juego from "./Components/Juego";

const protocol = window.location.protocol;
const location = window.location.hostname;

if (location.includes('localhost')) {
  window.apiDomain = protocol + '//localhost:3030';
  window.publicDomain = protocol +'//localhost:3000';
} else if (location.includes('dev.herokuapp')) {
  window.apiDomain = protocol + '//gato-backend-dev.herokuapp.com';
  window.publicDomain = protocol + '//gato-react-heroku-dev.herokuapp.com';
} else {
  window.apiDomain = protocol + '//gato-backend.herokuapp.com';
  window.publicDomain = protocol + '//gato-react-heroku.herokuapp.com';
}

window.axios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  baseURL: window.apiDomain
});

// ========================================

ReactDOM.render(
  <Juego />,
  document.getElementById('root')
);
