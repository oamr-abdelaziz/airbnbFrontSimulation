import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './fonts/AirbnbCerealLight.ttf';
import './fonts/AirbnbCerealBook.ttf';
import './fonts/AirbnbCerealMedium.ttf';
import './fonts/AirbnbCerealBold.ttf';
import { Provider } from 'react-redux';
import store from './store/store';



ReactDOM.render(
  <React.StrictMode>
    <Provider store= {store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
