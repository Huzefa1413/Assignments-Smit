// Chap 1 Alerts

alert("Thanks for your input!");

// Chap 2 Variables for Strings

var Name = "Mark";
Name = "Ace";

var nationality;
nationality = "U.S.";

var floogle = "Mark";
var lessonAuthor = "Mark";
var guyWhoKeepsSayingHisOwnName = "Mark";
var x = "Mark";

var lastName = "Smith";
var cityOfOrigin = "New Orleans";
var aussieGreeting = "g'Day";

var nickname = "Bub";

var thanx = "Thanks for your input!"
alert(thanx);

// Chap 3 Variables for Numbers

var weight = 150;
weight + 25

var originalNum = 23;
var newNum = originalNum + 7;

var originalNum = 23;
var numToBeAdded = 7;
var newNum = originalNum + numToBeAdded;

var originalNum = 90;
originalNum = originalNum + 10;

var originalNum = "23";
var newNum = originalNum + 7;

var originalNumber = 23;
var newNumber = originalNumber + 7;

//var 1stPresident = "Washington"; //illegal
var prezWhoCame1st = "Washington";

alert(144);

var caseQty = 144;
alert(caseQty);

// Chap 4 Variable Names Legal and Illegal

// illegal variable names
// var huz efa; 
// var 1234;
// var 1huz;
// var alert;
// var #ad;

// legal variable names
// var huzefa;
// var hu1efa;
// var _jjk;
// var $jj;

// Chap 5 Math Expressions: Familar operators

var popularNumber = 4;

var popularNumber = 2 + 2;

alert(2 + 2);

var popularNumber = 12 - 24;

var popularNumber = 3 * 12;

var num = 10;
var popularNumber = num + 200;

var num = 10;
var anotherNum = 1;
var popularNumber = num + anotherNum;

var whatsLeftOver = 10 % 3;

// Chap 6 Math Expressions: Unfamiliar operators

num++;
num = num + 1;

num--;

var num = 1;
var newNum = num++;

var num = 1;
var newNum = ++num;

var num = 1;
var newNum = num--;

var num = 1;
var newNum = --num;

// Chap 7 Math Expressions: Eliminating embiguity

var totalCost = 1 + 3 * 4;

var totalCost = 1 + (3 * 4);

var totalCost = (1 + 3) * 4;

var resultOfComputation = (2 * 4) * 4 + 2;

resultOfComputation = ((2 * 4) * 4) + 2;

resultOfComputation = (2 * 4) * (4 + 2);

// Chap 8 Concatenating text strings

alert("Thanks, " + userName + "!");

var message = "Thanks, ";
var banger = "!";
alert(message + userName + banger);

alert("Thanks, " + "Susan" + "!");

var message = "Thanks, ";
var userName = "Susan";
var banger = "!";
var customMess = message + userName + banger;
alert(customMess);

alert("2" + "2");

alert("2 plus 2 equals " + 2 + 2);

// Chap 9 Prompts

var spec = prompt("Your species?", "human");

var question = "Your species?";
var defaultAnswer = "human";

var spec = prompt(question, defaultAnswer);
var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;

// Chap 10 if statements

var x = prompt("Where does the Pope live?");

if (x === "Vatican") {
    alert("Correct!");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct!");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
    score++;
    userIQ = "genius";
    alert("Correct!");
}

// Chap 11 Comparision Operators

if (fullName === "Mark" + " " + "Myers") { }
if (fullName === firstName + " " + "Myers") { }
if (fullName === firstName + " " + "Myers") { }
if (totalCost === 81.50 + 135) { }
if (totalCost === materialsCost + 135) { }
if (totalCost === materialsCost + laborCost) { }
if (x + y === a - b) { }

if (yourTicketNumber !== 487208) {
    alert("Better luck next time.");
}

if (1 > 0) { }
if (0 < 1) { }
if (1 >= 0) { }
if (1 >= 1) { }
if (0 <= 1) { }
if (1 <= 1) { }

// Chap 12 if else and else if statements

var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
    alert("Correct!");
}
if (x !== "Vatican") {
    alert("Wrong answer");
}

