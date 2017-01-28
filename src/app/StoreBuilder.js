import {applyMiddleware, createStore, compose} from 'redux';
import {hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {rootReducer} from './reducers';

class StoreBuilder{

	store;

	constructor( initialState ){
		this.store = createStore(
			rootReducer,
			initialState,
			window.devToolsExtension ? window.devToolsExtension() : f => f
		);
	}

	getStore(){
		return this.store;
	}

}

const initialState = {
	asd: {
		data_structures: [
			{
				name: 'Biblioteca',
				key: 'library'
			},
			{
				name: 'Coda con priorità',
				key: 'priority-queue'
			},
			{
				name: 'Trie',
				key: 'trie'
			}
		]
	},
	routing: {}
};

const storeBuilder = new StoreBuilder( initialState );
const store = storeBuilder.getStore();
const dispatch = store.dispatch;
const history = syncHistoryWithStore( hashHistory, store );

export {
	StoreBuilder,
	store,
	dispatch,
	history
};
