import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from '../sagas';
import productsReducer from "../reducers/productsReducer.js";

const rootReducer = combineReducers({
    productosReducer: productsReducer,
});

const sagaMiddleware = reduxSaga();

export default () => {
    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(rootSaga)
    }
};