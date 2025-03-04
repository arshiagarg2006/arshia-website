import React, { useEffect, useState } from 'react';

function ElevatorPitch() {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Log the full video URL for debugging
    console.log('Video URL:', `${window.location.origin}/assets/pitch.mov`);
  }, []);

  return (
    <div className="elevator-pitch">
      <h2>Elevator Pitch</h2>
      <div className="video-container">
        <video 
          controls
          width="100%"
          className="pitch-video"
          onError={(e) => {
            console.error('Video failed to load:', e);
            setVideoError(true);
          }}
        >
          <source src="/assets/pitch.mov" type="video/quicktime" />
          <source src="/assets/pitch.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {videoError && (
          <div className="video-error">
            <p>Sorry, there was an error loading the video. Please try:</p>
            <ul>
              <li>Refreshing the page</li>
              <li>Using a different browser</li>
              <li><a href="/assets/pitch.mov" download>Downloading the video</a></li>
            </ul>
          </div>
        )}
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