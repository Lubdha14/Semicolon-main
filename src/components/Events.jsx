import React from 'react';
import './Events.css';

function Events() {
  // Dummy data for events
  const events = [
    {
      id: 1,
      name: "Workshop on Digital Literacy",
      date: "February 20, 2024",
      description: "Join us for a workshop to learn about basic digital literacy skills.",
      conductor: "Tech Education Foundation"
    },
    {
      id: 2,
      name: "Training on Agricultural Techniques",
      date: "March 5, 2024",
      description: "Learn modern agricultural techniques to improve your farm's productivity.",
      conductor: "Tech Education Foundation"
    },
    {
      id: 3,
      name: "Agricultural Webinars",
      date: "April 10, 2024",
      description: "Join our series of webinars to learn about the latest trends in agriculture.",
      conductor: "Tech Education Foundation"
    },
    {
      id: 4,
      name: "Entrepreneurship Seminars",
      date: "May 15, 2024",
      description: "Learn the basics of entrepreneurship and how to start your own business.",
      conductor: "Tech Education Foundation"
    },
    {
      id: 5,
      name: "Health and Wellness Webinars",
      date: "June 20, 2024",
      description: "Discover tips and techniques for maintaining a healthy lifestyle.",
      conductor: "Tech Education Foundation"
    },
    {
      id: 6,
      name: "Cultural Events",
      date: "July 25, 2024",
      description: "Celebrate the diversity of our community through cultural performances and activities.",
      conductor: "Tech Education Foundation"
    },
    {
      id: 7,
      name: "Environmental Awareness Campaigns",
      date: "August 30, 2024",
      description: "Join us in raising awareness about environmental issues and promoting sustainable practices.",
      conductor: "Tech Education Foundation"
    },
    {
      id: 8,
      name: "Community Networking Events",
      date: "September 5, 2024",
      description: "Connect with fellow community members and explore opportunities for collaboration.",
      conductor: "Tech Education Foundation"
    },
    {
      id: 9,
      name: "Job Skills Training",
      date: "October 10, 2024",
      description: "Improve your job skills and increase your employability with our training sessions.",
      conductor: "Tech Education Foundation"
    },
  
    // Add more events as needed
  ];

  return (
    <div className="events-page">
      <h2>Events</h2>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event">
            <h3>{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Conducted by: {event.conductor}</p>
            <p>{event.description}</p>
            <button>Register Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
