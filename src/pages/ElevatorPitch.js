import React from 'react';

function ElevatorPitch() {
  return (
    <div className="elevator-pitch">
      <h2>Elevator Pitch</h2>
      <div className="video-container">
        <iframe
          className="pitch-video"
          src="https://www.youtube.com/embed/STGBlGItMks"
          title="Elevator Pitch"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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