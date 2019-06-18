import React from 'react';
import FilmBox from './containers/FilmBox';
import './App.css';

function App() {
  return (
    <div id="FilmBox">
    <FilmBox />
    <div id="MoreFilmsContainer">
    <a href="www.calumcannon.com"> More film releases </a>
    </div>
    </div>
  );
}

export default App;
