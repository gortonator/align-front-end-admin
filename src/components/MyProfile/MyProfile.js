import React, {Component} from 'react';
import Picture from './Picture/Picture'
import Intro from './Intro/Intro'
import Coop from './Coop/Coop'
import TabBar from './TabBar/TabBar'
import styled from "styled-components";
import {Grid, Row, Col, css} from 'react-bootstrap';
import {connect} from 'react-redux';

class MyProfile extends Component {


    componentWillMount() {
        // console.log("yudong1");
        // this.props.fetchMyProfile();
    }


    constructor(props) {
        super(props);
        console.log("new props",props);
        // this.handleSummaryChange = this.handleSummaryChange.bind(this);
        this.state={
          intro:props.profile,
          workExperiences:props.profile.company,
          courses:props.profile.courses,
          extraExperiences:[],
          projects:[],
          skills:'',
          about:props.profile
        }
        // this.state = {
        //     //====================================================
        //     //The following can not be changed
        //     intro: {
        //         nuid: '2',
        //         firstname: 'Yudong',
        //         lastname: 'Wang',
        //         middlename: 'N/A',
        //
        //         gender: 'Male',
        //         age: 22,
        //         email: null,
        //         campus: 'Boston',
        //         startterm: 'Spring 2016',
        //         expectedgraduation: 'June 2018',
        //         enrollmentstatus: 'Yes (active student)',
        //         photo: 'empty',
        //     },
        //
        //     workExperiences: [
        //         {
        //             WorkExperienceId: '',
        //             NeuId: '',
        //             CompanyName: '',
        //             StartDate: '',
        //             EndDate: '',
        //             CurrentJob: '',
        //             Title: '',
        //             Description: '',
        //         },
        //     ],
        //
        //     courses: [
        //         {
        //             CourseId: '',
        //             CourseName: '',
        //             Description: '',
        //         },
        //     ],
        //
        //     extraExperiences: [
        //         {
        //             WorkExperienceId: '',
        //             NeuId: '',
        //             CompanyName: '',
        //             StartDate: '',
        //             EndDate: '',
        //             CurrentJob: '',
        //             Title: '',
        //             Description: '',
        //         },
        //     ],
        //
        //     projects: [
        //         {
        //             ProjectId: '',
        //             NeuId: '',
        //             ProjectName: '',
        //             StartDate: '',
        //             EndDate: '',
        //             Description: '',
        //         },
        //     ],
        //
        //     skills: '',
        //
        //
        //     //=====================================================
        //     //The following can be changed
        //     about: {
        //         Phone: '',
        //         Address: '',
        //         Linkedin: '',
        //         Facebook: '',
        //         Github: '',
        //         Website: '',
        //         Birthday: '',
        //         summary: 'Hi, I am Yudong. I am a M.S. candidate in Computer Science from Northeastern University-Seattle' +
        //         'campus. Graduate date: June, 2018 (Expected) Please feel free to contact me via ' +
        //         'wangyudong53138@gmail.com',
        //         privacy: true,
        //     }
        //
        //
        //     //======================================================
        //     //The following is for pop up window
        //
        // };
    }


    // handleSummaryChange(event) {
    //     let curState = this.state;
    //     curState.about.summary = event;
    //     this.setState(curState);
    //     console.log("change", this.state.about.summary);
    // }

    render() {
        return (
            <Wrapper>
                <div style={{margin: "0"}}>
                    <div className="row show-grid row-eq-height">
                        <Col md={4}>
                            <Picture />
                        </Col>
                        <Col md={8}>
                            {/*<Intro summary={this.state.about.summary} handler={this.handleSummaryChange}/>*/}
                            <Intro intro={this.state.intro}/>
                        </Col>
                    </div>
                    <div className="row show-grid">
                        <Col md={4}>
                            <Coop workExperiences={this.state.workExperiences}/>
                        </Col>
                        <Col md={8}>
                            <TabBar courses={this.state.courses}
                            extraExperiences={this.state.extraExperiences}
                            projects={this.state.projects}
                            skills={this.state.skills}
                            about={this.state.about}/>
                        </Col>
                    </div>
                </div>
            </Wrapper>
        );
    }
}

const divStyle = {
    margin: "0",
    maxWidth: 700,
};
const Wrapper = styled.div`
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    width: 100%;
    margin: auto;
    `;


const mapStateToProps = state => {
    return {
        // summary: state.profile.studentRecord.summary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // fetchMyProfile: () => dispatch(fetchMyProfile())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
