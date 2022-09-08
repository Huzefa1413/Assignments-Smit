var body = document.getElementById("body");

var h1 = document.createElement("h1");
var h1text = document.createTextNode(worldCup.name);
h1.appendChild(h1text);
h1.style.fontFamily = "cursive";
h1.style.fontSize = "50px";
h1.style.borderBottom = "2px solid gray";
h1.style.padding = "10px";
body.appendChild(h1);

var div = document.createElement("div");
div.style.padding = "10px";
div.style.backgroundColor = "#eee";
body.appendChild(div);

var h2 = document.createElement("h2");
var h2text = document.createTextNode("Groups");
h2.appendChild(h2text);
h2.style.fontSize = "30px";
h2.style.fontFamily = "Arial";
div.appendChild(h2);

for(var items in worldCup.groups){

    var table = document.createElement("table");
    table.setAttribute("border","1px");
    table.style.margin = "10px";
    table.style.backgroundColor = "white";
    table.style.borderSpacing = 0;
    table.style.textAlign = "center"
    div.appendChild(table);

    var caption = document.createElement("caption");
    var captiontext = document.createTextNode(worldCup.groups[items].name);
    caption.appendChild(captiontext);
    caption.style.margin = "10px 0px";
    caption.style.textAlign = "left"; 
    caption.style.fontWeight = "bold";
    caption.style.fontSize = "1.3em";
    table.appendChild(caption);
    
    for(var i = -1; i < worldCup.groups[items].standings.length; i++)
    {
        if(i === -1)
        {
            pushTableHeadings();
        }
        else
        {
            pushTableData(worldCup.groups[items].standings[i]);   
        }
    }
}

function pushTableHeadings()
{
    var tr = document.createElement("tr");
    tr.setAttribute("bgcolor","silver");
    table.appendChild(tr)

    var th = document.createElement("th");
    var thtext = document.createTextNode("Team");
    th.setAttribute("width","150px")
    th.appendChild(thtext);
    tr.appendChild(th);

    var th = document.createElement("th");
    var thtext = document.createTextNode("GP");
    th.appendChild(thtext);
    tr.appendChild(th);

    var th = document.createElement("th");
    var thtext = document.createTextNode("W");
    th.appendChild(thtext);
    tr.appendChild(th);

    var th = document.createElement("th");
    var thtext = document.createTextNode("T");
    th.appendChild(thtext);
    tr.appendChild(th);

    var th = document.createElement("th");
    var thtext = document.createTextNode("L");
    th.appendChild(thtext);
    tr.appendChild(th);

    var th = document.createElement("th");
    var thtext = document.createTextNode("GF");
    th.appendChild(thtext);
    tr.appendChild(th);

    var th = document.createElement("th");
    var thtext = document.createTextNode("GA");
    th.appendChild(thtext);
    tr.appendChild(th);

    var th = document.createElement("th");
    var thtext = document.createTextNode("Pts");
    th.appendChild(thtext);
    tr.appendChild(th);
}

function pushTableData(data)
{
    var tr = document.createElement("tr");
            table.appendChild(tr);

            var th = document.createElement("th");
            var thtext = document.createTextNode(data.team);
            th.appendChild(thtext);
            tr.appendChild(th);
            var td = document.createElement("td");
            var tdtext = document.createTextNode(data.played);
            td.appendChild(tdtext);
            tr.appendChild(td);

            var td = document.createElement("td");
            var tdtext = document.createTextNode(data.won);
            td.appendChild(tdtext);
            tr.appendChild(td);

            var td = document.createElement("td");
            var tdtext = document.createTextNode(data.drawn);
            td.appendChild(tdtext);
            tr.appendChild(td);

            var td = document.createElement("td");
            var tdtext = document.createTextNode(data.lost);
            td.appendChild(tdtext);
            tr.appendChild(td);

            var td = document.createElement("td");
            var tdtext = document.createTextNode(data.goals_for);
            td.appendChild(tdtext);
            tr.appendChild(td);

            var td = document.createElement("td");
            var tdtext = document.createTextNode(data.goals_against);
            td.appendChild(tdtext);
            tr.appendChild(td);

            var th = document.createElement("th");
            var thtext = document.createTextNode(data.pts);
            th.appendChild(thtext);
            tr.appendChild(th);
}