import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './app';
import 'semantic-ui-css/semantic.min.css';


render(
  (
    <App />
  ), document.getElementById('root')
);
