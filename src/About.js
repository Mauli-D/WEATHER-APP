import React from 'react';
import './About.css';
import teamMember1Image from './team-member-1.png';
import teamMember2Image from './team-member-2.png';
import teamMember3Image from './team-member-3.png';
import teamMember4Image from './team-member-4.png';

const About = () => {
  return (
    
    <div className="about container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>Welcome to our weather application! We are a dedicated team headquartered in Gandhinagar (Gujarat), India, striving to deliver precise and timely weather updates for users globally.</p>

        <p>Passionate about meteorology, our mission is to provide an intuitive platform that empowers individuals to make informed decisions based on accurate and real-time weather forecasts. With a commitment to user satisfaction, we aim to enhance your weather experience, ensuring you stay ahead of changing weather conditions.</p>

        <h3>Our Mission</h3>
        <p>
          Our mission is to deliver reliable weather forecasts, helping you plan your day and stay informed about the current weather conditions.
        </p>

        <h3>Features</h3>
        <ul>
        <li><strong>Real-time Weather Updates:</strong> Stay informed with our real-time weather updates, ensuring you never miss a change in weather conditions.</li>
        <li><strong>Hourly and Daily Forecasts:</strong> Plan your day with confidence using our detailed hourly and daily forecasts, providing you with accurate weather predictions.</li>
        <li><strong>Easy-to-Use Interface:</strong> Enjoy a seamless weather experience with our user-friendly interface, making it effortless to access and understand weather information.</li>
        <li><strong>Customizable Settings:</strong> Tailor the weather app to suit your preferences with customizable settings, allowing you to personalize your weather-viewing experience.</li>
        </ul>

        <h3>Contact Us</h3>
        <p>
          Have questions, feedback, or suggestions? Feel free to reach out to us at <a href="mailto:info@example.com" className="contact-link">info@example.com</a>.
        </p>
      </div>
      
      <div className="team-members">
        <h3>Meet the Team</h3>

        <div className="team-member">
          <img src={teamMember1Image} alt="Maulin Desai" className="team-member-image" />
          <div className="team-member-details">
            <h3>Maulin Desai</h3>
            <p>Lead Developer</p>
          </div>
        </div>

        <div className="team-member">
          <img src={teamMember2Image} alt="Dwiti Desai" className="team-member-image" />
          <div className="team-member-details">
            <h3>Dwiti Desai</h3>
            <p>Weather Specialist</p>
          </div>
        </div>

        <div className="team-member">
          <img src={teamMember3Image} alt="Dwiti Desai" className="team-member-image" />
          <div className="team-member-details">
            <h3>Dwiti Desai</h3>
            <p>Weather Specialist</p>
          </div>
        </div>

        <div className="team-member">
          <img src={teamMember4Image} alt="Dwiti Desai" className="team-member-image" />
          <div className="team-member-details">
            <h3>Dwiti Desai</h3>
            <p>Weather Specialist</p>
          </div>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
};

export default About;