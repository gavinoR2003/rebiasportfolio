import React, { useState } from 'react';

function Skills() {
  const [skills] = useState([
    { name: 'JavaScript', level: 70 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'React', level: 65 },
    { name: 'Node.js', level: 60 },
    { name: 'Git', level: 75 },
    { name: 'SQL', level: 70 },
    { name: 'Figma', level: 65 }
  ]);


  return (
    <section className="section bg-light skills-section" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="row skills-row">
          <div className="col-md-6">
            <h5>Programming Languages</h5>
            <ul>
              {skills.slice(0, 4).map(skill => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Tools & Frameworks</h5>
            <ul>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;