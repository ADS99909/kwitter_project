var firebaseConfig = {
  apiKey: "AIzaSyBmtXPI6wFZVW-XS6hffSyTTcejkme8tkA",
  authDomain: "kwitterproject-60640.firebaseapp.com",
  databaseURL: "https://kwitterproject-60640-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-60640",
  storageBucket: "kwitterproject-60640.appspot.com",
  messagingSenderId: "865619289188",
  appId: "1:865619289188:web:5fc16149e30db5a0ee6b71"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);






user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
function add_room(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
   purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
 row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML +=row;

 //End code
      });});}
getData();
function redirect(name){
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
};

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}