import React  from 'react';
import ReactDOM from 'react-dom'; // Responsible to render the changes of the DOM and the components
import './index.css';
import App from './App'; // This is a component
import * as serviceWorker from './serviceWorker';

// This reactDom will render by grabbing the 'root' element and inserting the component, which is the app
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
