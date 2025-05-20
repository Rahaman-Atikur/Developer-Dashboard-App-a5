 const completedButtons = document.querySelectorAll('.bg-sky-400');
 for(let completedButton of completedButtons){
    completedButton.addEventListener('click',function(){
        alert("Task has completed");
        completedButton.style.backgroundColor='lightblue';
        const assignedTask = document.getElementById("task-assigned-number").innerText;
        const convertedAssignTask = parseInt(assignedTask);
        let remainingTask = convertedAssignTask - 1;
        document.getElementById('task-assigned-number').innerText = remainingTask;
        const doneTask = document.getElementById("navbar-twenty-three-btn").innerText;
        const convertedDoneTask = parseInt(doneTask);
        let totalDoneTask = convertedDoneTask + 1;
        document.getElementById("navbar-twenty-three-btn").innerText = totalDoneTask;
        // done task history functionality starting
        const historyOfDoneTask = document.getElementById("done-task-history");
        historyOfDoneTask.innerHTML=`
        <p> Some task added </p>
        `;
    })
 }
 
