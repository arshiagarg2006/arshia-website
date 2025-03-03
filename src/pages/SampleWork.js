import React from 'react';

function SampleWork() {
  return (
    <div className="sample-work">
      <h2>Portfolio Projects</h2>
      
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <div className="project-image">
            {/* Add project image here */}
            <div className="placeholder-img">Project Image</div>
          </div>
          <p>
            A brief description of the project, including technologies used
            and your role in its development.
          </p>
          <div className="project-links">
            <a href="#" className="demo-link">Live Demo</a>
            <a href="#" className="code-link">View Code</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Project 2</h3>
          <div className="project-image">
            <div className="placeholder-img">Project Image</div>
          </div>
          <p>
            Description of another significant project showcasing different
            skills and technologies.
          </p>
          <div className="project-links">
            <a href="#" className="demo-link">Live Demo</a>
            <a href="#" className="code-link">View Code</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Project 3</h3>
          <div className="project-image">
            <div className="placeholder-img">Project Image</div>
          </div>
          <p>
            Overview of a third project highlighting additional capabilities
            and technical expertise.
          </p>
          <div className="project-links">
            <a href="#" className="demo-link">Live Demo</a>
            <a href="#" className="code-link">View Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleWork; 