if (x === "Vatican") {
    alert("Correct!");
}
else {
    alert("Wrong answer");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct!");
}
else {
    score--;
    userIQ = "problematic";
    alert("Incorrect");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct!");
}
else if (x === "Rome") {
    alert("Incorrect but close");
}
else {
    alert("Incorrect");
}

// Chap 13 Testing sets of conditions

if (weight > 300 && time < 6) {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}

if (weight > 300 && time < 6 && age > 17 && gender === "male") {
    alert("Come to our tryout!");
}
else {
    alert("Come to our cookout!");
}

if (SAT > avg || GPA > 2.5 || sport === "football") {
    alert("Welcome to Bubba State!");
}
else {
    alert("Have you looked into appliance repair?");
}

if (age > 65 || age < 21 && res === "U.S.") { }

if ((age > 65 || age < 21) && res === "U.S.") { }

if (age > 65 || (age < 21 && res === "U.S.")) { }

// Chap 14 if statements nested

if ((x === y || a === b) && c === d) {
    g = h;
}
else {
    e = f;
}

if (c === d) {
    if (x === y) {
        g = h;
    }
    else if (a === b) {
        g = h;
    }
    else {
        e = f;
    }
}
else {
    e = f;
}

// Chap 15 Arrays

var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

alert("Welcome to " + cities[3]);

var mixedArray = [1, "Bob", "Now is", true];

// Chap 16 Arrays: Adding and Removing Elements

var pets = [];

pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "lizard";
pets[6] = "snake";

pets[3] = "lizard";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "snake";

pets.pop();

pets.push("fish", "ferret");

// Chap 17 Arrays: Removing, inserting, and extracting elements

pets.shift();

pets.unshift("fish", "ferret");

pets.splice(2, 2, "pig", "duck", "emu");

pets.splice(2, 0, "pig", "duck", "emu");

pets.splice(2, 2);

var noPets = pets.slice(2, 4);

// Chap 18 for loops

var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}

// Chap 19 for loops:Flags, Booleans, array length,and loops interrupts

var matchFound = "no";

var matchFound = "no";
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = "yes";
        alert("It's one of the cleanest cities");
    }
}
if (matchFound === "no") {
    alert("It's not on the list");
}

var matchFound = false;
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
    }
}
if (matchFound === false) {
    alert("It's not on the list");
}

var matchFound = false;
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;
    }
}
if (matchFound === false) {
    alert("It's not on the list");
}

var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; i < numElements; i++) {
    if (cityToCheck === cleanestCities[i]) {
        matchFound = true;
        alert("It's one of the cleanest cities");
        break;
    }
}
if (matchFound === false) {
    alert("It's not on the list");
}

// Chap 20 for loops nested

var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + lastNames[j]);
    }
}

// Chap 21 Changing Case

var cityToCheck = prompt("Enter your city");
cityToCheck = cityToCheck.toLowerCase();
var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
for (var i = 0; i <= 4; i++) {
    if (cityToCheck === cleanestCities[i]) {
        alert("It's one of the cleanest cities");
    }
}

cityToCheck = cityToCheck.toUpperCase();

// Chap 22 Strings:Measuring length and extracting parts

var firstChar = cityToCheck.slice(0, 1);
var otherChars = cityToCheck.slice(1);
firstChar = firstChar.toUpperCase();
otherChars = otherChars.toLowerCase();
var cappedCity = firstChar + otherChars;

var month = prompt("Enter a month");
var charsInMonth = month.length;
if (charsInMonth > 3) {
    monthAbbrev = month.slice(0, 3);
}

var str = prompt("Enter some text");
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
    if (str.slice(i, i + 2) === " ") {
        alert("No double spaces!");
        break;
    }
}

// Chap 23 Strings: Finding segments

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
    }
}

var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}

var text = "To be or not to be.";
var segIndex = text.lastIndexOf("be");

// Chap 24 Strings: Finding a character at a location

var firstChar = firstName.charAt(0)

var lastChar = name.charAt(name.length - 1);

for (var i = 0; i < text.length; i++) {
    if (text.charAt(i) === "!") {
        alert("Exclamation point found!");
        break;
    }
}

