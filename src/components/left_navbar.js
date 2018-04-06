import React, {Component} from 'react';
import { selectPage, checkLogin, doLogout } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class LeftNavbar extends Component{

  constructor(props) {
    super(props);
  }

  getSelectedPage(selectedPage){
    if(selectedPage==='/'){
      this.props.doLogout();
    }else{
      this.props.selectPage(selectedPage);
      this.props.history.push(selectedPage);
    }
  }

  render(){
    // if(this.props.login)
    //   console.log(this.props.login.id,this.props.login.token);
    if(!(this.props.login && this.props.login.id && this.props.login.token)){
      this.props.checkLogin();
      return "";
    }else{
      if(this.props.location.pathname=='/search') {
        var student_select="page-active";
      }else{
        var student_select = "page-inactive";
      }
      if(this.props.location.pathname.indexOf('/analytics')!=-1){
        var analytics_select="page-active";
      }else{
        var analytics_select = "page-inactive";
      }

      return(
        <div>
          <div className="left-navbar hidden-xs-down col-sm-12">
            <div className="page-inactive no-link">
              <div className="elements"><b>Align Admin Portal</b></div>
            </div>
            <div className="links">
              <div className={student_select} onClick={this.getSelectedPage.bind(this,'/search')}>
                <div className="elements">Student</div>
              </div>
            </div>
            <div className="links">
              <div className={analytics_select} onClick={this.getSelectedPage.bind(this,'/analytics')}>
                <div className="elements">Analytics</div>
              </div>
            </div>
            <div className="links">
              <div className="page-inactive"  onClick={this.getSelectedPage.bind(this,'/')}>
                <div className="elements">Logout</div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  }
}

function mapStateToProps(state){
  return {selectedPage:state.page, login:state.login};
}

export default connect(mapStateToProps,{ selectPage, checkLogin, doLogout })(LeftNavbar);
