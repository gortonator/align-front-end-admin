import { combineReducers } from 'redux';
import SearchReducer from './reducer_search';
import {reducer as formReducer} from 'redux-form';
import ProfileReducer from './reducer_profile';
import PageReducer from './reducer_page';
import AnalyticsReducer from './reducer_analytics';

const rootReducer = combineReducers({
  students:SearchReducer,
  form:formReducer,
  profile:ProfileReducer,
  page:PageReducer,
  analytics:AnalyticsReducer,
});

export default rootReducer;
