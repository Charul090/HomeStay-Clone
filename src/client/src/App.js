import React from 'react';
import './App.css';
import TransparentNavBar from "./components/TransparentNavBar/TransparentNavBar.jsx"
import HomeHero from './components/HomeHero/HomeHero';
import HeroCard from './components/HeroCard.jsx/HeroCard';
import LoginModal from './components/LoginModal/LoginModal';


function App() {
  return (
    <div className="App">
      <TransparentNavBar />
      <LoginModal />
      <HeroCard />
      <HomeHero />
    </div>
  );
}

export default App;
