import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default store = createStore(
    reducers,
    {}, // default state
    compose(
        applyMiddleware(thunk),
    )
);