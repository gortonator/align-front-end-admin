import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/root-reducer';
import promise from  'redux-promise';
import thunkMiddleware from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

// import 'react-select/dist/react-select.css'
// import 'react-virtualized/styles.css'
// import 'react-virtualized-select/styles.css'

import './css/set-up.css';

import LoginForm from './components/login_form';
import Header from './components/header';
import Navbar from './components/NavBar';
import Analytics from './components/analytics';

import AlignStudent from './components/align-student/AlignStudent';
import NavBarAlt from './components/navbar-alt/NavBarAlt';
import './css/login.css';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/overview.css';

import './css/align-student.css';

const createStoreWithMiddleware = applyMiddleware(promise,thunkMiddleware)(createStore);

// We use switch to handle the route problem of '/' as both index page
// and /posts/new page showed up

// ReactDOM.render(
//     <Provider store={createStoreWithMiddleware(rootReducer)}>
//         <BrowserRouter>
//             <div className="col-xs-12">
//                 <Header />
//                 <Route path='/' component={Navbar} />
//                 <Switch>
//                     <Route path='/analytics' component={Analytics} />
//                     {/*<Route path='/profile/:id' component={StudentProfile} />*/}
//                     <Route path='/' component={AlignStudent} />
//                 </Switch>
//
//             </div>
//         </BrowserRouter>
//     </Provider>
//     , document.getElementById('root'));

const RouteWithLayout = ({ component, ...rest }) => {
    return (
        <div>
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
            <div>
                <Switch>
                    <RouteWithLayout path='/analytics' component={Analytics} />
                    {/*<Route exact path="/myProfile" component={MyProfile}/>*/}
                    {/*<Route path='/profile/:id' component={StudentProfile} />*/}
                    <RouteWithLayout path='/students' component={AlignStudent} />
                    <Route path='/' component={LoginForm} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();