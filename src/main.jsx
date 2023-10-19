import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App.jsx';
import './assets/styles/main.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <Router>
    <App />
  </Router>,
);
