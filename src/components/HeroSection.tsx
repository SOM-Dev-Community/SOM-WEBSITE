import React from 'react';
import '../Styles/HeroSection.css';

const HeroSection = () => (
  <main>
  <section className="hero-section">
    <div className="hero-content" style={{marginLeft: '20px'}}>
      <h1 style={{fontSize: '47px'}}>Discover Your Path <br/> with SOM Today!</h1>
      <p style={{fontWeight: '100'}}>
        Join us in exploring a world of inspiration and growth. Our community <br/>is dedicated to empowering individuals through faith-based resources<br/> and events.
      </p>
      <div className="hero-buttons">
        <button className="join-btn">Join</button>
        <button className="learn-btn">Learn</button>
      </div>
    </div>
    {/* <div className="hero-image">
      <img src="src/assets/DMA.png" alt="test" />
    </div> */}
  </section>
  <section>
  </section>
  </main>
);

export default HeroSection;
