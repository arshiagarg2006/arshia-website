import React from 'react';

function ElevatorPitch() {
  const videoUrl = `${window.location.origin}/assets/pitch.mp4`;
  console.log('Attempting to load video from:', videoUrl);

  return (
    <div className="elevator-pitch">
      <h2>Elevator Pitch</h2>
      <div className="video-container">
        <video 
          controls
          autoPlay={false}
          width="100%"
          height="auto"
          className="pitch-video"
          playsInline
          preload="auto"
          onError={(e) => {
            console.error('Video failed to load:', e);
            console.error('Video element:', e.target);
          }}
        >
          <source 
            src={videoUrl}
            type="video/mp4"
            onError={(e) => console.error('Source error:', e)}
          />
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