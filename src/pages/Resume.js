import React from 'react';

function Resume() {
  return (
    <div className="resume">
      <h2>Professional Resume</h2>
      
      <section className="experience">
        <h3>Work Experience</h3>
        <div className="job">
          <h4>Senior Developer - Company Name</h4>
          <p className="date">2020 - Present</p>
          <ul>
            <li>Led development of key projects resulting in 30% efficiency improvement</li>
            <li>Mentored junior developers and implemented best practices</li>
            <li>Architected scalable solutions for enterprise clients</li>
          </ul>
        </div>
      </section>

      <section className="education">
        <h3>Education</h3>
        <div className="degree">
          <h4>Bachelor of Science in Computer Science</h4>
          <p>University Name - Graduation Year</p>
        </div>
      </section>

      <section className="skills">
        <h3>Technical Skills</h3>
        <ul>
          <li>Languages: JavaScript, Python, Java</li>
          <li>Frontend: React, Vue.js, HTML5, CSS3</li>
          <li>Backend: Node.js, Express, Django</li>
          <li>Database: MongoDB, PostgreSQL</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume; 