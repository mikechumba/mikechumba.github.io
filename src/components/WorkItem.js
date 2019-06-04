import React, { Component } from 'react'

class WorkItem extends Component {
   render() {
      return this.props.projects.map(project => (
         <div key={project.id} className="pane">
            <div className="projectcard">
               <div className="projectimage">
                  <img src={project.image} alt=""/>
               </div>
               <div className="projectdesc">
                  <h4>{ project.name }</h4>
                  <div className="projectlinks">
                     <a href={project.source} rel="noopener noreferrer" target="_blank">View Source</a>
                     <a href={project.livesite} rel="noopener noreferrer" target="_blank" >Live Site</a>
                  </div>
                  
               </div>
            </div>
         </div>
      ));
   }
}

export default WorkItem;
