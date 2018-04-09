import React, {Component} from 'react';
import About from './About/About';
import Academic from './Academic/Academic';
import Experience from './ExtraExperience/ExtraExperiences';
import Project from './Project/Projects';
import Skill from './Skill/Skill';
import { Tab, Tabs } from 'react-bootstrap';

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
          <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
          </div>
        )
    }
}

export default TabBar
