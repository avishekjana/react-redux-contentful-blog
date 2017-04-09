import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/avishekjana/" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
          </ul>
          <p>Adopted from a template designed by: <a href="https://html5up.net">HTML5 UP</a>.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
