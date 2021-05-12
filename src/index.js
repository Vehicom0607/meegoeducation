import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
//TODO change this back to BrowserRouter before deployment
import './MeeGoBootstrap.scss'
import {ReactReduxFirebaseProvider} from "react-redux-firebase";
import {rrfProps, store} from "./store/reducers/Reducer";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps} >
                <HashRouter>
                    <App />
                </HashRouter>
            </ReactReduxFirebaseProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
