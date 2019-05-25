// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDnBAWY2Z0VDzUpgwjFt6-pSF3pE9zni6E",
    authDomain: "top-notes-summer.firebaseapp.com",
    databaseURL: "https://top-notes-summer.firebaseio.com",
    projectId: "top-notes-summer",
    storageBucket: "top-notes-summer.appspot.com",
    messagingSenderId: "265803590036",
    appId: "1:265803590036:web:cc9382f5321a9a79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var signUpBtn = document.getElementById('signUpBtn');

  var signInBtn = document.getElementById('signInBtn');

  signUpBtn.addEventListener('click', function(){
      var emailField = document.getElementById('email').value;
      var passwordField = document.getElementById('password').value;

      firebase.auth().creatUserWithEmailAndPassword(emailField, passwordField).catch(function(error){
          if(error != null){
              console.log(error.message);
              return;
          }
          alert('User Created!');
      })
  });

  signInBtn.addEventListener('click', function(){
    var emailField = document.getElementById('email').value;
    var passwordField = document.getElementById('password').value; 
});