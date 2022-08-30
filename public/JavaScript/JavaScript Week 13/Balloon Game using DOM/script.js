// body START

var myDom = document.getElementById("body"); //HTML

myDom.style.background = "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"; //CSS
myDom.style.backgroundSize = "400% 400%"; //CSS
myDom.style.animation = "change 10s ease-in-out infinite"; //CSS
myDom.style.position = "relative"; //CSS
myDom.style.width = "100%"; //CSS
myDom.style.height = "100vh"; //CSS

// body END

// h1 START

var h1 = document.createElement("h1"); //HTML
var h1Text = document.createTextNode("Balloon Popping Game"); //HTML
h1.appendChild(h1Text); //HTML
myDom.appendChild(h1); //HTML

h1.style.textAlign = "center"; //CSS
h1.style.fontFamily = "cursive"; //CSS
h1.style.padding = "20px"; //CSS

// h1 END

// h3 START

var h3 = document.createElement("h3"); //HTML
var h3Text = document.createTextNode("Rules:"); //HTML
h3.appendChild(h3Text); //HTML
myDom.appendChild(h3); //HTML

h3.style.margin = "0px 8px"; //CSS

// h3 END

// ul START

var ul = document.createElement("ul"); //HTML
var li1 = document.createElement("li"); //HTML
var li2 = document.createElement("li"); //HTML
var li3 = document.createElement("li"); //HTML
var li1Text = document.createTextNode("Click on the Balloon Matching the Color"); //HTML
var li2Text = document.createTextNode("Incorrect Balloon will result in Game Over"); //HTML
var li3Text = document.createTextNode("Correct Balloon will increase Score"); //HTML
li1.appendChild(li1Text); //HTML
li2.appendChild(li2Text); //HTML
li3.appendChild(li3Text); //HTML
ul.appendChild(li1); //HTML
ul.appendChild(li2); //HTML
ul.appendChild(li3); //HTML
myDom.appendChild(ul); //HTML

ul.style.margin = "0px 58px"; //CSS
ul.style.padding = "10px"; //CSS

// ul END

// hr START

var firsthr = document.createElement("hr"); //HTML
myDom.appendChild(firsthr); //HTML

// hr END

// h2 START

var firsth2 = document.createElement("h2"); //HTML
var firsth2Text = document.createTextNode("Score : "); //HTML
var firsth2Span = document.createElement("span"); //HTML
firsth2Span.setAttribute("id","score"); //HTML
firsth2.appendChild(firsth2Text); //HTML
firsth2.appendChild(firsth2Span); //HTML
myDom.appendChild(firsth2); //HTML

firsth2.style.margin = "0px 8px"; //CSS
firsth2.style.padding = "10px"; //CSS

// h2 END

// hr START

var secondhr = document.createElement("hr"); //HTML
myDom.appendChild(secondhr); //HTML

// hr END

// h2 START

var secondh2 = document.createElement("h2"); //HTML
secondh2.setAttribute("style","text-align: center; padding: 20px;");
var secondh2Text = document.createTextNode("Color To POP: "); //HTML
var secondh2Span = document.createElement("span"); //HTML
secondh2Span.setAttribute("id","popColor"); //HTML
secondh2.appendChild(secondh2Text); //HTML
secondh2.appendChild(secondh2Span); //HTML
myDom.appendChild(secondh2); //HTML

secondh2.style.textAlign = "center"; //CSS
secondh2.style.padding = "20px"; //CSS
secondh2Span.style.padding = "10px"; //CSS
secondh2Span.style.borderRadius = "10px"; //CSS

// h2 END

// div START

var mainDiv = document.createElement("div"); //HTML
mainDiv.setAttribute("class","balloons");
myDom.appendChild(mainDiv); //HTML

mainDiv.style.display = "flex"; //CSS
mainDiv.style.flexWrap = "wrap"; //CSS
mainDiv.style.alignItems = "center"; //CSS
mainDiv.style.justifyContent = "center"; //CSS

// div END

// Balloons START

var div1 = document.createElement("div");
div1.setAttribute("id","balloon1");
div1.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div1);

var div2 = document.createElement("div");
div2.setAttribute("id","balloon2");
div2.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div2);

var div3 = document.createElement("div");
div3.setAttribute("id","balloon3");
div3.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div3);

var div4 = document.createElement("div");
div4.setAttribute("id","balloon4");
div4.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div4);

var div5 = document.createElement("div");
div5.setAttribute("id","balloon5");
div5.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div5);

var div6 = document.createElement("div");
div6.setAttribute("id","balloon6");
div6.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div6);

var div7 = document.createElement("div");
div7.setAttribute("id","balloon7");
div7.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div7);

var div8 = document.createElement("div");
div8.setAttribute("id","balloon8");
div8.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div8);

