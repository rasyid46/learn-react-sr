import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import CommentDetail from "./CommentDetail"; 
// create a react component

function getButtonText(){
	return 'Click on me';
}
// const App = () => {
//   const labelName = { text : 'Enter Name :'};
// 	return (
// 		<div>
// 			<label className="label" htmlFor="name">{labelName.text}</label>
// 			<input id="name" type="text" />
// 			<button style={{ backgroundColor: 'blue', color:'white'}}>{getButtonText()}</button>
// 		</div>
// 		); 
// };

const App = () => {
	return (
		<div className="ui container comments">
		 <CommentDetail  author="sule"/>
		 <CommentDetail  author="dani"/>
		</div>
	);
};
// take react component and share the screen

ReactDOM.render(
	<App />,
	 document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
