import React, {Component} from 'react';
import About from './About/About';
import Academic from './Academic/Academic';
import Experience from './ExtraExperience/ExtraExperiences';
import Project from './Project/Projects';
import Skill from './Skill/Skill';
import { Tab, Tabs } from 'react-bootstrap';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

class TabBar extends Component {

    render() {
        // return (
        //     <Tabs id="tab" className="tab nav-tabs" defaultActiveKey={1}>
        //         <Tab className="tab nav-tabs pane" eventKey={1} title="About">
        //             <About/>
        //         </Tab>
        //         <Tab className="tab nav-tabs pane" eventKey={2} title="Academic">
        //             <Academic/>
        //         </Tab>
        //         <Tab className="tab nav-tabs pane" eventKey={3} title="Experience">
        //             <Experience/>
        //         </Tab>
        //         <Tab className="tab nav-tabs pane" eventKey={4} title="Project">
        //             <Project/>
        //         </Tab>
        //         <Tab className="tab nav-tabs pane" eventKey={5} title="Skill">
        //             <Skill/>
        //         </Tab>
        //     </Tabs>
        // )
        return (
          <div>
            <ul id="tab" className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="tab" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#academic">Academic</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#project">Project</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href="#skill">Skill</a>
              </li>
            </ul>


            <div className="tab-content">
              <div id="about" className="container tab-pane active"><br />
                <About/>
              </div>
              <div id="academic" className="container tab-pane fade"><br />
                <Academic/>
              </div>
              <div id="experience" className="container tab-pane fade"><br />
                <Experience/>
              </div>
              <div id="project" className="container tab-pane fade"><br />
                <Project/>
              </div>
              <div id="skill" className="container tab-pane fade"><br />
                <Skill/>
              </div>
            </div>
          </div>
        )
    }
}

export default TabBar
