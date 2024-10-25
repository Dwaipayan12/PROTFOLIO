import React from 'react'
import Header from './Header'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
export default function Contact() {
  return (
    <div className='container '>
    <Header />
    <div className="col col-7">
        <div className="contact-div">
    <h1>CONTACT <span>ME</span></h1>
    <div class="contact-container">
    <div class="contact-elements">
        <EmailIcon className="my-icon"/>
        <br></br>
      <h3>Email</h3>
      <br></br>
      <p>bhowmikdwaipayan505@gmail.com</p>
        </div>
        <div class="contact-elements">
         <LocalPhoneIcon className="my-icon"/>
         <br></br>
         <h3>Phone number</h3>
         <br></br>
         <p>8972805295</p>
        </div>
        <div class="contact-elements">
        <PlaceIcon className="my-icon"/>
        <br></br>
        <h3>Address</h3>
        <br></br>
        <p>Tamluk,Purba Medinipur,West Bengal - 721648</p>
        </div>
        </div>
        <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29462.437316628944!2d88.3919015!3d22.6237684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e06cfaa32d1%3A0x64c6461b0e5573a8!2sDr.%20Sudhir%20Chandra%20Sur%20Institute%20of%20Technology%20%26%20Sports%20Complex!5e0!3m2!1sen!2sin!4v1727514088834!5m2!1sen!2sin"
              className="google-map"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <footer className="footer">
      <p>
        Made with <span className="love">love</span> by Dwaipayan Bhowmik <span className="heart">❤️</span>
      </p>
    </footer>
    </div>
    </div>
    </div>
  )
}
