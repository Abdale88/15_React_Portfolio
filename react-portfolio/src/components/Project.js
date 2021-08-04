import React from 'react';
import 'bulma/css/bulma.min.css';
import '../style/index.css'
import passwordGenerator from '../images/03-javascript-homework-demo.png'
import project2 from '../images/project2.png'
import schedule from '../images/schedule.gif'
import Weather from '../images/Weather.png'
import project1 from '../images/project1.png'
import resume from '../images/Resume1.pdf'

function Project() {
  return (<div>

   <section id="projects" class="is-size-3"><h1>Projects</h1></section>
    <div class="work">
      <figure>
        <h2 class="is-size-3 has-text-white">MyTeam</h2>
        <a href="https://abc-myteam.herokuapp.com/login" target="_blank"><img src={project2} alt="Password Generator"/></a>
        <div class="buttons is-centered">
          <button class="button is-success is-outlined"><a href="https://abc-myteam.herokuapp.com/login" target="_blank">Click to View</a></button>
          <button class="button is-success is-outlined"><a href="https://github.com/BTDubbzzz/athletics-admin" target="_blank">GitHub Link</a></button>
       </div>
      </figure>

      <figure>
        <h2 class="is-size-3 has-text-white">Password Generator</h2>
        <a href="https://abdale88.github.io/03-password-generator/" target="_blank"><img src={passwordGenerator} alt="Password Generator"/></a>
        <div class="buttons is-centered">
          <button class="button is-success is-outlined"><a href="https://abdale88.github.io/03-password-generator/" target="_blank">Click to View</a></button>
          <button class="button is-success is-outlined"><a href="https://github.com/Abdale88/03-password-generator" target="_blank">GitHub Link</a></button>
       </div>
      </figure>

      <figure>
        <h2 class="is-size-3 has-text-white">Work Schedule</h2>
        <a href="https://abdale88.github.io/05_Work_Schedule/" target="_blank"><img src={schedule} alt="Work Schedule"/></a>
        <div class="buttons is-centered">
          <button class="button is-success is-outlined"><a href="https://abdale88.github.io/05_Work_Schedule/" target="_blank">Click to View</a></button>
          <button class="button is-success is-outlined"><a href="https://github.com/Abdale88/05_Work_Schedule" target="_blank">GitHub Link</a></button>
       </div>
      </figure>
      

    </div>


    
  </div>)
}

export default Project;
