const body = document.body;
const header = document.querySelector("#header");

/**   Setting Menu Toggler **/

const settingMenuBox = document.querySelector(".header .row .navSetting ");
const settingsMenuIcon = document.querySelector("#settingsMenuIcon");

settingsMenuIcon.onclick = function (event) {
  event.stopPropagation();
  settingMenuBox.classList.toggle("active");
};
body.onclick = function () {
  if (settingMenuBox.classList.contains("active")) {
    settingMenuBox.classList.remove("active");
  }
};
/**   End: Setting Menu Toggler **/
var usersArray = JSON.parse(window.localStorage.getItem("Users Array"));
var logemail = JSON.parse(window.localStorage.getItem("Login Email"));

var userIndex;

for(var i = 0; i < usersArray.length; i++)
{
    if(logemail === usersArray[i].email)
    {
        userIndex = i;
        break;
    }
}

let res = window.localStorage.getItem(usersArray[userIndex].profpic);
document.getElementById("navprofpic1").src = res;


document.getElementById("profpic").src = res;
document.getElementById("username").innerText = usersArray[userIndex].username;
document.getElementById("email").innerText = usersArray[userIndex].email;
document.getElementById("password").innerText = usersArray[userIndex].password;
document.getElementById("number").innerText = usersArray[userIndex].number;
document.getElementById("gender").innerText = usersArray[userIndex].gender;
document.getElementById("dob").innerText = usersArray[userIndex].dob;
document.getElementById("postcode").innerText = usersArray[userIndex].postCode;
document.getElementById("address").innerText = usersArray[userIndex].address;