var div9 = document.createElement("div");
div9.setAttribute("id","balloon9");
div9.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div9);

var div10 = document.createElement("div");
div10.setAttribute("id","balloon10");
div10.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div10);

var div11 = document.createElement("div");
div11.setAttribute("id","balloon11");
div11.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div11);

var div12 = document.createElement("div");
div12.setAttribute("id","balloon12");
div12.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div12);

var div13 = document.createElement("div");
div13.setAttribute("id","balloon13");
div13.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div13);

var div14 = document.createElement("div");
div14.setAttribute("id","balloon14");
div14.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div14);

var div15 = document.createElement("div");
div15.setAttribute("id","balloon15");
div15.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div15);

var div16 = document.createElement("div");
div16.setAttribute("id","balloon16");
div16.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div16);

var div17 = document.createElement("div");
div17.setAttribute("id","balloon17");
div17.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div17);

var div18 = document.createElement("div");
div18.setAttribute("id","balloon18");
div18.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div18);

var div19 = document.createElement("div");
div19.setAttribute("id","balloon19");
div19.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div19);

var div20 = document.createElement("div");
div20.setAttribute("id","balloon20");
div20.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div20);

var div21 = document.createElement("div");
div21.setAttribute("id","balloon21");
div21.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div21);

var div22 = document.createElement("div");
div22.setAttribute("id","balloon22");
div22.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div22);

var div23 = document.createElement("div");
div23.setAttribute("id","balloon23");
div23.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div23);

var div24 = document.createElement("div");
div24.setAttribute("id","balloon24");
div24.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div24);

var div25 = document.createElement("div");
div25.setAttribute("id","balloon25");
div25.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div25);

var div26 = document.createElement("div");
div26.setAttribute("id","balloon26");
div26.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div26);

var div27 = document.createElement("div");
div27.setAttribute("id","balloon27");
div27.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div27);

var div28 = document.createElement("div");
div28.setAttribute("id","balloon28");
div28.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div28);

var div29 = document.createElement("div");
div29.setAttribute("id","balloon29");
div29.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div29);

var div30 = document.createElement("div");
div30.setAttribute("id","balloon30");
div30.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div30);

var div31 = document.createElement("div");
div31.setAttribute("id","balloon31");
div31.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div31);

var div32 = document.createElement("div");
div32.setAttribute("id","balloon32");
div32.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div32);

var div33 = document.createElement("div");
div33.setAttribute("id","balloon33");
div33.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div33);

var div34 = document.createElement("div");
div34.setAttribute("id","balloon34");
div34.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div34);

var div35 = document.createElement("div");
div35.setAttribute("id","balloon35");
div35.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div35);

var div36 = document.createElement("div");
div36.setAttribute("id","balloon36");
div36.setAttribute("onclick","colorCheck(this.id)");
mainDiv.append(div36);

// Balloons END

// JAVASCRIPT CODE

var colorArray = ["RED", "ORANGE", "YELLOW", "GREEN", "BLUE", "SILVER", "HOTPINK"];
var score = 0;

for(var i = 1; i <= 36; i++)
{
    var color = Math.floor(Math.random() * 7);
    document.getElementById("balloon"+i).style.backgroundColor = colorArray[color];
}

document.getElementById("score").innerText = score;

var popColor = Math.floor(Math.random() * 7);
document.getElementById("popColor").innerText = colorArray[popColor];
document.getElementById("popColor").style.backgroundColor = colorArray[popColor];

function colorCheck(selectedBalloon)
{
    var selectedBalloonColor = document.getElementById(selectedBalloon).style.backgroundColor;

    if(selectedBalloonColor.toUpperCase() === colorArray[popColor])
    {
        document.getElementById(selectedBalloon).classList.add("animation"); 
        
        score++;
        document.getElementById("score").innerText = score;

        popColor = Math.floor(Math.random() * 7);
        document.getElementById("popColor").innerText = colorArray[popColor];
        document.getElementById("popColor").style.backgroundColor = colorArray[popColor];

        var newColor = Math.floor(Math.random() * 7);
        document.getElementById(selectedBalloon).style.backgroundColor = colorArray[newColor];
    }
    else
    {
        alert("Game Over")

        score = 0;
        document.getElementById("score").innerText = score;

        for(var i = 1; i <= 36; i++)
        {
            var color = Math.floor(Math.random() * 7);
            document.getElementById("balloon"+i).style.backgroundColor = colorArray[color];
        }

        popColor = Math.floor(Math.random() * 7);
        document.getElementById("popColor").innerText = colorArray[popColor];
        document.getElementById("popColor").style.backgroundColor = colorArray[popColor];
    }
    resetAnimation(selectedBalloon);
}

function resetAnimation(balloon)
{
    var el = document.getElementById(balloon);
    el.style.animation = "none";
    el.offsetHeight;
    el.style.animation = null;
}



