import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AcademicChart from './AcademicChart';
import AcademicTable from './AcademicTable';


class Academic extends Component {

  constructor(props){
    super(props);
  }

    render() {
      return (
          <div>
              <AcademicChart courses={this.props.courses}/>
              <AcademicTable courses={this.props.courses}/>
          </div>
      );

    }
}

const mapStateToProps = state => {
    return {
        // courses: state.profile.Courses
    };
};

// var listItems = this.props.courses.map((course) =>
//     <li key={course.CourseName}>
//         {course.courseId + ': ' + course.courseName}
//         <br/>
//         {course.Description}
//     </li>
// );
//
// return (
//     <div className="wrapper">
//         <p className="tab-content-subtitle">MY COURSES</p>
//         <ul className="grayContent">{listItems}</ul>
//     </div>
// )

export default connect(mapStateToProps)(Academic)
