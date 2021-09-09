import React from 'react';
import '../style/index.css'
import 'bulma/css/bulma.min.css';
import certificate from '../images/Certificate.pdf'
import myImg from '../images/Me.jpg'

function Navigation() {
  return (
      <div>
          <nav className="content">
          <ul className=" content  tabs is-centered">
              <li>
                  <div className="nav-bars is-size-3">
                      <a href="#about-me">About Me</a>
                  </div>
              </li>
          
      
          
              <li>
                  <div className="nav-bars is-size-3 has-text-white">
                      <a  href="#projects">Projects</a>
                  </div>
              </li>
          
      
          
              <li>
                  <div className="nav-bars is-size-3">
                      <a href="#contact-me">Contact Me</a>
                  </div>
              </li>
          </ul>
      </nav>

      <header>
      <nav className="content is-large tabs is-centered">
    </nav>
      <figure className="image is-128x128">
        <img id="me" className="is-rounded" src={myImg}/>
    </figure>
      <h1 id="about-me">About Me</h1>
      <p>
        Hi, Thank you for checking my website Portfolio.
        My name is Abdale Hassan, and I'm a software developer.
        I live in Kansas City Kansas. Hey! do you want to know some "Fun Facts" about me?
        Okay! first thing is first I love reading books,
        I love cats, and I love adventurous trips such as going to the lake or visiting 
        the zoo and so on. Please feel free to email me for more info
        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cabdale989@gmail.com" target="_blank">Email</a></p>
        <li>
                  <div className="nav-bars is-size-3">
                      <a className=" has-text-primary" href={certificate}>Certificate</a>
                  </div>
              </li>
    </header>
      </div>      
  )
}

export default Navigation;