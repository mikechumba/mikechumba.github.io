import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { TimelineLite } from 'gsap';
import './App.css';
import Landing from './components/Landing';
import Work from './components/Work';
import Menu from './components/Menu';

class App extends Component {
  constructor(props) {
    super(props);

    this.lineOne = null;

    this.lineTwo = null;

    this.menuPage = null;

    this.toggleMenu = new TimelineLite({paused: true, reversed: true});
  }

  componentDidMount() {
    this.toggleMenu
      .to(this.lineOne, .125, {rotation: 45, transformOrigin: "50% 50%", y: 23}, .125)
      .to(this.lineTwo, .125, {rotation: -45, transformOrigin: "50% 50%", y: -23}, .125)
      .to(this.menuPage, .125, {autoAlpha: 1}, 0.05);
  }

  hamClick = e => {
    e.preventDefault();
    this.toggleMenu.reversed() ? this.toggleMenu.play() : this.toggleMenu.reverse();
  }

  render() {
    return (
      <Router>
        <div className="App">
          {/* <Landing /> */}
          <div className="menu-icon">
            <svg onClick={this.hamClick} className="ham" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <line ref={ line => this.lineOne = line } x1="25" y1="40" x2="110" y2="40" fill="none" stroke="#B9B9B9" strokeWidth="6"/>
              <line ref={ line => this.lineTwo = line} x1="25" y1="86" x2="110" y2="86" fill="none" stroke="#B9B9B9" strokeWidth="6"/>
            </svg>

          </div>
          <div className="guides">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="desktop"></span>
          </div>
          <Route exact path='/' component={Landing} />
          <Route path='/work' component={Work} />
          <div ref={ div => this.menuPage = div} className="forToggle">
            <Menu toggleMenu={this.hamClick} />  
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
