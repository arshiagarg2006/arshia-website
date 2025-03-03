import React from 'react';

function SampleWork() {
  return (
    <div className="sample-work">
      <h2>Portfolio Projects</h2>
      
      <div className="projects-grid">
        <div className="project-card">
          <h3>SkinSense</h3>
          <div className="project-image">
          <img 
              src="/assets/skinsense.png" 
              alt="SkinSense Project"
              className="project-img"
              />
          </div>
          <p>
            A project that uses advanced image recognition to screen patient-uploaded 
            images and differentiate skin conditions. Our main focus relies on whether 
            the image is MonkeyPox or not, and then our two trained models allow us to
             further examine the skin condition. This empowers individuals to seek 
             medical guidance promptly, improving healthcare accessibility and
              contributing to more effective public health responses. Physicians will 
              also benefit from SkinSense by using it to shortlist possible diagnoses 
              for their patients promptly.


          </p>
          <div className="project-links">
            <a href="https://devpost.com/software/skinsense-0dku7t" className="demo-link">View Post</a>
            <a href="https://github.com/arshiagarg2006/SkinSense-healthhacks2024" className="code-link">View Code</a>
          </div>
        </div>

        <div className="project-card">
          <h3>VaxFax</h3>
          <div className="project-image">
          <img 
              src="/assets/vaxfax.png" 
              alt="VaxFax Project"
              className="project-img"
              />
          </div>
          <p>
            A project with a focus is on spreading correct vaccination information and 
            keeping users up to date with the very thing that saves lives. When users 
            enter their state and vaccine, Vaxfax will take the stress off of parents 
            and keep the focus on their child's safety. Resources will be available to 
            provide an overview of the vaccines and vaccine coverage by state will be 
            displayed. Stay safe, with Vaxfax!
          </p>
          <div className="project-links">
            <a href="https://devpost.com/software/project-ep5r2v9ondxc" className="demo-link">Live Post</a>
            <a href="https://github.com/arshiagarg2006/vaxfax" className="code-link">View Code</a>
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default SampleWork; 