// Chap 25 Strings: Replacing Characters

for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === "World War II") {
        text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
    }
}

var firstChar = text.indexOf("World War II");
if (firstChar !== -1) {
    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
}

var newText = text.replace("World War II", "the Second World War");

text = text.replace("World War II", "the Second World War");

var newText = text.replace(/World War II/g, "the Second World War");

// Chap 26 Rounding Numbers

var numberOfStars = Math.round(scoreAvg);

scoreAvg = Math.round(scoreAvg);

var scoreAvg = Math.round(.0678437);

var scoreAvg = Math.ceil(.000001);

var scoreAvg = Math.floor(.999999);

// Chap 27 Generating Random Numbers

var randomNumber = Math.random(); // number between 0.0000000000000000 and 0.9999999999999999

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum); // number between 1 and 6

// Chap 28 Converting strings to integers and decimals

var currentAge = prompt("Enter your age.");
var yearsEligibleToVote = currentAge - 18;

var profit = "200" - "150";

var profit = "200" - "duck";

var result = "200" + 150;

var currentAge = prompt("Enter your age.");
var qualifyingAge = currentAge + 1;

var currentAge = prompt("Enter your age.");
var qualifyingAge = parseInt(currentAge) + 1;

var myInteger = parseInt("1.9999");

var myFractional = parseFloat("1.9999");

// Chap 29 Converting strings to numbers, numbers to strings

var integerString = "24"
var num = Number(integerString);

var floatingNumString = "24.9876";
var num = Number(floatingNumString);

var numberAsNumber = 1234;
var numberAsString = numberAsNumber.toString();

// Chap 30 Controlling the length of decimals

var total = price + (price * taxRate);

var prettyTotal = total.toFixed(2);

var currencyTotal = "$" + prettyTotal;

var prettyTotal = total.toFixed();

var str = num.toString();
if (str.charAt(str.length - 1) === "5") {
    str = str.slice(0, str.length - 1) + "6";
}
num = Number(str);
prettyNum = num.toFixed(2);

// Chap 31 Getting the current date and time

var rightNow = new Date();

var dateString = rightNow.toString();

var rightNow = new Date();
var theDay = rightNow.getDay();

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

// Chap 32 Extracting parts of the date and time

var d = new Date();

var currentMonth = d.getMonth();

var dayOfMonth = d.getDate();

var currYr = d.getFullYear();

var currentHrs = d.getHours();

var currMins = d.getMinutes();

var currSecs = d.getSeconds();

var currMills = d.getMilliseconds();

var millsSince = d.getTime()

// Chap 33 Specifying a date and time

var today = new Date();
var doomsday = new Date("June 30, 2035");
var msToday = today.getTime();
var msDoomsday = doomsday.getTime();
var msDiff = msDoomsday - msToday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);

var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));

var d = new Date("July 21, 1983 13:25:00");

// Chap 34 Changing elements of a date and time

var d = new Date();
d.setFullYear(2001);

var d = new Date();
d.setMonth(11);

var d = new Date();
d.setDate(15);

var d = new Date();
d.setHours(13);

var d = new Date();
d.setMinutes(05);

var d = new Date();
d.setSeconds(55);

var d = new Date();
d.setMilliseconds(867);

// Chap 35 Functions

var now = new Date();
var theHr = now.getHours();
var theMin = now.getMinutes();
alert("time: " + theHr + ":" + theMin);

tellTime();

function tellTime() {
    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    alert("Current time: " + theHr + ":" + theMin);
}

// Chap 36 Functions: Passing them data

function greetUser() {
    alert("Hello, there.");
}

greetUser("Hello, there.");

function greetUser(greeting) {
    alert(greeting);
}

function greetUser(greeting) {
    alert(greeting);
}

var whatever = "Hello, there.";
greetUser(whatever);

var almostAMil = 999999;
showBigNum(almostAMil);

showBigNum(999999);

function showMessage(m, string, num) {
    alert(m + string + num);
}

var month = "March";
showMessage(month, "'s winner number is ", 23);

// Chap 37 Functions: Passing data back from them

