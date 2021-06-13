import firebase from "firebase";
import coursesReducer from "./CoursesReducer";
import {firebaseReducer} from "react-redux-firebase";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import userReducer from "./userReducer";
import thunk from "redux-thunk";

const rrfConfig = {
    userProfile: 'users'
}
const fbConfig = {
    apiKey: "AIzaSyBkTaDnS1meoMXsSsHjY6617LoTncjWO-M",
    authDomain: "meegoeducation-da33a.firebaseapp.com",
    databaseURL: "https://meegoeducation-da33a-default-rtdb.firebaseio.com",
    projectId: "meegoeducation-da33a",
    storageBucket: "meegoeducation-da33a.appspot.com",
    messagingSenderId: "1097940856987",
    appId: "1:1097940856987:web:f4f83d87e698a51f6ad63e",
    measurementId: "G-Y83K6PZ7R7"
};

firebase.initializeApp(fbConfig)

const reducers = {
    courses: coursesReducer,
    auth: firebaseReducer,
    user: userReducer
}

const composeEnhancers = process.env.NODE_ENV === 'development' ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
const store = createStore(combineReducers(reducers), composeEnhancers(
    applyMiddleware(thunk)
));

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
}

export {rrfProps, store}