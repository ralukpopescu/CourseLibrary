import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './redux/configureStore';
import {Provider as ReduxProvider} from 'react-redux';

const store=configureStore();//we can pass the initial state if we are server rendering or initializing the store with data from localStorage

ReactDOM.render(
  <ReduxProvider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