var orderTot;
if (merchTot >= 100) {
    orderTot = merchTot;
}
else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
}
else {
    orderTot = merchTot + 5 + (.03 * (merchTot - 50));
}

function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
        orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
        orderTot = merchTot + 5;
    }
    else {
        orderTot = merchTot + 5 + (.03 * (merchTot - 50));
    }
    return orderTot;
}

var totalToCharge = calcTot(79.99);

alert(calcTot(79.99));

var orderTot = merchTot + calcTax(merchTot);

function calcTot(price) {
    return price + calcShip(price);
}

// Chap 38 Functions: Local vs. global variables

var theSum
addNumbers();
function addNumbers() {
    theSum = 2 + 2;
}
alert(theSum);

function addNumbers() {
    var theSum = 2 + 2;
}
alert(theSum);

var theSum = 1000;
addNumbers();
function addNumbers() {
    var theSum = 2 + 2;
}

// Chap 39 switch statements: How to start them

switch (dayOfWk) {
    case "Sat":
        alert("Whoopee");
        break;
    case "Sun":
        alert("Whoopee");
        break;
    case "Fri":
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}

// Chap 40 switch statements: How to complete them

switch (dayOfWk) {
    case "Sat":
        alert("Whoopee");
        break;
    case "Sun":
        alert("Whoopee");
        break;
    case "Fri":
        alert("TGIF!");
        break;
    default:
        alert("Shoot me now!");
}

// Chap 41 while loops

var i = 0;
while (i <= 3) {
    alert(i);
    i++;
}

// Chap 42 do...while loops

var i = 0;
do {
    alert(i);
    i++;
} while (i <= 3);

var i = 0;
while (i < 0) {
    alert(i);
    i++;
}

var i = 0;
do {
    alert(i);
    i++;
} while (i < 0);


// Chap 45 Events: link

function popup(message) {
    alert(message);
}

// Chap 49 Reading field values

function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("Email address required.");
    }
}

// Chap 50 Setting field values

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608":
            cityName = "Chicago";
            break;
        case "68114":
            cityName = "Omaha";
            break;
        case "53212":
            cityName = "Milwaukee";
    }
    document.getElementById("city").value = cityName;
}

// Chap 51 Reading and setting paragraph text

function expandLoris() {
    var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus.They have a round head, narrow snout, large eyes, and a variety of distinctive coloration patterns that are species - dependent.The hands and feet of slow lorises have several adaptations that give them a pincer - like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals.";
    document.getElementById("slowLoris").innerHTML = expandedParagraph;
}

function placeAList() {
    var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
    document.getElementById("lorisList").innerHTML = listToPlace;
}

function peekAtContent() {
    var whatsThere = document.getElementById("content").innerHTML;
}
// Chap 52 Manipulating images and text

function makeInvisible() {
    document.getElementById("ugly").className = "hidden";
}

// Chap 53 Swapping images

function swapPic() {
    document.getElementById("before").src = "after-pic.jpg";
}

function swapPic(eId, newPic) {
    document.getElementById(eId).src = newPic;
}

// Chap 54 Swapping images and setting classes

function swapPic() {
    document.getElementById("before").src = "after-pic.jpg";
}

function swapPic() {
    var pic = document.getElementById("before");
    pic.src = "after-pic.jpg";
}

function getAddress() {
    var link = document.getElementById("link1");
    var address = link.href;
}

function enlargeForm() {
    var frm = document.getElementById("link1");
    frm.className = "jumbo";
}

// Chap 55 Setting styles

function makeBig() {
    document.getElementById("p1").className += " big";
}

function makeBig() {
    document.getElementById("p1").style.fontSize = "2em";
}

document.getElementById("pic99").style.cssFloat = "left";

document.getElementById("div9").style.visibility = "hidden";

document.getElementById("mainPic").style.margin = "0 10px 0 10px;";

var m = document.getElementById("mainPic").style.margin;

var m = document.getComputedStyle("mainPic").margin;

// Chap 56 Target all elements by tag name

var par = document.getElementsByTagName("p");

var textInMiddleParagraph = par[1].innerHTML;

par[1].innerHTML = "This SUV is too big.";

for (var i = 0; i < par.length; i++) {
    par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
}

