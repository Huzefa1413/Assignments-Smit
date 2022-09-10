var myData = JSON.parse(window.localStorage.getItem("Todo Array"));

if (myData === null) {
    var todo = [];
    var i = 0;
    window.localStorage.setItem("Todo Array", JSON.stringify(todo));
    window.localStorage.setItem("ID VALUE", JSON.stringify(i));
}
else {
    var todo = JSON.parse(window.localStorage.getItem("Todo Array"));
    var i = JSON.parse(window.localStorage.getItem("ID VALUE"));;
    display();
}

function PushObject(id, input) {
    this.id = id;
    this.input = input;
    this.completed = false;
    this.deleted = false;
}

function save() {
    var input = document.getElementById('data').value;
    var data = new PushObject(i, input);
    todo.push(data);
    document.getElementById('data').value = "";
    i++;
    document.getElementById('update').style.display = "none";
    window.localStorage.setItem("Todo Array", JSON.stringify(todo));
    window.localStorage.setItem("ID VALUE", JSON.stringify(i));

    display();
}

function display() {

    var dataDiv = document.getElementById('dataDiv');
    var myData = JSON.parse(window.localStorage.getItem("Todo Array"));

    dataDiv.innerHTML = "";

    for (var i = 0; i < myData.length; i++) {

        if (myData[i].deleted === false) {
            var div = document.createElement("div");
            div.setAttribute("id", myData[i].id);
            var dataspan = document.createElement("span");
            var text = document.createTextNode(myData[i].input);
            dataspan.appendChild(text);
            
            var imgspan = document.createElement("span");
            imgspan.setAttribute("class", "done");

            var input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            input.setAttribute("onchange", "completed(this.parentElement.parentElement)");
            imgspan.appendChild(input);

            var editimg = document.createElement("img");
            editimg.setAttribute("src", "./assets/edit_icon.png");
            editimg.setAttribute("onclick", "editItem(this.parentElement.parentElement.id)")
            imgspan.appendChild(editimg);

            var removeimg = document.createElement("img");
            removeimg.setAttribute("src", "./assets/remove_icon.png");
            removeimg.setAttribute("onclick", "removeItem(this.parentElement.parentElement.id)");
            imgspan.appendChild(removeimg);

            div.appendChild(dataspan);
            div.appendChild(imgspan);

            dataDiv.appendChild(div);

            if (myData[i].completed === true) {
                dataspan.style.textDecoration = "line-through";
                input.checked = true;
                editimg.removeAttribute("onclick");
            }
        }
    }
}

function removeItem(id) {
    todo[id].deleted = true;

    window.localStorage.setItem("Todo Array", JSON.stringify(todo));

    display();
}

function completed(id) {
    if (id.childNodes[1].childNodes[0].checked) {
        todo[id.id].completed = true;
    }
    else {
        todo[id.id].completed = false;
    }

    window.localStorage.setItem("Todo Array", JSON.stringify(todo));
    display();
}

function editItem(id) {
    var item = document.getElementById(id);
    var data = item.childNodes[0].innerText;
    document.getElementById('data').value = data;
    document.getElementById('update').style.display = "block";
    editedId = id;
}

var editedId;

function updateItem() {
    var data = document.getElementById('data').value;
    document.getElementById(editedId).childNodes[0].innerText = data;
    document.getElementById('update').style.display = "none";
    todo[editedId].input = data;
    document.getElementById('data').value = '';

    window.localStorage.setItem("Todo Array", JSON.stringify(todo));
}

