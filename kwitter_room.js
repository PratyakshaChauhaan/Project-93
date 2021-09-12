
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCC2bP8aOBkH3Lf_YAX4q00eQ0LMmVJpZ0",
      authDomain: "letschat-web-app---1-ab841.firebaseapp.com",
      databaseURL: "https://letschat-web-app---1-ab841-default-rtdb.firebaseio.com",
      projectId: "letschat-web-app---1-ab841",
      storageBucket: "letschat-web-app---1-ab841.appspot.com",
      messagingSenderId: "1059743754385",
      appId: "1:1059743754385:web:f79483d27b36fc8602f730"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name  = localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!"

function add_room()
{
    room_name = document.getElementById(" room_name").value;

    localStorage.setItem("roomname", room_name);
 
    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
