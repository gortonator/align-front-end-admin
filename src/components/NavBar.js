import React, {Component} from 'react';
import { selectPage, checkLogin, doLogout } from '../actions';
import { connect } from 'react-redux';
import NavBarBrand from './navbar-alt/NavBarBrand';
import { Link } from 'react-router-dom';

class Navbar extends Component{

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
      if(this.props.location.pathname=='/students') {
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
          <div className={'al-navbar'}>

              <NavBarBrand />

              <div className={'navbar-links'}>

                  <a onClick={e => {
                    e.preventDefault();
                    this.getSelectedPage.bind(this,'/students')();
                  }} className={'navbar-link'}
                     href={''}>
                      Align Students
                  </a>

                  <a onClick={e => {
                    e.preventDefault();
                      this.getSelectedPage.bind(this,'/analytics')();
                  }} className={'navbar-link'}
                     href={''}>
                      Analytics
                  </a>

                  <a onClick={e => {
                    e.preventDefault();
                    this.getSelectedPage.bind(this,'/')();
                  }}
                     className={'logout-link'}
                     href={''}>
                      Log Out
                  </a>
              </div>
              <div className={'navbar-border'}>

              </div>
          </div>
      );
    }

  }
}

function mapStateToProps(state){
  return {selectedPage:state.page, login:state.login};
}

export default connect(mapStateToProps,{ selectPage, checkLogin, doLogout })(Navbar);
