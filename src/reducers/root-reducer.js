import { combineReducers } from 'redux';
import alignStudent from './align-students';
import {reducer as formReducer} from 'redux-form';
import ProfileReducer from './reducer_profile';
import PageReducer from './reducer_page';
import AnalyticsReducer from './reducer_analytics';

const rootReducer = combineReducers({
  alignStudent,
  form:formReducer,
  profile:ProfileReducer,
  page:PageReducer,
  analytics:AnalyticsReducer,
});

export default rootReducer;
