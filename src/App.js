import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MainCarousel from './components/MainCarousel';
import ProductContainer from './components/ProductContainer';

function App() {
  return (
    <div className="App">
      
        <TopBar />
        <MainCarousel /><br /><br />
        <ProductContainer />

    </div>
  );
}

export default App;
