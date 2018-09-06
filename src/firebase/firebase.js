import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDnFzYY6WO2Y8JcOR-ml5O97bpHhd_ddOY",
    authDomain: "learningauth-95ee8.firebaseapp.com",
    databaseURL: "https://learningauth-95ee8.firebaseio.com",
    projectId: "learningauth-95ee8",
    storageBucket: "learningauth-95ee8.appspot.com",
    messagingSenderId: "480088182711"
};

if(!firebase.apps.length) firebase.initializeApp(config)

const auth = firebase.auth()

export {
    auth
}