function Student(stdid, fname, age, program) {
    this.stdid = stdid;
    this.fname = fname;
    this.age = age;
    this.program = program;
}

var studentsList = []

var student1 = new Student("2020F-BSCS-096", "Huzefa Mustafa", 20, "Computer Science");
studentsList.push(student1);

var student2 = new Student("2020F-BSCS-052", "Bilal Hamid", 20, "Computer Science");
studentsList.push(student2);

var student3 = new Student("2020F-BSCS-091", "Saim Rafi", 20, "Computer Science");
studentsList.push(student3);

var student4 = new Student("2020F-BSCS-096", "Huzefa Mustafa", 20, "Computer Science");
studentsList.push(student4);

var student5 = new Student("2020F-BSCS-052", "Bilal Hamid", 20, "Computer Science");
studentsList.push(student5);

var student6 = new Student("2020F-BSCS-091", "Saim Rafi", 20, "Computer Science");
studentsList.push(student6);

var student7 = new Student("2020F-BSCS-096", "Huzefa Mustafa", 20, "Computer Science");
studentsList.push(student7);

var student8 = new Student("2020F-BSCS-052", "Bilal Hamid", 20, "Computer Science");
studentsList.push(student8);

var student9 = new Student("2020F-BSCS-091", "Saim Rafi", 20, "Computer Science");
studentsList.push(student9);

var myTable = document.getElementsByTagName("table");

for (var i = 0; i < studentsList.length; i++) 
{
    var tr = document.createElement("tr");

    var td = document.createElement("td");
    var text = document.createTextNode(studentsList[i].stdid);
    td.appendChild(text);
    tr.appendChild(td);

    var td = document.createElement("td");
    var text = document.createTextNode(studentsList[i].fname);
    td.appendChild(text);
    tr.appendChild(td);

    var td = document.createElement("td");
    var text = document.createTextNode(studentsList[i].age);
    td.appendChild(text);
    tr.appendChild(td);

    var td = document.createElement("td");
    var text = document.createTextNode(studentsList[i].program);
    td.appendChild(text);
    tr.appendChild(td);

    myTable[0].appendChild(tr);
}