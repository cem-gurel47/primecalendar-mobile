// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBATVHzh8QS_0x8SdvcK9itThlEDMeacLE',
  authDomain: 'primecalendar-58956.firebaseapp.com',
  projectId: 'primecalendar-58956',
  storageBucket: 'primecalendar-58956.appspot.com',
  messagingSenderId: '168974197473',
  appId: '1:168974197473:web:1a6b9f2d981a18a2b84da0',
  measurementId: 'G-MPGJ10397J',
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
