import React, {Component} from 'react';
import AboutItem from "./AboutItem";
import styled from "styled-components";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            about: this.props.about
        };
    }

    render() {
        return (
            <div className="wrapper">
                <AboutTable>
                    <AboutItem labelText="Phone" keyName="phone"  value={this.state.about.phoneNum} modifiable/>
                    <AboutItem labelText="Email" type='email' keyName="email"  value={this.state.about.email} modifiable/>
                    <AboutItem labelText="Address" keyName="address"  value={this.state.about.address} modifiable/>
                    <AboutItem labelText="Linkedin" keyName="linkedin"  value={this.state.about.linkedin} modifiable isLink/>
                    <AboutItem labelText="Github" keyName="github" value={this.state.about.github} modifiable isLink/>
                    <AboutItem labelText="Facebook" keyName="facebook"  value={this.state.about.facebook} modifiable isLink/>
                    <AboutItem labelText="Website" keyName="website"  value={this.state.about.website} modifiable isLink/>
                </AboutTable>
            </div>
        )
    }
}

const AboutTable = styled.table`
        width: 100%;
        line-height: 20px;
    `
const mapStateToProps = state => {
    return {
        // about: state.profile.studentRecord
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About)
