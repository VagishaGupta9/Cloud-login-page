var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
   apiKey: "AIzaSyD_4K-3oDYBqcxO-57M6KhZzYa-DyWbj6E",
  authDomain: "cloudsecurity-9f619.firebaseapp.com",
  databaseURL: "https://cloudsecurity-9f619-default-rtdb.firebaseio.com",
  projectId: "cloudsecurity-9f619",
  storageBucket: "cloudsecurity-9f619.appspot.com",
  messagingSenderId: "6099559049",
  appId: "1:6099559049:web:707bffce415d2696539c58",
  measurementId: "G-4D8G18DJH2"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}
