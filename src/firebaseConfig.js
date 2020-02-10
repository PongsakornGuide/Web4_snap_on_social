import Firebase from "firebase"
  var firebaseConfig = {
    apiKey: "AIzaSyAQiXmjSps3rQCh_0R3Y8fY-H8TtMCy8XI",
    authDomain: "vuetest-d38df.firebaseapp.com",
    databaseURL: "https://vuetest-d38df.firebaseio.com", 
    projectId: "vuetest-d38df",
    storageBucket: "vuetest-d38df.appspot.com",
    messagingSenderId: "1078134181120",
    appId: "1:1078134181120:web:1a9924ddbb79b31059b7e5"
  };
//ไม่สามารถแก้ไขได้
  const firebase = Firebase.initializeApp(firebaseConfig)
  const db = firebase.database()
  
  export const userRef = db.ref('users')
  