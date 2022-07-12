// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDkkGBAyT5pBx2nm69zDqruYrJbQKx-MJc",
    authDomain: "kwitter-cd5fe.firebaseapp.com",
    databaseURL: "https://kwitter-cd5fe-default-rtdb.firebaseio.com",
    projectId: "kwitter-cd5fe",
    storageBucket: "kwitter-cd5fe.appspot.com",
    messagingSenderId: "407159627831",
    appId: "1:407159627831:web:b828a3f16119728080dfb2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

gjkluiikl
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

    
}



