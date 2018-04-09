import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/root-reducer';
import promise from  'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import {checkLogin} from './actions/index';

import './css/bootstrap.min.css';

import './css/align-student.css';
import './css/overview.css';
import './css/style.css';
import './css/login.css';

import LoginForm from './components/login_form';
import Header from './components/header';
import Navbar from './components/left_navbar';
import Analytics from './components/analytics';
import MyProfile from './components/MyProfile/MyProfile'

import AlignStudent from './components/align-students/AlignStudent';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const RouteWithLayout = ({ component, ...rest }) => {
      return (
        <div>
          <Header />
          <Route path='/' component={Navbar} />
          <Route {...rest} render={ () => React.createElement(component) } />
        </div>
      );
    };

const Profile = ({component, ...rest}) => {
  return (
    <div>
      <div id="main-nav">
          <Route {...rest} render={ () => React.createElement(component) }/>
      </div>
    </div>
  );
};

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <div className="col-xs-12">
                <Switch>
                    <RouteWithLayout path='/analytics' component={Analytics} />
                    <Route exact path="/myProfile" component={MyProfile}/>
                    {/*<Route path='/profile/:id' component={StudentProfile} />*/}
                    <RouteWithLayout path='/search' component={AlignStudent} />
                    <Route path='/' component={LoginForm} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
