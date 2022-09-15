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

for (var i = 0; i < usersArray.length; i++) {
  if (logemail === usersArray[i].email) {
    userIndex = i;
    break;
  }
}

document.getElementById("navusername").innerText = usersArray[userIndex].username;
let res = window.localStorage.getItem(usersArray[userIndex].profpic);
document.getElementById("navprofpic1").src = res;
document.getElementById("navprofpic2").src = res;

hideIframe();

function hideIframe(){
  var length = document.getElementById("main").getElementsByTagName("iframe").length;
  for(var i = 0; i < length; i++)
  {
    document.getElementById("main").getElementsByTagName("iframe")[i].style.display = "none"; 
  }
}
function displayFootball(){
  hideIframe();
  document.getElementById("football").style.display = "block";
}
function displayStudent(){
  hideIframe();
  document.getElementById("student").style.display = "block";
}
function displayShapes(){
  hideIframe();
  document.getElementById("shapes").style.display = "block";
}
function displayTodo(){
  hideIframe();
  document.getElementById("todo").style.display = "block";
}