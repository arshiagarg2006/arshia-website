import React from 'react';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="profile-container">
          <img 
            src={`${window.location.origin}/assets/profile.jpg`}
            alt="Arshia Garg" 
            className="profile-image"
            onError={(e) => {
              console.error('Image failed to load:', window.location.origin + '/assets/profile.jpg');
            }}
          />
          <div className="intro-text">
            <h2>Welcome to My Portfolio</h2>
            <h3>About Me</h3>
            <p>
            Hello! I'm Arshia, a Computer Science and Data Science student with 
            expertise in Python, Java, and JavaScript. I'm passionate about 
            using data and AI to improve lives. I also love anything with 
            adrenaline and excitement, like mountain biking, snowboarding, and 
            surfing. My goal in life is to visit every national park. I'm also 
            a thriller and sci-fi movie enthusiast and would love any recs. 
            </p>
          </div>
        </div>
      </section>
      
      <section className="highlights">
        <h3>Career Highlights</h3>
        <ul>
          <li>Key achievement 1</li>
          <li>Key achievement 2</li>
          <li>Key achievement 3</li>
        </ul>
      </section>
    </div>
  );
}

export default Home; 