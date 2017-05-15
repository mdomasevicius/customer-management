import {createStore, compose, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import {browserHistory} from 'react-router';

function configureStoreProd(initialState) {
    const middlewares = [
        reduxImmutableStateInvariant(),
        routerMiddleware(browserHistory),
        promise(),
        thunk,
    ];

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
        )
    );
}

function configureStoreDev(initialState) {
    const middlewares = [
        reduxImmutableStateInvariant(),
        routerMiddleware(browserHistory),
        promise(),
        logger,
        thunk,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./root-reducer', () => {
            const nextReducer = require('./root-reducer').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
