import React from 'react';
import './Hero.css';
import profile from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profile} alt="My Profile" className="hero-img" />
        <h1 className="hero-name">Nalan R.K</h1>
        <p className="hero-title">Aspiring Full Stack Developer 💻🚀</p>
      </div>
    </section>
  );
};

export default Hero;
