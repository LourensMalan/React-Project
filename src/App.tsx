import React, {useEffect} from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Stars from './Components/Stars';
import Analytics from './Components/Analytics';
import Team from './Components/Team';
import Footer from './Components/Footer';
import './App.css';

const App: React.FC = () => {


  return (
    <div className='body-container'>
      <Header />
      <Intro />
      <Stars />
      <Analytics />
      <Team />
      <Footer />
    </div>
  );
};

export default App;
