import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        
        <div className="menupage">

          <div className="guides">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span class="desktop"></span>
          </div>

          <div className="menubg"></div>

          <div className="contentpanel container">

              <div className="contact">
                <h1>Want to work with me?</h1>
                <div className="socials">
                    <p><a href="mailto:michaelchumba@outlook.com" rel="noopener noreferrer" target="_blank">Email</a></p>
                    <p><a href="linkedin.com/mikechumba" rel="noopener noreferrer" target="_blank">LinkedIn</a></p>
                    <p><a href="github.com/mikechumba" rel="noopener noreferrer" target="_blank">Github</a></p>
                    <p><a href="behance.net/mikekipchumba" rel="noopener noreferrer" target="_blank">Behance</a></p>
                </div>
              </div>

              <div className="menucontent">
                <p><Link onClick={this.props.toggleMenu} to='/'>Home</Link></p>
                <p><Link onClick={this.props.toggleMenu} to='/work'>Work</Link></p>
                <p><a onClick={this.props.toggleMenu} href='https://ik.imagekit.io/bsvzrpqaj/Michael_Kipchumba_Resume_-tq82OoiP.pdf' rel="noopener noreferrer" target="_blank">Resume</a></p>
              </div>

           </div>
               
        </div>
      </div>
    )
  }
}

export default Menu;