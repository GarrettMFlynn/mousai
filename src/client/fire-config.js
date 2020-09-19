// config/fire-config.js
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBgVe-5e5XKg6N1--VIdPisLn6GR_J3u5o",
    authDomain: "mousai.firebaseapp.com",
    databaseURL: "https://mousai.firebaseio.com",
    projectId: "mousai",
    storageBucket: "mousai.appspot.com",
    messagingSenderId: "421415688258",
    appId: "1:421415688258:web:75cf74d144b4fc5c27f5db",
};
try {
    firebase.initializeApp(firebaseConfig);
} catch(err){
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;