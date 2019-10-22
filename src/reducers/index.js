import {combineReducers} from 'redux';
import sectionReducer from './section.reducer';

export default combineReducers({
  sections: sectionReducer,
});
