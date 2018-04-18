import React from 'react';
import logo from '../images/login_logo.png'
import { doLogin,clearLogin } from '../actions/index';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
	constructor(props){
		super(props);

		this.state = {username:'',password:''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		var username = this.state.username;
		var password = this.state.password;

		switch(event.target.name){
			case "username":
				username = event.target.value;
				break;
			case "password":
				password = event.target.value;
				break;
      default:
        break;
		}

		this.setState({username:username,
			             password:password});

		event.preventDefault();
	}

	handleSubmit(event){
		if(this.state.username.endsWith("@husky.neu.edu")){
      this.props.doLogin({username:this.state.username,password:this.state.password});
		}
		else{
			alert("Must provide valid Husky email address");
		}

		event.preventDefault();
	}

	render(){
		console.log(this.props.login);
    if(this.props.login){
      if(this.props.login.id && this.props.login.token){
        sessionStorage.setItem("mscs_align_neu_id",this.props.login.id);
        sessionStorage.setItem("mscs_align_neu_token",this.props.login.token);
        this.props.history.push("students");
      }else{
				alert("Must provide valid Husky credentials");
				this.props.clearLogin();
  		}
    }

		return(
      <div id="body-container">
        <div className="login-box">
          <div className="inner-box">
            {/*<img src={logo} alt="Northeastern Align">*/}
            {/*</img>*/}

			  <h3 className={'login-title'}>
				  CCIS Align Community Admin
			  </h3>

            <form onSubmit={this.handleSubmit}>
              <label htmlFor={'login-email-input'}>
                Email:
              </label>
                <input type="text"
					   className={'credential-input'}
					   name="username"
					   id={'login-email-input'}
					   value={this.state.username}
                       onChange={this.handleChange}
					   autoComplete="off"/>
              <label htmlFor={'login-password-input'}>
                Password:
              </label>
                <input type="password"
					   name="password"
                       className={'credential-input'}
                       id={'login-password-input'}
					   value={this.state.password}
                       onChange={this.handleChange}
					   autoComplete="off"/>

              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {login: state.login};
}

export default connect(mapStateToProps, {doLogin,clearLogin})(LoginForm);
