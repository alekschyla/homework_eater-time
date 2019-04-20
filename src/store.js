import {createStore, combineReducers} from 'redux'
import eggs from './state/eggs'

const rootReducer = combineReducers({
    eggs,
});

export const store = createStore(
    rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

