import React from "react";
import me from '../Assets/me.jpg'
import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h2 className="primary-heading">Hello, This is Harish Kumar.</h2>
          <h3 className="secondary-heading">Student, Developer.</h3>
          <p className="primary-text">
            I am an imaginative student and innovative developer, weaving my curiosity into intricate lines of code. My journey is a canvas, where I blend the art of learning with the science of creation, crafting digital wonders that challenge the norm and inspire new perspectives.
          </p>
          <div className="btn-box">
            <a href="/Contact">Initiate a chat? </a>
          </div>
        </div>
        <div className="home-image-section">
        <div class="box">
          <div class="card">
            <div class="imgBx">
              <img src={me} alt="images" />
            </div>
            <div class="details">
              <h2>Harish.<br /><span>Developer</span></h2>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

export default Home;
