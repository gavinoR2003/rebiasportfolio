import React from 'react';

function About() {
  return (
    <section className="section bg-light" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <img 
              src="/your-photo.jpg" 
              alt="Your Photo" 
              className="rounded-circle mb-3 mb-md-0" 
              style={{ width: '192px', height: '192px', objectFit: 'cover' }} 
            />
          </div>
          <div className="col-md-8">
            <p style={{ fontSize: '1.1em' }}>
              My name is Gavino Rebias Jr., and I am a 4th-year Bachelor of Science in Information Technology (BSIT) student. I was born on February 23, 2002. As an IT student, I am passionate about technology and continuously expanding my knowledge in programming, systems development, and emerging technologies.

Throughout my academic journey, I have developed skills in problem-solving, critical thinking, and teamwork. I enjoy exploring new innovations in the tech industry and applying what I learn to real-world projects. Being in my final year, I am focused on strengthening my technical expertise and preparing myself for a successful career in the IT field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;