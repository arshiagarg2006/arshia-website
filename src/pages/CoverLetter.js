import React from 'react';

function CoverLetter() {
  return (
    <div className="cover-letter">
      <h2>Cover Letter</h2>
      
      <div className="letter-content">
        <p className="date">Current Date</p>
        
        <div className="recipient">
          <p>Hiring Manager</p>
          <p>Company Name</p>
          <p>Company Address</p>
        </div>

        <div className="body">
          <p>Dear Hiring Manager,</p>
          
          <p>
            I am writing to express my strong interest in the [Position] role at [Company].
            With my background in [relevant experience], I am confident in my ability to
            contribute meaningfully to your team.
          </p>

          <p>
            Throughout my career, I have demonstrated [key skill] and [another key skill],
            which align perfectly with the requirements outlined in the job description.
          </p>

          <p>
            I am particularly drawn to [Company] because of [specific reason about the company].
            I believe my skills in [relevant skills] would make me a valuable addition to your team.
          </p>

          <p>
            Thank you for considering my application. I look forward to discussing how I can
            contribute to [Company]'s continued success.
          </p>

          <p>Sincerely,</p>
          <p>[Your Name]</p>
        </div>
      </div>
    </div>
  );
}

export default CoverLetter; 