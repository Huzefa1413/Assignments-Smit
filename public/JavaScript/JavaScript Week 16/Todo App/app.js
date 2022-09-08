var todo = [];

function PushObject(id,input,completed){
    this.id = id;
    this.input = input;
    this.completed = completed;
}

function save(){
    var input = document.getElementById('data').value;
    var data = new PushObject(todo.length,input,false);
    todo.push(data);
    display(todo[(todo.length)-1]);
    document.getElementById('data').value = "";
}

var dataDiv = document.getElementById('dataDiv');

function display(todo){
    var div = document.createElement("div");
    
    var dataspan = document.createElement("span");
    var text = document.createTextNode(todo.input);
    dataspan.appendChild(text);
    
    var imgspan = document.createElement("span");
    imgspan.setAttribute("class","done");
    
    var input = document.createElement("input");
    input.setAttribute("type","checkbox");
    imgspan.appendChild(input);

    var editimg = document.createElement("img");
    editimg.setAttribute("src","./assets/edit_icon.png");
    imgspan.appendChild(editimg);

    var removeimg = document.createElement("img");
    removeimg.setAttribute("src","./assets/remove_icon.png");
    imgspan.appendChild(removeimg);

    div.appendChild(dataspan);
    div.appendChild(imgspan);

    dataDiv.appendChild(div);
}

