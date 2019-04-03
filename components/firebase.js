import * as firebase from 'firebase'  

let config = { //retrieved from my own fire base account might have to switch it to my school email 
    //running on dperezlazarte@gmail.com by mistake.
    apiKey: "AIzaSyAyXRto7GA5PIOZ274fNLE1TeoiF80z5Hk",
    authDomain: "dindin-5893b.firebaseapp.com",
    databaseURL: "https://dindin-5893b.firebaseio.com",
    projectId: "dindin-5893b",
    storageBucket: "dindin-5893b.appspot.com",
    messagingSenderId: "501045939666",
};
firebase.initializeApp(config);



export default firebase;