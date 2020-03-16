import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleWare = [thunk];

// const store = createStore( 
//     rootReducer, 
//     initialState, 
//     compose(
//         applyMiddleware(...middleWare),
//         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
// );

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(...middleWare))
  );


export default store;