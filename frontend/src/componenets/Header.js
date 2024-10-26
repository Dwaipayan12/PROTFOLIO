import React from 'react'
import './Header.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  return (
    <div className='container'>
      <div className="col col-3">
       <aside className="sidebar">
       <div class="head-name">
        <h1> DWAIPAYAN <span> BHOWMIK</span></h1>
        </div>
        <nav className="navbar">
      <a href="/">Home</a>
      <a href="/About">About</a>
      <a href="/Project">Project</a>
      <a href="/Publications">Publications</a>
      <a href="/Contact">Contact</a>
    </nav>
          <div className="social-icons">
          <a href="https://www.linkedin.com/in/dwaipayan-bhowmik-8a7793257/" className="linkedin" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
         </a>
            <a href="https://www.instagram.com/dwaipayan_27/" className="instagram">
              <InstagramIcon />
            </a>
            <a href="https://github.com/Dwaipayan12" className="github">
            <GitHubIcon />
            </a>
          </div>
       </aside>
      </div>
    </div>
  )
}
