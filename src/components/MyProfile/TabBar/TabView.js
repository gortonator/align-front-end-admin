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

const STUDENT_INFORMATION_SECTIONS = {
    ABOUT: {
        value:'ABOUT',
        displayName: 'About'
    },
    ACADEMIC: {
        value: 'ACADEMIC',
        displayName: 'Academic'
    },
    EXPERIENCE: {
        value: 'EXPERIENCE',
        displayName: 'Experience'
    },
    PROJECT: {
        value: 'PROJECT',
        displayName: 'Project'
    },
    SKILL: {
        value: 'SKILL',
        displayName: 'Skill'
    }
};



class TabView extends Component {

  constructor(props){
    super(props);
    this.state = {
      display: STUDENT_INFORMATION_SECTIONS.ABOUT.value
    };

    this.changeDisplay = this.changeDisplay.bind(this);
  }

    changeDisplay(d){
        if (Object.keys(STUDENT_INFORMATION_SECTIONS).find(k => STUDENT_INFORMATION_SECTIONS[k] === d) === undefined){
            this.setState({
                display: STUDENT_INFORMATION_SECTIONS.ABOUT
            });
            return ;
        }
        this.setState({
            display: d
        });
    }



    render() {
        return (
          <div>
            <ul className="nav nav-tabs" role="tablist">

                {Object.keys(STUDENT_INFORMATION_SECTIONS).map(k => (
                    <SectionTab display={this.state.display}
                                value={STUDENT_INFORMATION_SECTIONS[k].value}
                                displayName={STUDENT_INFORMATION_SECTIONS[k].displayName}
                                changeDisplay={this.changeDisplay}/>
                ))}
            </ul>

            <div className="tab-content">
              {/*<div className="container tab-pane fade"><br />*/}
                {/*<About about={this.props.about}/>*/}
              {/*</div>*/}
              {/*<div className="container tab-pane fade"><br />*/}
                {/*<Academic courses={this.props.courses}/>*/}
              {/*</div>*/}
              {/*<div className="container tab-pane fade"><br />*/}
                {/*<Experience extraExperiences={this.props.extraExperiences}/>*/}
              {/*</div>*/}
              {/*<div className="container tab-pane fade"><br />*/}
                {/*<Project projects={this.props.projects}/>*/}
              {/*</div>*/}
              {/*<div className="container tab-pane fade"><br />*/}
                {/*<Skill skills={this.props.skills}/>*/}
              {/*</div>*/}
                {getDisplayContent(this.state.display,this.props)}
            </div>
          </div>
        )
    }
}

export default TabView;

function SectionTab(props){
    return (
        <li className="nav-item">
            <a className={"nav-link" + ' ' +
            (props.display === props.value ? 'active' : '')}
               onClick={e => {
                   e.preventDefault();
                   props.changeDisplay(props.value);
               }}
               data-toggle="tab"
               href="">
                {props.displayName}
            </a>
        </li>
    );
}

function getDisplayContent(display,props){
    console.log(props);
    switch (display){
        case STUDENT_INFORMATION_SECTIONS.ABOUT.value:
            return (
                <div className="container"><br />
                    <About about={props.about}/>
                </div>
            );
        case STUDENT_INFORMATION_SECTIONS.ACADEMIC.value:
            return (
                <div className="container"><br />
                    <Academic courses={props.courses}/>
                </div>
            );
        case STUDENT_INFORMATION_SECTIONS.EXPERIENCE.value:
            return (
                <div className="container tab-pane fade"><br />
                    <Experience extraExperiences={props.extraExperiences}/>
                </div>
            );
        case STUDENT_INFORMATION_SECTIONS.PROJECT.value:
            return (
                <div className="container tab-pane fade"><br />
                    <Project projects={props.projects}/>
                </div>
            );
        case STUDENT_INFORMATION_SECTIONS.SKILL.value:
            return (
                <div className="container tab-pane fade"><br />
                    <Skill skills={props.skills}/>
                </div>
            );
        default:
            return null;
    }
}
