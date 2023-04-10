import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import firebase  from './firebase/config';

ReactDOM.render(
    // initialize cheytha firebase object aanu ivde provider value aayittu pass cheyyunnath
    <FirebaseContext.Provider value={{ firebase }} > 
        <App />
    </FirebaseContext.Provider>
    , document.getElementById('root'));
