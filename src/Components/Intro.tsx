import React from 'react';
import WalkingImage from '../Images/Background image.jpg'

const Intro: React.FC = () => {
  return (
    <div>
    <p className='Creative'>The <span className='highlight-yellow'>Creative</span> VC For The Creator Economy</p>
    <p className='Creative-txt'>Popstar Ventures is launching a $50M Pre-seed
                                and Seed early stage venture fund in the US to 
                                invest in Creator Economy startups, leveraging 
                                our popstar network of 100M+ followers.</p>
    <img src={WalkingImage} alt="Popstar" className='WalkingBackground' />
    <button className='ContactBtn'>Contact US</button>
    </div>
  );
};

export default Intro;