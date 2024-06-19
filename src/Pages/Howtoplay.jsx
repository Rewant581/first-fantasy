import React from 'react';
import './Howtoplay.css';

const HowToPlay = () => {
  return (
    <section className="how-to-play-section">
      <h2>WHAT MAKES <span className="highlight">IPL11</span> SPECIAL?</h2>
      <p className="section-description">
        It's simple – we believe in creating an immersive and engaging experience for our users.
        Get ready to enter a world where you are the coach, the manager, and the owner of your own fantasy team.
      </p>
      <div className="cards-container">
        <div className="card">
          <div className="card-content">
            <h3>NOT JUST FOOTBALL</h3>
            <p>
              IPL11 offers a wide range of sports disciplines, including cricket, basketball,
              hockey, golf, and much more.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h3>USER-FRIENDLY INTERFACE</h3>
            <p>
              You don't have to spend a lot of time learning complex rules or features of the game – everything is simple and accessible even to beginners.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h3>PLAY ON ANY DEVICE</h3>
            <p>
              We provide access to the game through our intuitive web platform and mobile application.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h3>CAMARADERIE</h3>
            <p>
              Connect with sports enthusiasts who share your passion and engage in friendly banter and healthy competition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToPlay;
