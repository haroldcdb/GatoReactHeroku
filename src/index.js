import React, {
  useState, useEffect
} from 'react';
import _ from 'underscore';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './index.css';
import Juego from "./Components/Juego";

const apiUrl = (url) => {
  if (_.isUndefined(url) || _.isNull(url)) {
    return '';
  }
  if (url.indexOf('https://') >= 0 || url.indexOf('http://') >= 0) {
    return url;
  }
  if (url.indexOf('/') !== 0) {
    url = '/' + url;
  }

  return 'https://media.4thewords.com/s3' + url;
}

const protocol = window.location.protocol;
const location = window.location.hostname;

console.log(protocol);
console.log(location);

if (location.includes('localhost')) {
  window.apiDomain = protocol + '//localhost:3030';
  window.publicDomain = protocol +'//localhost:3000';
} else if (location.includes('develop')) {
  window.apiDomain = protocol + '//gato-backend-dev.herokuapp.com';
  window.publicDomain = protocol + '//gato-react-heroku-dev.herokuapp.com';
} else {
  window.apiDomain = 'https://gato-backend.herokuapp.com';
  window.publicDomain = protocol + '//gato-react-heroku.herokuapp.com';
}

console.log(window.apiDomain);
console.log(window.publicDomain);

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
