import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;
