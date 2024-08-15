import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <div id="navi">
        <div id="imt">
          <img id="naviimg" src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/primary-language-image-2_ver_1.png" height={100} alt="languages" />
          <marquee>
            <h1 id="lan">Languages</h1>
          </marquee>
        </div>
        <div id="cour">
          <Link to="/"><h2>Home</h2></Link>
          <Link to="/course"><h2>Courses</h2></Link>
          <Link to="/login"><h2>Login</h2></Link>
        </div>
      </div>
      <div id="mai">
        <div id="cen">
          <h1 id="tit">Enjoy Learning</h1>
          <br />
          <h2>Select the language you know</h2>
          <div id="know">
            <label>Tamil</label>
            <input type="radio" id="ktamil" name="know" />
            <label>English</label>
            <input type="radio" id="kenglish" name="know" />
            <label>Hindi</label>
            <input type="radio" id="khindi" name="know" />
          </div>
          <h2>Select the language you want to learn</h2>
          <div id="learn">
            <label>Tamil</label>
            <input type="radio" id="ltamil" name="learn" />
            <label>English</label>
            <input type="radio" id="lenglish" name="learn" />
            <label>Hindi</label>
            <input type="radio" id="lhindi" name="learn" />
          </div>
          <br />
          <Link to="/course"><button id="su">Submit</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
