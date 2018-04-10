import { combineReducers } from 'redux';
import alignStudent from './align-students';
import {reducer as formReducer} from 'redux-form';
import ProfileReducer from './reducer_profile';
import PageReducer from './reducer_page';
import AnalyticsReducer from './reducer_analytics';
import LoginReducer from './reducer_login';
import MyProfileReducer from './myProfileReducer'

const rootReducer = combineReducers({
  alignStudent,
  form:formReducer,
  profile:MyProfileReducer,
  page:PageReducer,
  analytics:AnalyticsReducer,
  login:LoginReducer
});

export default rootReducer;
