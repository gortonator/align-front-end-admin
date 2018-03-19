import React, { Component } from 'react';
import { fetchStudent } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ProfileCard from './profile_card';


class StudentProfile extends Component{

  componentDidMount(){
    const { id }=this.props.match.params;// destructuring
    this.props.fetchStudent(id);
  }

  render(){
    if(!this.props.profile){
      return (
        <div className="container-fluid student-body">
          Loading ...
        </div>);
    }
    return (
      <div>
        <div className="col-sm-12 container-fluid student-body hidden-xs-down">
          <ProfileCard />
          <br />
          <br />
          <div className="col-sm-6">
            <table className="table large-font" style={{tableLayout: 'fixed', wordWrap: 'break-word'}}>
              <tbody>
              <tr>
                <td className="fields">Gender:</td>
                <td className="val">Female</td>
              </tr>
              <tr>
                <td className="fields">Age:</td>
                <td className="val">12</td>
              </tr>
              <tr>
                <td className="fields">Email:</td>
                <td className="val">asdasdasdasda@asd.com</td>
              </tr>
              <tr>
                <td className="fields">Contact Number:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields">Campus:</td>
                <td className="val">Spring</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <table className="table large-font">
              <tbody>
              <tr>
                <td className="fields">Start Term:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields">Expected Graduation:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields">Major:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields">Degree:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields">Enrollment:</td>
                <td className="val">Spring</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-xs-12 hidden-sm-up container-fluid student-body-sm">
          <ProfileCard />
          <br />
          <br />
          <div className="col-xs-12">
            <table className="table small-font" style={{tableLayout: 'fixed', wordWrap: 'break-word'}}>
              <tbody>
              <tr>
                <td className="fields">Gender:</td>
                <td className="val">Female</td>
              </tr>
              <tr>
                <td className="fields">Age:</td>
                <td className="val">12</td>
              </tr>
              <tr>
                <td className="fields">Email:</td>
                <td className="val">asdasdasdasda@asd.com</td>
              </tr>
              <tr>
                <td className="fields">Contact Number:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields">Campus:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields ">Start Term:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields small-font">Expected Graduation:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields">Major:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields">Degree:</td>
                <td className="val">Spring</td>
              </tr>
              <tr>
                <td className="fields">Enrollment:</td>
                <td className="val">Spring</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        </div>
    );
  };
}

function mapStateToProps(state){
  return {profile:state.profile};
}

export default connect(mapStateToProps,{ fetchStudent })(StudentProfile);
