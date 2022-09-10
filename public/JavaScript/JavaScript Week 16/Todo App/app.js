var todo = [];

function PushObject(id,input){
    this.id = id;
    this.input = input;
    this.completed = false;
    this.deleted = false;
}

function save(){
    var input = document.getElementById('data').value;
    var data = new PushObject(todo.length,input);
    todo.push(data);
    display(todo[(todo.length)-1]);
    document.getElementById('data').value = "";
}

var dataDiv = document.getElementById('dataDiv');

function display(Todo){
    var div = document.createElement("div");
    div.setAttribute("id",Todo.id);
    var dataspan = document.createElement("span");
    var text = document.createTextNode(Todo.input);
    dataspan.appendChild(text);
    
    var imgspan = document.createElement("span");
    imgspan.setAttribute("class","done");
    
    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    input.setAttribute("onchange","completed(this.parentElement.parentElement)");
    imgspan.appendChild(input);

    var editimg = document.createElement("img");
    editimg.setAttribute("src","./assets/edit_icon.png");
    editimg.setAttribute("onclick","editItem(this.parentElement.parentElement.id)")
    imgspan.appendChild(editimg);

    var removeimg = document.createElement("img");
    removeimg.setAttribute("src","./assets/remove_icon.png");
    removeimg.setAttribute("onclick","removeItem(this.parentElement.parentElement.id)");
    imgspan.appendChild(removeimg);

    div.appendChild(dataspan);
    div.appendChild(imgspan);

    dataDiv.appendChild(div);
}

function removeItem(id)
{
    document.getElementById(id).remove();
    todo[id].deleted = true;
    console.log(todo);
}

function completed(id)
{
    if(id.childNodes[1].childNodes[0].checked)
    {
        id.childNodes[0].style.textDecoration = "line-through";
        id.childNodes[1].childNodes[1].removeAttribute("onclick");
        todo[id.id].completed = true;
    }
    else{
        id.childNodes[0].style.textDecoration = "none";
        id.childNodes[1].childNodes[1].setAttribute("onclick","editItem(this.parentElement.parentElement.id)");
        todo[id.id].completed = false;
    }
}

function editItem(id)
{
    var item = document.getElementById(id);
    var data = item.childNodes[0].innerText;
    document.getElementById('data').value = data;   
    document.getElementById('update').style.display = "block";
    editedId = id;
}
var editedId;
function updateItem()
{
    var data = document.getElementById('data').value;
    document.getElementById(editedId).childNodes[0].innerText = data;
    document.getElementById('update').style.display = "none";
    todo[editedId].input = data;
    document.getElementById('data').value = '';
}

