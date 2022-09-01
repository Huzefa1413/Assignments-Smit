function Menu(item_name, item_price){
    this.item_name = item_name;
    this.item_price = item_price;
}

var itemList = []

var item1 = new Menu("Burger","300");
itemList.push(item1);

var item2 = new Menu("Broast","350");
itemList.push(item2);

var item3 = new Menu("Pizza Fries","300");
itemList.push(item3);

var item4 = new Menu("Tikka","250");
itemList.push(item4);

var item5 = new Menu("Kabab","300");
itemList.push(item5);

var item6 = new Menu("Roll","200");
itemList.push(item6);


var myList = document.getElementById("menu_list");

for (var i = 0; i < itemList.length; i++) 
{
    var li = document.createElement("li");
    var text = document.createTextNode(itemList[i].item_name+ " "+itemList[i].item_price+"Rs");
    li.appendChild(text);
    myList.appendChild(li);
}