import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import rightsReducer from "../reducers/rightsReducer";

// func(store)(middleWareExample)(action);
// const middleWareExample = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("STORE:", store);
//       console.log("ACTION:", action);
//       // Logic
//       next(action)
//     }
//   }
// }

// const store = createStore(combineReducers({
//   // rights: rightsReducer,
//   // user: userReducer,
//   // stories: storiesReducer,
//   // products: productsReducer,
//   // currencies: currenciesReducer
// }), composeWithDevTools(
//   applyMiddleware(middleWareExample, thunk),
// ));

// export default store;

