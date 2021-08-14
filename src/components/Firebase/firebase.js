import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyCRsEsbt0wte48f4M0xsfK1UoU-kAHbdO4",
    authDomain: "e-commerce-531ed.firebaseapp.com",
    projectId: "e-commerce-531ed",
    storageBucket: "e-commerce-531ed.appspot.com",
    messagingSenderId: "669800966199",
    appId: "1:669800966199:web:97b0e8ff2bede767d9f7b2"
    
})
// Conectar el sitio a Firebase
    export const getFirebase = () => {
    return firebaseConfig
}

// Funcionalidades de Firebase
// Conectar el sitio a la base de datos
    export const getFirestore = () => {
    return firebase.firestore(firebaseConfig)
}