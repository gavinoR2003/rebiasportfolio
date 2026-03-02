import React from 'react';

function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2>Educational Background</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <div>
              <strong>College</strong> 
              <br />
              Consolatrix College of Toledo City,  2025-2026
            </div>
            <img src="/cctc.png" alt="College logo" className="school-logo" />
          </li>
          <li className="list-group-item">
            <div>
              <strong>Senior High School</strong>
              <br />
              Saint Bernard School,  2021-2022
            </div>
            <img src="/stbernard.png" alt="Senior High School logo" className="school-logo" />
          </li>
          <li className="list-group-item">
            <div>
              <strong>Junior High School</strong>
              <br />
              Sangi Elementary School,  2018-2019
            </div>
            <img src="/dumlog.jpg" alt="Junior High School logo" className="school-logo" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Education;