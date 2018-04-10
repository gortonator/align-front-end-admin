import React, {Component} from 'react';
import { selectPage } from '../actions/index';
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
    // console.log(this.state.menubarHidden);
    if(this.state.menubarHidden){
      this.setState({menubarHidden:false});
    }else{
      this.setState({menubarHidden:true});
    }
  }

  render(){
    if(this.props.location.pathname=='/') {
      var student_select="page-active";
    }else{
      var student_select = "page-inactive";
    }
    if(this.props.location.pathname.indexOf('/analytics')!=-1){
      var analytics_select="page-active";
    }else{
      var analytics_select = "page-inactive";
    }


    if(this.state.menubarHidden){
      var leftNavBarSmallClass="left-navbar-small small-font text-align-center col-xs-12 hidden-sm-up";
      var leftNavBarSmallExpandedClass="hidden-xs-down left-navbar-small-expanded small-font col-xs-12 hidden-sm-up";
    }else{
      var leftNavBarSmallClass="hidden-xs-down left-navbar-small small-font text-align-center col-xs-12 hidden-sm-up";
      var leftNavBarSmallExpandedClass="left-navbar-small-expanded small-font col-xs-12 hidden-sm-up";
    }

    return(
      <div>
        <div className="left-navbar hidden-xs-down col-sm-12">
          <div className="page-inactive no-link">
            <div className="elements"><b>Align Admin Portal</b></div>
          </div>
          <div className="links">
            <div className={student_select} onClick={this.getSelectedPage.bind(this,'/')}>
              <div className="elements">Student</div>
            </div>
          </div>
          <div className="links">
            <div className={analytics_select} onClick={this.getSelectedPage.bind(this,'/analytics')}>
              <div className="elements">Analytics</div>
            </div>
          </div>
          <div className="links">
            <div className="page-inactive"  onClick={this.getSelectedPage.bind(this,'/profile')}>
              <div className="elements">Logout</div>
            </div>
          </div>
        </div>

        <div className={leftNavBarSmallClass} >
          <div className="row"><b>Align Admin Portal</b><div onClick={this.showHideMenuToggle.bind(this)} className="col-xs-1"><i className="fas fa-bars"></i></div></div>
        </div>

        <div className={leftNavBarSmallExpandedClass} >
          <div className="row text-align-center"><b>Align Admin Portal</b><div onClick={this.showHideMenuToggle.bind(this)} className="col-xs-1"><i className="fas fa-bars"></i></div></div>
          <hr />
          <div className={student_select} onClick={this.getSelectedPage.bind(this,'/')}>&nbsp;&nbsp;Student</div>
          <div className={analytics_select} onClick={this.getSelectedPage.bind(this,'/analytics')}>&nbsp;&nbsp;Analytics</div>
          <div className="page-inactive"  onClick={this.getSelectedPage.bind(this,'/profile')}>&nbsp;&nbsp;Logout</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {selectedPage:state.page};
}

export default connect(mapStateToProps,{ selectPage })(LeftNavbar);
