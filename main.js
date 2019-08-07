//add item to list
function addTodoItem() {
	let ul = document.getElementById("list");
	let li = document.createElement("li");
	let doneButton = document.createElement("button");
	let deleteButton = document.createElement("button");
	let listItem = [li,doneButton,deleteButton];
	let input = document.getElementById("input").value;

	ul.appendChild(li);
	li.appendChild(document.createTextNode(input));
	li.appendChild(doneButton);
	li.appendChild(deleteButton);
	document.getElementById("input").value = "";
	li.onclick = removeItem;
};

document.body.onkeyup = function(e) {
	if (e.keyCode === 13) {
	  addTodoItem();
	}
};

document.getElementById("btn").onclick = addTodoItem;

function removeItem(e) {
	e.target.parentNode.removeChild(e.target);
}

//let button = document.getElementById("btn");
//button.onclick = addTodoItem;