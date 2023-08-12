
import './App.css';
import React from 'react';
import Categories from './components/Categories';
import RecipeCard from './components/RecipeCard';
import Favorites from './components/Favorites';


import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
  

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Categories' element={<Categories />} />
        <Route path='/RecipeCard' element={<RecipeCard />} />
        <Route path='/Favorites' element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;