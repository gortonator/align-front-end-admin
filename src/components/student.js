import React from 'react';

export default function (props){
  return(
  <div>
    <div className="row hidden-xs-down text-align-center student-search-list-values word-wrap ">
      <div className="col-sm-3">Student 1</div>
      <div className="col-sm-2">Silicon Valley</div>
      <div className="col-sm-5">student1@gmail.com</div>
      <div className="col-sm-2">Full-Time</div>
    </div>

    <div className="row hidden-sm-up small-font text-align-center student-search-list-values word-wrap ">
      <div className="col-xs-6">Student 1</div>
      <div className="col-xs-6">student1@gmail.com</div>
    </div>

    <div className="row hidden-xs-down small-font text-align-center student-search-list-labels word-wrap">
      <div className="col-sm-3">NAME</div>
      <div className="col-sm-2">LOCATION</div>
      <div className="col-sm-5">EMAIL ID</div>
      <div className="col-sm-2">TYPE</div>
    </div>
    <div className="row hidden-sm-up x-small-font text-align-center student-search-list-labels-sm word-wrap">
      <div className="col-xs-6">NAME</div>
      <div className="col-xs-6">EMAIL ID</div>
    </div>
  </div>
  );
}
