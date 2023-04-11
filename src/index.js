import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirebaseContext } from './store/Context';
import Context from './store/Context'
import firebase  from './firebase/config';

ReactDOM.render(
    // initialize cheytha firebase object aanu ivde provider value aayittu pass cheyyunnath
    <FirebaseContext.Provider value={{ firebase }} > 
        <Context>
            <App />
        </Context>
    </FirebaseContext.Provider>
    , document.getElementById('root'));
