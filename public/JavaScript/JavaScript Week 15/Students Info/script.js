function Student(stdid, fname, age, program) {
    this.stdid = stdid;
    this.fname = fname;
    this.age = age;
    this.program = program;
}

var myTable = document.getElementsByTagName("tbody");

var i = 0;

function addvalue(id, name, ages, programs) {
    var myid = document.getElementById('id').value;
    var myname = document.getElementById('name').value;
    var myage = document.getElementById('ages').value;
    var myprogram = document.getElementById('programs').value;

    if (myid === "" || myname === "" || myage === "" || myprogram === "") {
        alert("Information Missing, Please Enter Complete Information");
    }
    else {
        mystudent = new Student(myid, myname, myage, myprogram);

        var tr = document.createElement("tr");

        if (i % 2 === 1) {
            tr.setAttribute('class', 'alt');
        }

        var td = document.createElement("td");
        var text = document.createTextNode(mystudent.stdid);
        td.appendChild(text);
        tr.appendChild(td);

        var td = document.createElement("td");
        var text = document.createTextNode(mystudent.fname);
        td.appendChild(text);
        tr.appendChild(td);

        var td = document.createElement("td");
        var text = document.createTextNode(mystudent.age);
        td.appendChild(text);
        tr.appendChild(td);

        var td = document.createElement("td");
        var text = document.createTextNode(mystudent.program);
        td.appendChild(text);
        tr.appendChild(td);

        myTable[0].appendChild(tr);

        i++;

        document.getElementById('id').value = "";
        document.getElementById('name').value = "";
        document.getElementById('ages').value = "";
        document.getElementById('programs').value = "";
    }
}