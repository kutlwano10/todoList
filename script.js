document.addEventListener('DOMContentLoaded', function(){
    const inputValueEl = document.getElementById('inputValue');
    const taskButtonEl = document.getElementById('task-btn');
    const taskListEl = document.querySelector('.taskList');


    let taskList = [];//when object is pushed it stores in here

    //FIRSTLY: CREATED BUTTON & INPUT FUNCTIONALITY
    taskButtonEl.addEventListener('click', function() {
        let taskInputValue = inputValueEl.value.trim() 
        
        //if taskInputvalue is not empty then push the object inside taskList
        if(taskInputValue !== '') {
            taskList.push({task: taskInputValue, completed: false});
            
            addToLocalStorage(taskList)
            //when button clicked should Display task on Page
            displayTask()
            // console.log(taskList)
        }
        clearInputValue()

        
        
    })
    function clearInputValue() {
        inputValueEl.value ="";
    }

    //SECONDLY: CREATE FUNCTION THAT DISPLAYS TASKLIST ON PAGE

    function displayTask() {
        const newTask = document.createElement('li');

        // taskListEl.textContent = " ";
        for(let i = 0 ; i < taskList.length; i++) {
            
            //I test first by displaying a single task from taskList
            newTask.innerHTML = taskList[i].task//1 by 1 its what [i] means(from 0 until the length of the array)

            //This func REMOVES the task item
            newTask.addEventListener('click', function() {
                let removetask = taskList[i].task
                this.remove(removetask)
            })
        }

        
        //Append the created li element to tastList Element ID
        taskListEl.appendChild(newTask);
        

    }
    

    //4THLY 
    // let localStorageSavedTask = addToLocalStorage();

    // if (localStorageSavedTask) {
    //     taskList = JSON.parse(localStorageSavedTask)
    // }

    //THIRDLY CREATE A FUNCTION TO ADD TO LOCAL STORAGE The TASKLIST
    function addToLocalStorage() {
        localStorage.setItem('Tasks', JSON.stringify(taskList))
    }

})