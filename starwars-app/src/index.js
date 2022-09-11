import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './assets/styles/index.css';
import App from './App';
import { CharactersProvider } from './providers/characters';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CharactersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CharactersProvider>
  </React.StrictMode>
);
