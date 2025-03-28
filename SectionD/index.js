let Items = [];
function addItem() {
    let itemText = document.getElementById("input").value.trim();
    if (!itemText) {alert("please enter things or items.");return;}

    Items.push(itemText);
    document.getElementById("input").value = "";
    displayItem();
}


function displayItem() {
    let items = document.getElementById("items");
    items.innerHTML = "";

    Items.forEach((things, index) => {
        let li = document.createElement("li");
        li.textContent = things;
        li.classList.add("Item");

        let deleteButton = document.createElement("button");
        deleteButton.style.backgroundColor.red;
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteitem(index);
        li.appendChild(deleteButton);
        items.appendChild(li);
    });
}
function deleteitem(index) {
    Items.splice(index, 1);
    displayItem();
}
