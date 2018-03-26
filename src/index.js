import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import promise from  'redux-promise';

// import '../style/align-student.css';

import AdminHome from './components/home';
import Header from './components/header';
import Footer from './components/footer';
import StudentProfile from './components/student_profile';
import Navbar from './components/left_navbar';
import Analytics from './components/analytics';

import StudentBrowser from './components/align-students/StudentBrowser';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// We use switch to handle the route problem of '/' as both index page
// and /posts/new page showed up

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="col-xs-12">
        <Header />
        <Route path='/' component={Navbar} />
        <Switch>
          <Route path='/analytics' component={Analytics} />
          <Route path='/profile/:id' component={StudentProfile} />
          <Route path='/' component={StudentBrowser} />
        </Switch>

      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
