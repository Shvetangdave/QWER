// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0nVM12Thduix5ziSr2EV9jJLCJdUKsPU",
    authDomain: "classtest-4376c.firebaseapp.com",
    databaseURL: "https://classtest-4376c-default-rtdb.firebaseio.com",
    projectId: "classtest-4376c",
    storageBucket: "classtest-4376c.appspot.com",
    messagingSenderId: "627066981882",
    appId: "1:627066981882:web:c9691519be1ae943ad2843"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function addroom() {
    room_name = document.getElementById("room_name").value;

   localStorage.setItem("Roomname",room_name);

   window.location = "kwitter_page.html";

   firebase.database().ref("/").child(room_name).update({
         purpose: "Adding Room Name"
   });
}

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();