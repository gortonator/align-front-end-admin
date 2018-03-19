import React, {Component} from 'react';
import { selectPage } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LeftNavbar extends Component{

  constructor(props) {
    super(props);

    this.state = { menubarHidden : true };
  }

  getSelectedPage(selectedPage){
    this.props.selectPage(selectedPage);
    this.props.history.push(selectedPage);
  }

  showHideMenuToggle(){
    console.log(this.state.menubarHidden);
    if(this.state.menubarHidden){
      this.setState({menubarHidden:false});
    }else{
      this.setState({menubarHidden:true});
    }
  }

  render(){
    if(this.props.location.pathname=='/') {
      var student_select="row page-active";
    }else{
      var student_select = "row page-inactive";
    }
    if(this.props.location.pathname=='/analytics'){
      var analytics_select="row page-active";
    }else{
      var analytics_select = "row page-inactive";
    }


    if(this.state.menubarHidden){
      var leftNavBarSmallClass="left-navbar-small small-font text-align-center col-xs-12 hidden-sm-up";
      var leftNavBarSmallExpandedClass="hidden-xs-down left-navbar-small-expanded small-font text-align-center col-xs-12 hidden-sm-up";
    }else{
      var leftNavBarSmallClass="hidden-xs-down left-navbar-small small-font text-align-center col-xs-12 hidden-sm-up";
      var leftNavBarSmallExpandedClass="left-navbar-small-expanded small-font text-align-center col-xs-12 hidden-sm-up";
    }

    return(
      <div>
        <div className="left-navbar hidden-xs-down col-sm-3">
          <br />
          <div className="row page-inactive"><i><u>Align Admin Portal</u></i></div>
          <div className="row page-inactive">Welcome, <i>Michael</i></div>
          <hr />
          <div className={student_select} onClick={this.getSelectedPage.bind(this,'/')} >Student</div>
          <br />
          <div className={analytics_select} onClick={this.getSelectedPage.bind(this,'/analytics')}>Analytics</div>
          <br />
          <div className="row page-inactive"  onClick={this.getSelectedPage.bind(this,'/profile')}>Logout</div>
          <br />
        </div>

        <div className={leftNavBarSmallClass} >
          <div className="row"><i><u>Align Admin Portal</u></i></div>
          <div  className="row">
            <div onClick={this.showHideMenuToggle.bind(this)} className="col-xs-1"><i className="fas fa-bars"></i></div>
            <div className="col-xs-10">Welcome, Michael</div>
          </div>
        </div>

        <div className={leftNavBarSmallExpandedClass} >
          <div className="row"><i><u>Align Admin Portal</u></i></div>
          <div className="row">
            <div onClick={this.showHideMenuToggle.bind(this)} className="col-xs-1"><i className="fas fa-bars"></i></div>
            <div className="col-xs-10">Welcome, Michael</div>
          </div>
          <hr />
          <div className={student_select} onClick={this.getSelectedPage.bind(this,'/')} >Student</div>
          <div className={analytics_select} onClick={this.getSelectedPage.bind(this,'/analytics')}>Analytics</div>
          <div className="row page-inactive"  onClick={this.getSelectedPage.bind(this,'/profile')}>Logout</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {selectedPage:state.page};
}

export default connect(mapStateToProps,{ selectPage })(LeftNavbar);
