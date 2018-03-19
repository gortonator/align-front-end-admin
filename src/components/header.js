import React , {Component} from 'react';

export default function(){
  return(
    <nav className="navbar navbar-default header">
      <div className="container-fluid hidden-xs-down">
        <img className="pull-left" height='80px'  src="/res/images/NEU CCIS Header.PNG" />
        <div className="main-title"><h1><b>ADMIN PORTAL</b></h1></div>
        <div className="sub-title">Align MS in Computer Science Program</div>
      </div>
      <div className="container-fluid text-align-center hidden-sm-up">
        <img className="pull-left" height='40px'  src="/res/images/NEU CCIS Header.PNG" />
        <div className="main-title"><h5><b>ADMIN</b></h5></div>
        <div className="sub-title"><h6>Align MS in Computer Science Program</h6></div>
      </div>
    </nav>
  );
}
