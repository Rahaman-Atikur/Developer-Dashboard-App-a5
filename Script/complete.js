 const completedButtons = document.querySelectorAll('.bg-sky-400');
 for(let completedButton of completedButtons){
    completedButton.addEventListener('click',function(){
        alert("Task has completed");
        completedButton.style.backgroundColor='lightblue';
        const assignedTask = document.getElementById("task-assigned-number").innerText;
        const convertedAssignTask = parseInt(assignedTask);
        let remainingTask = convertedAssignTask - 1;
        document.getElementById('task-assigned-number').innerText = remainingTask;
    })
 }
 
