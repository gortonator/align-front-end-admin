import React, { Component } from 'react';
import Student from './student';
import { Link } from 'react-router-dom';


export default function (props){
  if(!props.list){
    return <div><br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>;
  }

  const listOfStudent= props.list.map((student)=>{
    return (

      <div className="card" key={student.id}>
        <Link to={"/profile/"+student.id} style={{textDecoration:"none"}}>
          <div className="card-block card-block-padding-sm hidden-sm-up">
            <blockquote className="card-blockquote">
                <Student student={student}/>
            </blockquote>
          </div>
          <div className="card-block card-block-padding hidden-xs-down">
            <blockquote className="card-blockquote">
                <Student student={student}/>
            </blockquote>
          </div>
        </Link>
      </div>
    );
  });
  return <div>{listOfStudent}</div>;
}
