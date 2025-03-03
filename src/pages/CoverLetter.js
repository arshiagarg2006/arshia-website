import React from 'react';

function CoverLetter() {
  return (
    <div className="cover-letter-container">
      <h2>Cover Letter</h2>
      <div className="pdf-container">
        <object
          data="/assets/coverletter.pdf"
          type="application/pdf"
          width="100%"
          height="1200px"
          style={{
            maxWidth: '100%',
            width: '1200px',
            margin: '0 auto',
            display: 'block'
          }}
        >
          <p>
            It appears you don't have a PDF plugin for this browser.
            You can {' '}
            <a href="/assets/coverletter.pdf" download>
              click here to download the PDF file.
            </a>
          </p>
        </object>
      </div>
    </div>
  );
}

export default CoverLetter; 