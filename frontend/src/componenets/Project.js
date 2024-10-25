import React from 'react'
import Header from './Header'
import './Header.css'
export default function Project() {
  return (
    <div className='container '>
    <Header />
    <div className="col col-7">
     <div className='projectSec'>
     <div class="projects-section">
  <h1 class="section-title">ACADEMIC <span>Projects</span></h1>
 <div class="projects-row">
    <div class="project-card" >
      <h3 class="project-title">Apna Video Call</h3>
      <p class="tech-stack">Tech Stack: React.js, Node.js, WebRTC, Socket.IO, MongoDB</p>
      <div class="project-links">
        <a href="https://apnavideocallfrontend-swtr.onrender.com" target="_blank" rel="noreferrer">Live Demo</a> | 
        <a href="https://github.com/Dwaipayan12/ApnaVideoCall" target="_blank" rel="noreferrer">GitHub Repository</a>
      </div>
      <p class="project-description">
        ● Developed a real-time video calling platform for peer-to-peer video streaming.<br />
        ● Integrated Socket.IO for real-time messaging and MongoDB for chat and user data management.<br />
        ● Implemented key features like screen sharing, messaging, and media control.
      </p>
    </div>
    <br></br>
    <div class="project-card">
      <h3 class="project-title">Weather App</h3>
      <p class="tech-stack">Tech Stack: ReatJs,RestfulAPI</p>
      <div class="project-links">
        <a href="https://weatherapp-xgdb.onrender.com" target="_blank" rel="noreferrer">Live Demo</a> | 
        <a href="https://github.com/Dwaipayan12/WEATHERAPP" target="_blank" rel="noreferrer">GitHub Repository</a>
      </div>
      <p class="project-description">
      ● Created a dynamic and responsive website using React.js and JavaScript to display weather data for any
city.<br />
● Integrated a free Weather API to fetch real-time weather information.<br />
● Optimized performance for faster load times and ensured cross-device compatibility.

      </p>
    </div>
  </div>


  <div class="projects-row">
    <div class="project-card" >
      <h3 class="project-title">TravelNest: Booking Platform</h3>
      <p class="tech-stack">Tech Stack: Html,Css,JavaScript,MongoDB,Node Js,Express Js</p>
      <div class="project-links">
        {/* <a href="your_live_demo_link" target="_blank" rel="noreferrer">Live Demo</a> |  */}
        <a href="https://github.com/Dwaipayan12/TravelNest" target="_blank" rel="noreferrer">GitHub Repository</a>
      </div>
      <p class="project-description">
      ● Developed a booking platform clone using Node.js, Express.js, and MongoDB.<br />
● Implemented user authentication, login/signup, and a review feature for feedback.<br />
● Designed a user-friendly interface and managed server-side logic for seamless backend operations.
      </p>
    </div>
    <br></br>
    <div class="project-card">
      <h3 class="project-title">Simon_Game</h3>
      <p class="tech-stack">Tech Stack: Html,Css,JavaScript</p>
      <div class="project-links">
        <a href="https://simongame-06t2.onrender.com" target="_blank" rel="noreferrer">Live Demo</a> | 
        <a href="https://github.com/Dwaipayan12/Simon-Game" target="_blank" rel="noreferrer">GitHub Repository</a>
      </div>
      <p class="project-description">
      ● Developed an interactive Simon Game using HTML, CSS, and JavaScript.<br />
      ● Implemented dynamic color and sound sequences to challenge players' memory skills in progressively difficult levels.<br />
      ● Designed a responsive layout with smooth animations to enhance user experience across different devices.
      </p>
    </div>
  </div>

  <div class="projects-row">
    <div class="project-card" >
      <h3 class="project-title">Zerodha Clone</h3>
      <p class="tech-stack">Tech Stack: React.js, JavaScript</p>
      <div class="project-links">
        {/* <a href="your_live_demo_link" target="_blank" rel="noreferrer">Live Demo </a> |   */}
        <a href="https://github.com/Dwaipayan12/ZerodhaClone" target="_blank" rel="noreferrer">      GitHub Repository</a>
      </div>
      <p class="project-description">
        ● Built a functional replica of the Zerodha trading platform's interface using only React for front-end development.<br />
        ● Created a responsive design with essential components for user experience, such as a dashboard, stock market overview, and order management.<br />
        ● Focused on React component structure and state management to ensure smooth navigation and interactivity.
      </p>
    </div>
    <br></br>
    <div class="project-card">
      <h3 class="project-title">Tic-Tac-Toe Game</h3>
      <p class="tech-stack">Tech Stack: Html,Css,JavaScript</p>
      <div class="project-links">
        <a href="https://tic-toe-game-oiu8.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a> | 
        <a href="https://github.com/Dwaipayan12/Tic-Toe-game" target="_blank" rel="noreferrer"> GitHub Repository</a>
      </div>
      <p class="project-description">
      ● Created an interactive Tic-Tac-Toe game with a clean, responsive UI for seamless two-player gameplay.<br />
      ● Developed core game logic in JavaScript, including turn management and win detection.<br />
      ● Built a visually appealing layout with CSS, enhancing user experience with interactive elements and animations.
      </p>
    </div>
  </div>
</div>

     </div>
    </div>
    </div>
   
  )
}
