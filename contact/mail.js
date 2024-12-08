const firebaseConfig = {
    apiKey: "AIzaSyBucxVvvI3RdIa-fyRQLcvPhqIBXemD1E4",
    authDomain: "game-galexy.firebaseapp.com",
    databaseURL: "https://game-galexy-default-rtdb.firebaseio.com",
    projectId: "game-galexy",
    storageBucket: "game-galexy.firebasestorage.app",
    messagingSenderId: "761461988487",
    appId: "1:761461988487:web:5a05d542bd66ec8aa3ac22"
  };


  // initialize firebase
firebase.initializeApp(firebaseConfig);
  
  // reference your database
var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };