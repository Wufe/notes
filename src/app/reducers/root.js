import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import asd from './asd';

export const rootReducer = combineReducers({
	asd,
    routing: routerReducer
});
