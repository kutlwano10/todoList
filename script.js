document.addEventListener('DOMContentLoaded', function(){
    const inputValueEl = document.getElementById('inputValue');
    const taskButtonEl = document.getElementById('task-btn');
    const taskListEl = document.querySelector('.taskList');


    let taskList = [];

    //FIRSTLY: CREATED BUTTON & INPUT FUNCTIONALITY
    taskButtonEl.addEventListener('click', function() {
        let taskInputValue = inputValueEl.value.trim() 
        
        //if taskInputvalue is not empty then push the object inside taskList
        if(taskInputValue !== '') {
            taskList.push({task: taskInputValue, completed: false});
            
            //when button clicked should Display task on Page
            displayTask()
            
            
            // console.log(taskList)
            
        }
        
    })

    //SECONDLY: CREATE FUNCTION THAT DISPLAYS TASKLIST ON PAGE

    function displayTask() {
        const newTask = document.createElement('li');

        // taskListEl.textContent = " ";
        for(let i = 0; i < taskList.length; i++) {
            
            //
            newTask.innerHTML = taskList[i].task
        }
        //Append the created li element to tastList Element ID
        taskListEl.appendChild(newTask);

    }

    //4THLY 
    // let localStorageSavedTask = addToLocalStorage();

    // if (localStorageSavedTask) {
    //     taskList = JSON.parse(localStorageSavedTask)
    // }

    //THIRDLY CREATE A FUNCTION TO ADD TO LOCAL STORAGE 
    // function addToLocalStorage() {
            //Here we create a Local Storage to store taskLists 
    //     localStorage.setItem("tasks", JSON.stringify(taskList))// Tasks is like our file where we will store the taskList strings
    // }

})