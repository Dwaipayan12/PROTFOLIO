import React from 'react'
import DwaipayanPhoto from '../assets/Dwaipayan_Photo.jpeg';
import './Header.css'
import Header from './Header';
export default function Home() {
  return (
    <div className='container '>
        <Header />
    <div className="col col-7">
        
    <section className="main-content">
      <div>
      <p className="greeting">Hi There..</p>
      <br></br>
<h1 className='h1'>I AM <span>DWAIPAYAN</span></h1>
<br></br>
<h2>A Software Engineer.</h2>
<br></br>
<p className="description">
<b>I am a goal-oriented individual with a strong passion for tackling challenges in software development, web development, and Java programming using cutting-edge technologies.</b>
</p>
<br />
<a href="/About">
<button className="about-btn">About Me</button>
</a>

      </div>
      <div>
      <img src={DwaipayanPhoto} alt="Dwaipayan" className="profile-pic" />
      </div>

</section>
    </div >
    </div>
  )
}
