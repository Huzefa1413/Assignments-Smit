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



