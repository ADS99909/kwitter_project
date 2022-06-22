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
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_with_tag="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='likes(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_with_tag+span_with_tag;
document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}function back(){
      window.location="kwitter_room.html";
}

function likes(message_id) { 
      
    console.log("clicked on like button - " + message_id);
     button_id = message_id; 
     likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
       console.log(updated_likes);
        firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
    }