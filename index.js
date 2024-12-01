function handleFormSubmit(e) {
    e.preventDefault();
    const obj = {
        amount: e.target.amount.value,
        description: e.target.description.value,
        category: e.target.category.value,
    }
    localStorage.setItem(Date.now(), JSON.stringify(obj));
    const ul = document.querySelector("ul");
    let listItem = document.createElement("li");
    const delButton = document.createElement("button");
    delButton.textContent = "Delete Expense";
    delButton.className = "delete";
    listItem.appendChild(delButton)
    const editButton = document.createElement("button");
    editButton.textContent = "Edit Expense";
    editButton.className = "edit";
    listItem.textContent = `${obj.amount}-${obj.description}-${obj.category}`;
    listItem.id = Date.now();
    listItem.appendChild(delButton)
    listItem.appendChild(editButton)
    ul.appendChild(listItem)
}

const ul = document.querySelector("ul");
if (ul != null) {
    ul.addEventListener("click", function (e) {
        e.preventDefault()
        if (e.target.classList.contains("delete")) {
            ul.removeChild(e.target.parentElement);
            const id = e.target.parentElement.id
            localStorage.removeItem(id)
        }else if(e.target.classList.contains("edit")){
            ul.removeChild(e.target.parentElement);
            const id = e.target.parentElement.id
            const details = JSON.parse(localStorage.getItem(id));
            localStorage.removeItem(id)
            const amount = document.getElementById("amount");
            const description = document.getElementById("description");
            const category = document.getElementById("category");
            amount.value = details.amount;
            description.value = details.description;
            category.value = details.category;
        }
    })
}