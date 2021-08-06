import React from 'react';
import 'bulma/css/bulma.min.css';
import '../style/index.css'
import passwordGenerator from '../images/03-javascript-homework-demo.png'
import project2 from '../images/project2.png'
import schedule from '../images/schedule.gif'
import Weather from '../images/Weather.png'
import project1 from '../images/project1.png'
import resume from '../images/Resume1.pdf'
import fitness_tracker from '../images/fitness_tracker.png'
import budget_tracker from '../images/budget_tracker.png'


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
      
      <figure>
        <h2 class="is-size-3 has-text-white">Holiday Search</h2>
        <a class="holiday-search" href="https://gannacon.github.io/Project_1/" target="_blank"><img src={project1} alt="Holiday Search"/></a>
        <div class="buttons is-centered">
          <button class="button is-success is-outlined"><a href="https://gannacon.github.io/Project_1/" target="_blank">Click to View</a></button>
          <button class="button is-success is-outlined"><a href="https://github.com/gannacon/Project_1" target="_blank">GitHub Link</a></button>
       </div>
      </figure>

      <figure>
        <h2 class="is-size-3 has-text-white">Weather Dashboard</h2>
        <a href="https://abdale88.github.io/06_Weather_Dashboard/" target="_blank"><img src={Weather} alt="Weather dashboard"/></a>
        <div class="buttons is-centered">
          <button class="button is-success is-outlined"><a href="https://abdale88.github.io/06_Weather_Dashboard/" target="_blank">Click to View</a></button>
          <button class="button is-success is-outlined"><a href="https://github.com/Abdale88/06_Weather_Dashboard" target="_blank">GitHub Link</a></button>
       </div>
      </figure>

      <figure>
        <h2 class="is-size-3 has-text-white">fitness Tracker</h2>
        <a href="https://workout-tracker-db.herokuapp.com/" target="_blank"><img src={fitness_tracker} alt="Weather dashboard"/></a>
        <div class="buttons is-centered">
          <button class="button is-success is-outlined"><a href="https://workout-tracker-db.herokuapp.com/" target="_blank">Click to View</a></button>
          <button class="button is-success is-outlined"><a href="https://github.com/Abdale88/13_Workout_Tracker" target="_blank">GitHub Link</a></button>
       </div>
      </figure>

      <figure>
        <h2 class="is-size-3 has-text-white">Budger Tracker</h2>
        <a href="https://db-budget-tracker.herokuapp.com/" target="_blank"><img src={budget_tracker} alt="Weather dashboard"/></a>
        <div class="buttons is-centered">
          <button class="button is-success is-outlined"><a href="https://db-budget-tracker.herokuapp.com/" target="_blank">Click to View</a></button>
          <button class="button is-success is-outlined"><a href="https://github.com/Abdale88/14_Budget_Tracker" target="_blank">GitHub Link</a></button>
       </div>
      </figure>
    </div>

    <div class="whatIDo">
      <h1 id="contact-me" class="content is-large tabs is-centered is-size-2">Contacts</h1>
      <ul>
        <li><a href="https://voice.google.com/u/0/signup" target="_blank">(913)832-0416</a></li>
        <li><a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cabdale989@gmail.com" target="_blank">cabdale989@gmail.com</a></li>
        <li><a href="https://github.com/Abdale88" target="_blank">GitHub</a></li>
        <li><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank">LinkedIn</a></li>
        <li><a href={resume} target="_blank">Resume</a></li>
      </ul>
    </div> 
  </div>)
}

export default Project;
