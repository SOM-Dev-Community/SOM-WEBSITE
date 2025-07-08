import React from "react";
import "../Styles/EventCard.css";

type EventCardProps = {
  image: string;
  title: string;
  date: string;
  location: string;
  description: string;
};

const EventCard = ({ image, title, date, location, description }: EventCardProps) => (
  <div className="event-card">
    <img src={image} alt={title} className="event-card-image" />
    <div className="event-card-content">
      <h3 className="event-card-title">{title}</h3>
      <div className="event-card-meta">{date} • {location}</div>
      <p className="event-card-description">{description}</p>
    </div>
    <div className="event-card-action">
      <button className="event-card-btn">Save my spot</button>
    </div>
  </div>
);

export default EventCard;
