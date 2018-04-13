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

  constructor(props){
    super(props);
  }

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
                <a className="nav-link active" data-toggle="tab" href={"#" + this.props.nuid + '-' + "about"}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-toggle="tab" href={"#" + this.props.nuid + '-' + "academic"}>Academic</a>
              </li>
              {/*<li className="nav-item">*/}
                {/*<a className="nav-link" data-toggle="tab" href={"#" + this.props.nuid + '-' + "experience"}>Experience</a>*/}
              {/*</li>*/}
              {/*<li className="nav-item">*/}
                {/*<a className="nav-link" data-toggle="tab" href={"#" + this.props.nuid + '-' + "project"}>Project</a>*/}
              {/*</li>*/}
              {/*<li className="nav-item">*/}
                {/*<a className="nav-link" data-toggle="tab" href={"#" + this.props.nuid + '-' + "skill"}>Skill</a>*/}
              {/*</li>*/}
            </ul>


            <div className="tab-content">
              <div id={this.props.nuid + '-' + "about"} className="tab-pane active"><br />
                <About about={this.props.about}/>
              </div>
              <div id={this.props.nuid + '-' + "academic"} className="tab-pane fade"><br />
                <Academic courses={this.props.courses}/>
              </div>
              {/*<div id={this.props.nuid + '-' + "experience"} className="container tab-pane fade"><br />*/}
                {/*<Experience extraExperiences={this.props.extraExperiences}/>*/}
              {/*</div>*/}
              {/*<div id={this.props.nuid + '-' + "project"} className="container tab-pane fade"><br />*/}
                {/*<Project projects={this.props.projects}/>*/}
              {/*</div>*/}
              {/*<div id={this.props.nuid + '-' + "skill"} className="container tab-pane fade"><br />*/}
                {/*<Skill skills={this.props.skills}/>*/}
              {/*</div>*/}
            </div>
          </div>
        )
    }
}

export default TabBar
