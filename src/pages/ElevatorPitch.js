import React from 'react';

function ElevatorPitch() {
  return (
    <div className="elevator-pitch">
      <h2>Elevator Pitch</h2>
      
      <section className="pitch-content">
        <div className="video-placeholder">
          {/* Add your video component here */}
          <p>Video Pitch Coming Soon</p>
        </div>

        <div className="written-pitch">
          <h3>Who I Am</h3>
          <p>
            I'm a [profession] with [X] years of experience specializing in
            [key specialties]. My passion lies in [specific area], and I've
            successfully [major achievement].
          </p>

          <h3>What I Offer</h3>
          <p>
            I bring a unique combination of [skill 1], [skill 2], and [skill 3],
            allowing me to [value proposition]. My track record includes
            [specific accomplishment] that resulted in [measurable outcome].
          </p>

          <h3>Why Work With Me</h3>
          <p>
            I'm known for my [positive trait] and ability to [key strength].
            I'm seeking opportunities to [goal] while delivering [benefit to employer].
          </p>
        </div>
      </section>
    </div>
  );
}

export default ElevatorPitch; 