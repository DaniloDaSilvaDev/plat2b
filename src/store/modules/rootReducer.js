import { combineReducers } from 'redux';
import sideBar from './sideBar/reducer';
import auth from './auth/reducer';

export default combineReducers({ sideBar, auth });
