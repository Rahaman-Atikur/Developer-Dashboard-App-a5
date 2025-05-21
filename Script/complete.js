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
    })
 }

  const completeButtonOne = document.getElementById("complete-btn-one");
  completeButtonOne.addEventListener("click",function(){
        const historyOfDoneTask = document.getElementById("done-task-history-one");
        const cardOneTask = document.getElementById("card-one-task").innerText;
        let now = new Date();
        let dateTime = now.toLocaleString();
        console.log(dateTime);
        historyOfDoneTask.innerHTML=`
        <p> You have completed ${cardOneTask} in ${dateTime}</p> 
        `;
 })

 const completeButtonTwo = document.getElementById("complete-btn-two");
  completeButtonTwo.addEventListener("click",function(){
        const historyOfDoneTask = document.getElementById("done-task-history-two");
        const cardTwoTask = document.getElementById("card-two-task").innerText;
        console.log(cardTwoTask);
        let now = new Date();
        let dateTime = now.toLocaleString();
        console.log(dateTime);
        historyOfDoneTask.innerHTML=`
        <p> You have completed ${cardTwoTask} in ${dateTime}</p> 
        `;
 })

 const completeButtonThree = document.getElementById("complete-btn-three");
  completeButtonThree.addEventListener("click",function(){
        const historyOfDoneTask = document.getElementById("done-task-history-three");
        const cardThreeTask = document.getElementById("card-three-task").innerText;
        
        let now = new Date();
        let dateTime = now.toLocaleString();
        console.log(dateTime);
        historyOfDoneTask.innerHTML=`
        <p> You have completed ${cardThreeTask} in ${dateTime}</p> 
        `;
 })

 const completeButtonFour = document.getElementById("complete-btn-four");
  completeButtonFour.addEventListener("click",function(){
        const historyOfDoneTask = document.getElementById("done-task-history-four");
        const cardFourTask = document.getElementById("card-four-task").innerText;
        
        let now = new Date();
        let dateTime = now.toLocaleString();
        
        historyOfDoneTask.innerHTML=`
        <p> You have completed ${cardFourTask} in ${dateTime}</p> 
        `;
 })

 const completeButtonFive = document.getElementById("complete-btn-five");
  completeButtonFive.addEventListener("click",function(){
        const historyOfDoneTask = document.getElementById("done-task-history-five");
        const cardFiveTask = document.getElementById("card-five-task").innerText;
        
        let now = new Date();
        let dateTime = now.toLocaleString();
        
        historyOfDoneTask.innerHTML=`
        <p> You have completed ${cardFiveTask} in ${dateTime}</p> 
        `;
 })

 const completeButtonSix = document.getElementById("complete-btn-six");
  completeButtonSix.addEventListener("click",function(){
        const historyOfDoneTask = document.getElementById("done-task-history-six");
        const cardSixTask = document.getElementById("card-six-task").innerText;
        
        let now = new Date();
        let dateTime = now.toLocaleString();
        
        historyOfDoneTask.innerHTML=`
        <p> You have completed ${cardSixTask} in ${dateTime}</p> 
        `;
 })

 
