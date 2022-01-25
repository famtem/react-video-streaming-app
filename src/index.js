import React from 'react';
import ReactDOM from 'react-dom';
import { MainContainer } from './Components/MainContainer/MainContainer';
import { Stream } from './Components/Stream/Stream';
import { GlobalStyle } from './Globalstyle';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(
  
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainContainer/>} />
      <Route path="stream" element={<Stream />} />
      <Route path="download" element={<MainContainer />} />
    </Routes>
  </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);


