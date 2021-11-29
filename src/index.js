import React from 'react';
import ReactDOM from 'react-dom';
import ChampionInfo from './components/ChampionInfo';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Fullview from './components/Fullview';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<Welcome/>}/>
      <Route path='/champions' element={<App/>}/>
      <Route path='/champions/:champ' element={<ChampionInfo />}/>
      <Route path='/view/:champ/:id' element={<Fullview/>} />
    </Routes>
  </BrowserRouter>
  , document.getElementById('root')
);
