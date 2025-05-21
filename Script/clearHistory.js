const clearHistoryButton = document.getElementById("clear-history-btn");
clearHistoryButton.addEventListener("click",function(){
  const paragraphDivOne=  document.getElementById("done-task-history-one");
  paragraphDivOne.style.display = "none";
  const paragraphDivTwo=  document.getElementById("done-task-history-two");
  paragraphDivTwo.style.display = "none";
  const paragraphDivThree=  document.getElementById("done-task-history-three");
  paragraphDivThree.style.display = "none";
  const paragraphDivFour=  document.getElementById("done-task-history-four");
  paragraphDivFour.style.display = "none";
  const paragraphDivFive=  document.getElementById("done-task-history-five");
  paragraphDivFive.style.display = "none";
  const paragraphDivSix=  document.getElementById("done-task-history-six");
  paragraphDivSix.style.display = "none";
})