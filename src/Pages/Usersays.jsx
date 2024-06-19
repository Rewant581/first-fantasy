import React from 'react';
import './Usersays.css';

const testimonials = [
  {
    name: 'John Doe',
    position: 'Fantasy Sports Enthusiast',
    image: 'https://via.placeholder.com/100',
    quote: 'IPL11 has completely changed the way I enjoy sports. The thrill of competition and strategy is unmatched!',
  },
  {
    name: 'Jane Smith',
    position: 'Professional Gamer',
    image: 'https://via.placeholder.com/100',
    quote: 'The user-friendly interface and variety of sports make IPL11 my go-to app for fantasy sports.',
  },
  {
    name: 'Carlos Ramirez',
    position: 'Casual Player',
    image: 'https://via.placeholder.com/100',
    quote: 'I love how easy it is to get started with IPL11. The community and the game itself are fantastic!',
  },
  {
    name: 'Emily Chen',
    position: 'Sports Analyst',
    image: 'https://via.placeholder.com/100',
    quote: 'IPL11 offers a perfect blend of sports excitement and strategic gameplay. I can\'t get enough!',
  },
];

const UserSays = () => {
  return (
    <section className="user-says-section">
      <h2>User Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-position">{testimonial.position}</p>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UserSays;
