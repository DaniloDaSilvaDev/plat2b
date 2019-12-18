import { combineReducers } from 'redux';
import sideBar from './sideBar/reducer';
import sideBarOpen from './sideBarOpen/reducer';
import auth from './auth/reducer';
import userInfos from './user/reducer';

export default combineReducers({ sideBar, sideBarOpen, auth, userInfos });
