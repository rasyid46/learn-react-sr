import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import * as serviceWorker from "./serviceWorker"; 
import thunk from 'redux-thunk';
import App from "./components/App";
import reducers from './reducers';


// create a react component

// take react component and share the screen
const store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	 document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
