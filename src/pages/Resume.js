import React from 'react';

function Resume() {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <div className="pdf-container">
        <object
          data="/assets/resume.pdf"
          type="application/pdf"
          width="100%"
          height="1200px"
          style={{
            maxWidth: '100%',
            width: '1600px',
            margin: '0 auto',
            display: 'block'
          }}
        >
          <p>
            It appears you don't have a PDF plugin for this browser.
            You can {' '}
            <a href="/assets/resume.pdf" download>
              click here to download the PDF file.
            </a>
          </p>
        </object>
      </div>
    </div>
  );
}

export default Resume; 