import React, { Component } from 'react'
import WorkItem from './WorkItem';

class Work extends Component {
  state = {
    projects: [
      {
        id: 1,
        name: "Pig Dice",
        source: "https://github.com/mikechumba/pigdice",
        livesite: "https://mikechumba.github.io/pigdice",
        image: "https://ik.imagekit.io/bsvzrpqaj/piddice_rkz5kwHaV.png"
      },
      {
        id: 2,
        name: "Instagram",
        source: "https://github.com/mikechumba/insta",
        livesite: "https://shashin-o-mimasu.herokuapp.com",
        image: "https://ik.imagekit.io/bsvzrpqaj/Instagram_BJsmqPSaN.png"
      }
    ]
  }

  render() {
    document.title = "Work"
    return (
      <div>
         <div className="workpage">
            <div className="container">
              <h1>Work</h1>
              <div className="projects">
                <WorkItem projects={this.state.projects} />
              </div>
            </div>
         </div>
      </div>
    )
  }
}

export default Work;