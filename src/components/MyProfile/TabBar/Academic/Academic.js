import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class Academic extends Component {

  constructor(props){
    super(props);
  }

    render() {

        var listItems = this.props.courses.map((course) =>
            <li key={course.CourseName}>
                {course.courseId + ': ' + course.courseName}
                <br/>
                {course.Description}
            </li>
        );

        return (
            <div className="wrapper">
                <p className="tab-content-subtitle">MY COURSES</p>
                <ul className="grayContent">{listItems}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        // courses: state.profile.Courses
    };
};



export default connect(mapStateToProps)(Academic)
