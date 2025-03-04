import React from 'react';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="profile-container">
        
          
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
            <p>
            Connect with me on <a href="https://www.linkedin.com/in/arshia--garg/">LinkedIn</a>.
            </p>
          </div>
          <div className="profile-image-container">
            <img 
              src="/assets/profile.png"
              alt="Arshia Garg"
              className="profile-image"
            />
          </div>
        </div>
      </section>
      
      
    </div>
  );
}

export default Home; 