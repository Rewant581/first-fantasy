import React, { useState, useEffect } from 'react';
import './Home.css';
// import genPro2 from '../Assets/image/genpro2.png'; // Desktop image
// import mobilepro from '../Assets/image/mobilepro.gif'; // Mobile image
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Ascii11 from '../Assets/image/Ascii11.png';

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  // const handleWhatsAppClick = () => {
  //   window.location.href = 'https://wa.link/magicwingold'; // Replace with your WhatsApp URL
  // };

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setShowPopup(true);
    }

    // Lock scrolling on mobile view
    if (window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    // Clean up function to re-enable scrolling
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleGetAppLink = () => {
    const mobileNumber = document.querySelector('.input-section input').value;
    if (mobileNumber && mobileNumber.startsWith('+91')) {
      alert(`A download link will be sent to ${mobileNumber}`);
    } else {
      alert('Please enter a valid mobile number starting with +91');
    }
  };

  const handleDownloadNow = () => {
    window.location.href = '../../r.apk'; // Replace with your actual download URL
  };

  const closePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem('hasSeenPopup', 'true');
  };

  return (
    <div className="home-container">
      {/* Popup for desktop only */}
      {showPopup && window.innerWidth > 768 && (
        <div className="popup">
          <div className="popup-content">
            <h3>Notice</h3>
            <p>This game is for users 18+ only in India.</p>
            <button className="close-popup-button" onClick={closePopup}>I Understand</button>
          </div>
        </div>
      )}

      <section className="hero-section">
        <div className="hero-content">
          <h1>IPL11 FANTASY - IS THE BEST FANTASY GAME IN INDIA</h1>
          <p className="sub-text">100+ downloads daily</p>
          <div className="download-icon">
            <i className="fa fa-cloud-download" aria-hidden="true"></i>
          </div>
          <p className="description">
            IPL11 FANTASY takes the excitement of real-life sports and combines it with the thrill of strategy and competition.
          </p>
          <div className="input-section">
            <input type="text" placeholder="+91 ENTER YOUR MOBILE NUMBER" />
            <div className="privacy-policy">
              <input type="checkbox" />
              <label>I accept Privacy policy</label>
              <input type="checkbox" />
              <label>I am 18+</label>
            </div>
            <button className="get-app-button" onClick={handleGetAppLink}>GET APP LINK</button>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={Ascii11} alt="Ascii11 App Screenshot" className="hero-image desktop-image" />
          {/* <a href="https://wa.link/magicwingold" target="_blank" rel="noopener noreferrer">
            <img src={mobilepro} alt="Ascii11 App Screenshot" className="hero-image mobile-image" />
          </a> */}
        </div>
      </section>

      {/* Other sections will be hidden on mobile */}
      <section className="about-dfs-section">
        <h2>About IPL11 Fantasy Sports</h2>
        <div className="dfs-details">
          <div className="dfs-text">
            <h3>What is IPL11 Fantasy Sport?</h3>
            <p>IPL11 Fantasy Sports is a quick and exciting way to play fantasy sports. Unlike traditional fantasy leagues that span an entire season, DFS contests last for just one day or one week. Players draft virtual teams of real-life athletes and compete based on their performance in real games.</p>
            
            <h3>Types of Contests</h3>
            <p>Our platform offers a variety of DFS contests, including:</p>
            <ul>
              <li>Head-to-Head: Compete against a single opponent. The player with the higher score wins the prize.</li>
              <li>50/50s and Double-Ups: Finish in the top half of the contest participants to win double your entry fee.</li>
              <li>Tournaments: Compete in larger fields for big prizes. Only the top scorers win, and payouts are often tiered.</li>
              <li>Multipliers: Win multiple times your entry fee if you finish in the top percentage.</li>
              <li>Leagues: Join smaller contests with friends or other users, usually with fewer participants and more predictable outcomes.</li>
              <li>Qualifiers: Win entry into larger, often high-stakes contests by performing well in these preliminary contests.</li>
            </ul>
            <h3>Entry Fees and Prizes</h3>
            <p>Some contests are free, while others require an entry fee. Prizes vary depending on the contest type and entry fee. Check the contest details for more information.</p>
            <h3>Example Gameplay</h3>
            <p>Imagine you join a football DFS contest. You select a squad of players from various teams playing that day, ensuring you stay within the salary cap. As the matches progress, your team accumulates points for goals, assists, clean sheets, and other actions. You can track your progress live and see how you compare to other participants. If your team finishes high enough, you win a share of the prize pool.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose IPL11?</h2>
        <div className="features">
          <div className="feature">
            <i className="fa fa-trophy" aria-hidden="true"></i>
            <h3>Compete & Win</h3>
            <p>Compete with friends and other players to win amazing prizes.</p>
          </div>
          <div className="feature">
            <i className="fa fa-gamepad" aria-hidden="true"></i>
            <h3>Real-time Stats</h3>
            <p>Get real-time statistics and updates on all your players.</p>
          </div>
          <div className="feature">
            <i className="fa fa-shield" aria-hidden="true"></i>
            <h3>Secure & Trusted</h3>
            <p>Your data and transactions are secure with our robust system.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"IPL11 has completely changed the way I enjoy sports. The app is fantastic!"</p>
            <h4>- Rahul</h4>
          </div>
          <div className="testimonial">
            <p>"I love the competition and the thrill of winning prizes. Highly recommend IPL11!"</p>
            <h4>- Priya</h4>
          </div>
        </div>
      </section>

      <section className="call-to-action-section">
        <h2>Join the IPL11 Community Today!</h2>
        <p>Download the app now and start your fantasy sports journey.</p>
        <button className="cta-button download-now-button" onClick={handleDownloadNow}>Download Now</button>
      </section>

      <section className="how-to-play-section">
        <h2 className="section-title">How to Play</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Download the App</h3>
            <p>Get the IPL11 app from the app store and create your account.</p>
          </div>
          <div className="step">
            <h3>Step 2: Create Your Team</h3>
            <p>Select players from upcoming matches and create your fantasy team.</p>
          </div>
          <div className="step">
            <h3>Step 3: Join Contests</h3>
            <p>Enter your team in various contests and compete to win prizes.</p>
          </div>
          <div className="step">
            <h3>Step 4: Follow Live Scores</h3>
            <p>Track your team's performance with live updates and scores.</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs">
          <div className="faq">
            <h3>What is IPL11?</h3>
            <p>IPL11 is a fantasy sports app where you can create your own teams and compete against others to win prizes.</p>
          </div>
          <div className="faq">
            <h3>How do I join a contest?</h3>
            <p>Once you've created your team, navigate to the "Contests" section and choose a contest to join.</p>
          </div>
          <div className="faq">
            <h3>Is there a fee to join contests?</h3>
            <p>Some contests are free to join, while others may require an entry fee. Check the contest details for more information.</p>
          </div>
          <div className="faq">
            <h3>How can I withdraw my winnings?</h3>
            <p>Go to the "Wallet" section of the app and follow the instructions to withdraw your winnings.</p>
          </div>
        </div>
      </section>
      {/* <div className="whatsapp-container" onClick={handleWhatsAppClick}>
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="whatsapp-icon"
        />
        <span className="whatsapp-text">Click here to connect on WhatsApp</span>
      </div> */}
    </div>
  );
};

export default HomePage;
