import React from 'react';

function ElevatorPitch() {
  return (
    <div className="elevator-pitch">
      <h2>Elevator Pitch</h2>
      <div className="video-container">
        <video 
          controls
          width="100%"
          className="pitch-video"
        >
          <source src="/assets/pitch.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="pitch-description">
        <h3>About My Pitch</h3>
        <p>
          In this brief presentation, I highlight my key skills, experiences, 
          and what makes me a unique candidate for software engineering roles.
        </p>
      </div>
    </div>
  );
}

export default ElevatorPitch; 