import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
    apiKey: "AIzaSyAvMMQkQPlporW7kurqbQLQybyUv5P45DM",
    authDomain: "chat-project-5d642.firebaseapp.com",
    projectId: "chat-project-5d642",
    storageBucket: "chat-project-5d642.appspot.com",
    messagingSenderId: "36400110720",
    appId: "1:36400110720:web:231f9b972070f5e6da5a65",
    measurementId: "G-N7YW88VF4R"
});

export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{
            auth, firestore, firebase
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
