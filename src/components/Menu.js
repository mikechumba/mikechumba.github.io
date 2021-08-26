import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {

  // menuClick = e => {
  //   e.preventDefault();
  //   return this.props.toggleMenu;
  // }

  render() {
    return (
      <div>
        <div className="menupage">

          <div className="guides">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="desktop"></span>
          </div>

          <div className="menubg"></div>

          <div className="contentpanel container">

              <div className="contact">
                <h1>Want to work with me?</h1>
                <div className="socials">
                    <p><a href="https://mailto:michaelchumba@outlook.com" rel="noopener noreferrer" target="_blank">Email</a></p>
                    <p><a href="https://linkedin.com/in/itsmikechumba" rel="noopener noreferrer" target="_blank">LinkedIn</a></p>
                    <p><a href="https://github.com/mikechumba" rel="noopener noreferrer" target="_blank">Github</a></p>
                    <p><a href="https://behance.net/michaelkipchumba" rel="noopener noreferrer" target="_blank">Behance</a></p>
                </div>
              </div>

              <div className="menucontent">
                <p onClick={this.props.toggleMenu} onTouchStart={this.props.toggleMenu}><Link to='/'>Home</Link></p>
                <p onClick={this.props.toggleMenu} onTouchStart={this.props.toggleMenu}><Link to='/work'>Work</Link></p>
                <p><a href='https://ik.imagekit.io/bsvzrpqaj/Michael_Kipchumba_Resume_ZbeRNnQ1k.pdf' rel="noopener noreferrer" target="_blank">Resume</a></p>
              </div>

           </div>
               
        </div>
      </div>
    )
  }
}

export default Menu;