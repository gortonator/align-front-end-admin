import React, { Component } from 'react';
import styled from 'styled-components';
import { Row,Col,Grid,css } from 'react-bootstrap';

class ProfileCard extends Component{
  render(){
    return (
      <div>
        <div className="row profile-card hidden-xs-down" >
            <div className="col-sm-6 img-card ">
                <img className="img" src="../../res/images/Profile_example_pic.png" alt="pic"/>
            </div>

            <div className="col-sm-6 name-card ">
                <div className="fields x-large-font"><label>First Name:</label></div>
                <div className="val larger-font"><label>Yudong</label></div>
                <div className="fields x-large-font"><label>Middle Name:</label></div>
                <div className="val larger-font"><label>Yudong</label></div>
                <div className="fields x-large-font"><label>Last Name:</label></div>
                <div className="val larger-font"><label>Yudong</label></div>
            </div>
        </div>

        <div className="row img-card-sm hidden-sm-up">
            <img className="img" src="../../res/images/Profile_example_pic.png" alt="pic"/>
        </div>
        <div className="row name-card-sm hidden-sm-up">
            <div className="fields large-font"><label>First Name:</label></div>
            <div className="val medium-font"><label>Yudong</label></div>
            <div className="fields large-font"><label>Middle Name:</label></div>
            <div className="val medium-font"><label>Yudong</label></div>
            <div className="fields large-font"><label>Last Name:</label></div>
            <div className="val medium-font"><label>Yudong</label></div>
        </div>
      </div>
    );
  };
}
export default ProfileCard;
