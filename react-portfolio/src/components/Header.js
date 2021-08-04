import React from 'react';
import 'bulma/css/bulma.min.css';
import dribble from '../images/dribbble_icon.png'
import '../style/index.css'

function Header() {
  return (<nav className="clearfix">
  <a className="is-size-3 has-text-white" href="#me">Abdale Hassan</a>
  <a href="#"><img src={dribble} alt="dribbble icon"/></a>
   </nav>
)
}

export default Header;