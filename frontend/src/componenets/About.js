import React from 'react'
import './Header.css'
import Header from './Header';
import DwaipayanPhoto from '../assets/Dwaipayan_Photo.jpeg';
export default function About() {
  return (
    <div className='container '>
        <Header />
        <div className="col col-7">
         <section className='About-part'>
         <h1>ABOUT <span>ME</span> </h1>
         <br></br>
          <div className='About-me'>
             <div className='About-me-pic'>
             <img src={DwaipayanPhoto} alt="Dwaipayan" className="profile-pic" />
             </div>
             <div className='About-me-Details'>
                <h1>My name is Dwaipayan Bhowmik</h1>
                <p><b>As a final-year Computer Science student pursuing a B.Tech degree, I am focusing on full-stack development and Java. With a passion for problem-solving and cutting-edge technologies, I am actively expanding my skill set to prepare for a successful career in software development.</b></p>
               <div className='personal-Details'>
                <div  class="info-1">
                <span>Age : </span>20
                <br />
                <span>Gender :</span> Male
                <br />
                <span>Languages :</span> English, Bengali,Hindi
                </div>
                <div className='info-1'>
                <span>Phone :</span> +91-8972805295
               <br></br>
               <span>Country : </span>India
                <br></br>
                <span> Email : </span>bhowmikdwaipayan505@gmail.com
                </div>
                </div>
                <br />
                <a href="https://drive.google.com/file/d/1kRMtib6rYSVO0wJ0qykPrU9tjsLvgIcZ/view?usp=sharing">
<button className="about-btn">Download CV</button>
</a>
             
             </div>
          </div>
         </section>

         <section className='My-Education'>
         <div class="education-section">
  <h2>MY EDUCATION</h2>
  <div class="education-container">
    <div class="education-card">
      <span class="year">2021 - 2025</span>
      <h3>B.Tech Computer Science</h3>
      <p>Maulana Abul Kalam Azad University of Technology.</p>
    </div>
    <div class="education-card">
      <span class="year">2019 - 2021</span>
      <h3>Higher Secondary(H.S)</h3>
      <p>Siddah Sashi Sripati Vidyabhaban(State Board)</p>
    </div>
  </div>
</div>
</section>

<section className='My-Skills'>
<div class="skills-section">
  <h2>MY SKILLS</h2>
  <div class="skill-list">
    <div class="skill-item">
      <p>C</p>
      <div class="skill-bar">
        <div class="progress skill-90" ></div>
      </div>
    </div>
    <div class="skill-item">
      <p>HTML5 / CSS3 / JavaScript</p>
      <div class="skill-bar">
        <div class="progress skill-70" ></div>
      </div>
    </div>
    <div class="skill-item">
      <p>React Js</p>
      <div class="skill-bar">
        <div class="progress skill-80" ></div>
      </div>
    </div>
    <div class="skill-item">
      <p>Java</p>
      <div class="skill-bar">
        <div class="progress skill-70" ></div>
      </div>
    </div>
    <div class="skill-item">
      <p>SQL/MongoDb</p>
      <div class="skill-bar" >
        <div class="progress skill-90"></div>
      </div>
    </div>

  </div>
</div>
</section>
        </div>
    </div>
  )
}
