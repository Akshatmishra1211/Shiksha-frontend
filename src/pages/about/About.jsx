import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We are dedicated to providing high-quality online courses to help individuals
          learn and grow in their desired fields. Our experienced instructors ensure that
          each course is tailored for effective learning and real-world application.
        </p>
        <p>
          At our platform, learning isn’t just about watching videos — it’s about building
          skills that matter. Whether you're a student exploring new interests, a
          professional upskilling for your career, or simply someone curious to learn, we
          have something for you.
        </p>

        <p>We believe in:</p>
        <ul className="about-list">
          <li>🎯 Practical learning that goes beyond theory</li>
          <li>🧑‍🏫 Expert-led courses crafted by professionals</li>
          <li>📚 Interactive content like quizzes, projects, and real-life examples</li>
          <li>⏱️ Flexible learning, anytime, anywhere</li>
        </ul>

        <p>
          Our mission is to make quality education accessible and affordable to everyone —
          no matter where you’re from or what your background is. With a growing library
          of courses in tech, business, design, and more, we’re here to support your
          learning journey, every step of the way.
        </p>

        <p>
          Join us today and start learning something new — your future self will thank you!
        </p>
      </div>
    </div>
  );
};

export default About;
