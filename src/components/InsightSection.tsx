import React from "react";
import "../Styles/InsightsSection.css";
import insightsPhoto from "../assets/insights-photo.jpg";

const InsightsSection = () => (
  <section className="insights-section">
    <div className="insights-content">
      <span className="insights-label">Inspire</span>
      <h2 className="insights-title">Discover Our Latest Insights and Stories</h2>
      <p className="insights-description">
        Stay updated with our featured blog post that dives deep into the heart of our mission. Explore stories that inspire and empower our community.
      </p>
      <div className="insights-columns">
        <div>
          <div className="insights-column-title">Featured Post</div>
          <div className="insights-column-desc">Read about how we are making a difference in the lives of many.</div>
        </div>
        <div>
          <div className="insights-column-title">Join Us</div>
          <div className="insights-column-desc">Engage with our content and become part of our growing community.</div>
        </div>
      </div>
      <div className="insights-actions">
        <button className="insights-read-btn">Read</button>
        <button className="insights-share-btn">
          Share <span className="arrow">&rarr;</span>
        </button>
      </div>
    </div>
    <div className="insights-image">
      <img src={insightsPhoto} alt="People collaborating" />
    </div>
  </section>
);

export default InsightsSection;
