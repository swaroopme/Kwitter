//ADD YOUR FIREBASE LINKS HERE
const config = {
      apiKey: "AIzaSyDLcTxkJoCyyI7QlGqGIV4g8jqEZ8BlchQ",
      authDomain: "kwitter-93ca5.firebaseapp.com",
      databaseURL: "https://kwitter-93ca5-default-rtdb.firebaseio.com",
      projectId: "kwitter-93ca5",
      storageBucket: "kwitter-93ca5.appspot.com",
      messagingSenderId: "441611306884",
      appId: "1:441611306884:web:af0044a6992701f2867fd1",
};

// Initialize Firebase
firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name  + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose = "adding room name"
      });

      localStorage.setItem("room_name". room_name)
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey; 
                  //Start code
               console.log("Room Names -" + Room_names);
               row = "<div class ='room_name' id =" + Room_names +"onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
               document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}