import './App.css';
import { Route, Routes } from 'react-router-dom';
import DogBreedList from './DogBreedList';
import DogDescription from './DogDescription';
import Header from './Header';
import React, { useState } from 'react';
import { breed } from './DogBreedJson';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<DogBreedList />} />
        <Route path='/description' element={<DogDescription />} />
      </Routes>
    </div>
  );
}

export default App;
