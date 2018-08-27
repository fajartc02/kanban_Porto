import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAAOO7I7WESBOVFk12QrVlXRSx1AphBW5s",
    authDomain: "kanbanfajar.firebaseapp.com",
    databaseURL: "https://kanbanfajar.firebaseio.com",
    projectId: "kanbanfajar",
    storageBucket: "kanbanfajar.appspot.com",
    messagingSenderId: "939585992348"
  };
let app = firebase.initializeApp(config)
let db = app.database();

export default db