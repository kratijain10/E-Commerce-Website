// hero.jsx

import React from 'react';
import './Hero.css'; // Make sure the CSS file path is correct
import hand_icon from '../assets/hand_icon.png'; // Adjust path based on your project structure
import arrow_icon from '../assets/arrow.png'; // Adjust path based on your project structure
import hero_image from '../assets/hero_image.png'; // Adjust path based on your project structure

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div className='hero-hand-icon'>
          <p>new</p>
          <img src={hand_icon} alt='' />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className='hero-latest-btn'>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt='' />
        </div>
      </div>
      <div className='hero-right'>
        <img src={hero_image} alt='' />
      </div>
    </div>
  );
};

export default Hero;
