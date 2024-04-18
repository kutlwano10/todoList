document.addEventListener('DOMContentLoaded', function(){
    const inputValueEl = document.getElementById('inputValue');
    const taskButtonEl = document.getElementById('task-btn');
    const taskListEl = document.getElementById('taskList');


    let taskList = [];

    let localStorageSavedTask = addToLocalStorage()

    //BUTTON & INPUT FUNCTIONALITY
    taskButtonEl.addEventListener('click', function() {
        
        
    })

    //FIRSTLY CREATE A FUNCTION TO ADD TO LOCAL STORAGE FROM INPUT
    const addToLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(taskList))// Tasks is like our file where we will store the taskList strings
    }

})