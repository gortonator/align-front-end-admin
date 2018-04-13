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
        };
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
                        <Col md={4} style={{'padding-top' : '40px'}}>
                            <Picture />
                        </Col>
                        <Col md={8} style={{'padding-right': '0'}}>
                            {/*<Intro summary={this.state.about.summary} handler={this.handleSummaryChange}/>*/}
                            <Intro intro={this.state.intro}/>
                        </Col>
                    </div>
                    <div className="row show-grid" style={{'margin' : '0'}}>
                        <Col md={4}>
                            <Coop workExperiences={this.state.workExperiences}/>
                        </Col>
                        <Col md={8} style={{'padding' : '0'}}>
                            <TabBar nuid={this.props.profile.neuId}
                                    courses={this.state.courses}
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
    maxWidth: 800,
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