var pics = document.getElementsByTagName("img");

var divs = document.getElementsByTagName("div");

var ulists = document.getElementsByTagName("ul");

// Chap 57 Target some elements by tag name

var e = document.getElementByID("rules");
var paragraphs = e.getElementsByTagName("p");

var t = document.getElementById("table9");
var cells = t.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor = "pink";
}

// Chap 60 The DOM: Finding Children

var p = document.getElementsByTagName("p");
var contents = p[4].innerHTML;

var div = document.getElementById("ny");
var p = div.getElementsByTagName("p");
var contents = p[1].innerHTML;

var p = document.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
var contents = p.innerHTML;

var d = document.getElementById("ny");
var p = d.childNodes[1];
var contents = p.innerHTML;

// Chap 61 The DOM: Junk artifacts and nodeType

var nType = targetNode.nodeType;

var d = document.getElementById("humpty");
var pCounter = 0;
for (var i = 0; i < d.childNodes.length; i++) {
    if (d.childNodes[i].nodeType === 1) {
        pCounter++;
    }
    if (pCounter === 2) {
        d.childNodes[i].innerHTML = "All his men.";
        break;
    }
}

// Chap 62 The DOM: More ways to target elements

var targetNode = parentNode.childNodes[0];

var targetNode = parentNode.firstChild;

var targetNode = parentNode.childNodes[2]

var targetNode = parentNode.lastChild;

var kidNode = document.getElementById("div2");
var pNode = kidNode.parentNode;

var firstEl = document.getElementById("div1");
secondEl = firstEl.nextSibling;

var firstEl = document.getElementById("div1");
var nonexistentEl = firstEl.previousSibling;

// Chap 63 The DOM: Getting a target's name

var parent = document.getElementById("div1");
var target = parent.firstChild;
nName = target.nodeName;

var parent = document.getElementById("div1");
var target = parent.firstChild;
var nTextContent = target.nodeValue;

// Chap 64 The DOM: Counting elements

var liElements = getElementsByTagName("li");
var howManyLi = liElements.length;
for (var i = 0; i < howManyLi; i++) {
    if (liElements[i].innerHTML === "") {
        liElements[i].innerHTML = "coming soon";
    }
}

var parentNode = document.getElementById("d1");
var nodeList = parentNode.childNodes;

var howManyKids = nodeList.length;

var numberPics = 0;
for (var i = 0; i < howManyKids; i++) {
    if (nodelist[i].nodeName.toLowerCase() === "img") {
        numberPics++;
    }
}

// Chap 65 The DOM: Attributes

var target = document.getElementById("p1");
var hasClass = target.hasAttribute("class");

var target = document.getElementById("div1");
var attVal = target.getAttribute("class");

var target = document.getElementById("div1");
target.setAttribute("class", "special");

// Chap 66 The DOM: Attribute names and values

var list = document.getElementsByTagName("p");

var list = document.getElementById("p1").childNodes;

var list = document.getElementById("p1").attributes;

var numOfItems = list.length;

var numOfItems = document.getItemById("p1").attributes.length;

var nName = list[2].nodeName;

var nValue = list[2].nodeValue;

// Chap 67 The DOM: Adding nodes

var nodeToAdd = document.createElement("p");
nodeToAdd.setAttribute("class", "regular")

var imgNodeToAdd = document.createElement("img");
imgNodeToAdd.setAttribute("border", "1");

var newTxt = document.createTextNode("Hello!");
nodeToAdd.appendChild(newTxt);

// Chap 67 The DOM: Inserting nodes

var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
parentDiv.appendChild(newParagraph);

var parentDiv = document.getElementById("div1");
var newParagraph = document.createElement("p");
var t = document.createTextNode("Hello world!");
newParagraph.appendChild(t);
paragraph1 = parentDiv.firstChild;
parentDiv.insertBefore(newParagraph, paragraph1);

var target = parentDiv.childNodes[1];
parentDiv.insertBefore(newE, target.nextSibling);

var parentDiv = document.getElementById("div1");
var nodeToRemove = parentDiv.childNodes[2];
parentDiv.removeChild(nodeToRemove);