import React from 'react';
import './style.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-heading">Hey there, I'm MTK!</h1>
        <h2 className="hero-subheading">Aspiring Computer Scientist & Problem Solver</h2>
        <p className="hero-paragraph">
          Hello! I'm mtklarbi, a passionate learner from Morocco. I'm on a journey to enhance my coding and mathematical skills, with the ultimate goal of pursuing a degree in Computer Science. My interests include:
        </p>
        <ul className="hero-list">
          <li>Algorithmic problem-solving</li>
          <li>Web development</li>
          <li>Data structures</li>
          <li>Machine learning fundamentals</li>
        </ul>
        <div className="hero-cta">
          <button className="hero-button learn-more">Explore My Projects</button>
          <button className="hero-button contact-me">Get in Touch</button>
        </div>
      </div>
      <div className="hero-image-container">
        <img
          src="./src/assets/images/your-image.jpg"
          alt="MTK - Aspiring Computer Scientist"
          className="hero-image"
        />
        <div className="hero-social-links">
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Twitter</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
