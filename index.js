const input = document.getElementById("text-input") // input container
const addTask = document.getElementById("add-task") // add task button
const listContainer = document.getElementById("list-container") // list container
// const deleteBtn = document.getElementById('deleteBtn')

// console.log(deleteBtn)
// let taskItem = "<li><p>${input.value}</p> <button>Delete</button></li>"




addTask.addEventListener('click', () => {
    let listEl = document.createElement('li'); // list item element
    let paragraphEl = document.createElement('p') // paragraph element
    paragraphEl.innerHTML = `${input.value}`; // innerHTML equals to input's value. 
    let buttonEl = document.createElement('button') // button element
    buttonEl.id = 'deleteBtn'
    buttonEl.innerHTML = 'Delete'

    listEl.appendChild(paragraphEl);
    listEl.appendChild(buttonEl);
    listContainer.appendChild(listEl);



    const deleteBtn = document.getElementById('deleteBtn')

    // deleteBtn.foreach(btn)


    deleteBtn.addEventListener('click', () => {
        let tasksCollection = document.getElementsByTagName('li')
         tasksCollection.foreach(collection ())
    })
    
})

