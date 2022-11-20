import React, { useState } from 'react';
import validator from 'validator';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import View from './view';
import Login from './login';
import ListView from './list-view';

function App() 
{
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/view" element={<View/>}/>
        <Route exact path="/listview" element={<ListView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
