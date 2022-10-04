const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function showpass(myid) {
  var id = document.getElementById(myid);
  id.style.display = "none";
  id.previousElementSibling.style.display = "block"
  id.parentElement.previousElementSibling.type = "text";
}
function hidepass(myid) {
  var id = document.getElementById(myid);
  id.style.display = "none";
  id.nextElementSibling.style.display = "block"
  id.parentElement.previousElementSibling.type = "password";
}

function PushData(username, email, password, number) {
  this.username = username;
  this.email = email;
  this.password = password;
  this.number = number;
  this.ticket = [];
  this.seats = [];
}

var myData = JSON.parse(window.localStorage.getItem("Users Array"))

if (myData === null) {
  var usersArray = [];
  window.localStorage.setItem("Users Array", JSON.stringify(usersArray));
}
else {
  var usersArray = JSON.parse(window.localStorage.getItem("Users Array"));
}

document.getElementById('sucountry').addEventListener('change', () => {
  document.getElementById('countrycode').innerText = document.getElementById("sucountry").options[document.getElementById("sucountry").selectedIndex].value;
})

function savedata(sign_up) {

  var username = document.getElementById("suusername").value;
  var email = document.getElementById("suemail").value;
  var password = document.getElementById("supass").value;
  var confpassword = document.getElementById("suconfpass").value;
  var number = document.getElementById("sunumber").value;
  var country = document.getElementById("sucountry").options[document.getElementById("sucountry").selectedIndex].value;

  if (username === "" || email === "" || password === "" || confpassword === "" || number === "" || country === "") {
    alert("Information Missing, Please Enter Complete Information");
  }
  else {
    if (email !== "") {  // If something was entered
      if (!isValidEmailAddress(email)) {
        alert("Invalid Email"); //error message
        document.getElementById("suemail").focus();   //focus on email field
        return false;
      }
    }
    function isValidEmailAddress(emailAddress) {
      var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
      return pattern.test(emailAddress);
    };

    var userExist = false;
    var emailExist = false;

    for (var i = 0; i < usersArray.length; i++) {
      if (usersArray[i].username === username) {
        userExist = true;
      }
      if (usersArray[i].email === email) {
        emailExist = true;
      }
    }
    if (userExist !== false) {
      alert("This Username is Already Taken");
      document.getElementById("suusername").focus();
    }
    else {
      if (emailExist !== false) {
        alert("This Email is Already Taken");
        document.getElementById("suemail").focus();
      }
      else {
        if (number.length < 4 || number.length > 12) {
          alert("Number Length is not Valid, It should be of 4-12 digits");
          document.getElementById("sunumber").focus();
        }
        else {


          if (password !== confpassword) {
            alert("Passwords Donot Match");
            document.getElementById("suconfpass").focus();
          }
          else {
            sign_up.className = "loader";
            sign_up.value = "";
            sign_up.removeAttribute("onclick");

            number.toString();
            country += number;
            number = country;

            var user = new PushData(username, email, password, number);
            usersArray.push(user);
            setTimeout(function () {
              sign_up.className = "btn";
              sign_up.value = "Sign Up";
              sign_up.setAttribute("onclick", 'savedata(this)');
              alert("Account Created, Congratulation " + username + ", you are now One Of Us");
              document.getElementById("suusername").value = "";
              document.getElementById("suemail").value = "";
              document.getElementById("supass").value = "";
              document.getElementById("suconfpass").value = "";
              document.getElementById("sunumber").value = "";
              document.getElementById('sucountry').value = "";
              document.getElementById('countrycode').innerText = "";
            }, 5000);

            window.localStorage.setItem("Users Array", JSON.stringify(usersArray));
          }
        }
      }
    }
  }
}

function login(log_in) {
  var email = document.getElementById("siemail").value;
  var password = document.getElementById("sipass").value;
  var emailMatched = false;
  var passwordMatched = false;

  if (email === "") {
    alert("Email Missing");
    document.getElementById("siemail").focus();
  }
  else {
    if (password === "") {
      alert("Password Missing");
      document.getElementById("sipass").focus()
    }
    else {

      for (var i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email === email) {
          emailMatched = true;
          if (usersArray[i].password === password) {
            passwordMatched = true;
          }
        }
      }
      if (emailMatched) {
        if (passwordMatched) {
          log_in.className = "loader";
          log_in.value = "";
          log_in.removeAttribute("onclick");
          setTimeout(function () {
            log_in.className = "btn solid";
            log_in.value = "Login";
            log_in.setAttribute("onclick", 'login(this)');
            document.getElementById("siemail").value = "";
            document.getElementById("sipass").value = "";
            window.location.href = "../Cinema/index.html";
            window.localStorage.setItem("Login Email", JSON.stringify(email));
          }, 5000);
        }
        else {
          alert("Invalid Password Entered");
          document.getElementById("sipass").focus();
        }
      }
      else {
        alert("This Email doesnot Exist, Please Signup to create an account and be One Of Us.");
      }
    }
  }
}