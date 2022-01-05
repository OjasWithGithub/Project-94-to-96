
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCFcGkNE7TIyBnMX6DPph7xbyrMuYgEOss",
      authDomain: "kwitter-project-e82b1.firebaseapp.com",
      databaseURL: "https://kwitter-project-e82b1-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-e82b1",
      storageBucket: "kwitter-project-e82b1.appspot.com",
      messagingSenderId: "422203200243",
      appId: "1:422203200243:web:90152189cd65b9cf2a5d86"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
   // Gets User_Name
    user_name = localStorage.getItem("name")
    //Displays it on display_name tag
    document.getElementById("display_name").innerHTML = "Welcome " + user_name

    //Function to get data from Firebase about rooms created
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name " + Room_names);
      // Creates var row with innerHTML of output div
       row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>  " + Room_names + " </div>"
       document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();

// Adds Room

function add_room(){
      // Set room_name var to it's input
      room_name = document.getElementById("room_name")
      // Adds data to firebase HERE
      firebase.database().ref("/").child(room_name).update({
      purpose: "adding_roomname"
      });


      localStorage.setItem("room_name",room_name)
      window.location = ("Let's Chat Page.html")

}

function logout(){
      window.location = "index.html"
}

