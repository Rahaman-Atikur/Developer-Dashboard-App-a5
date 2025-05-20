const clearHistoryButton = document.getElementById("clear-history-btn");
clearHistoryButton.addEventListener("click",function(){
  const paragraphDiv=  document.getElementById("done-task-history");
  paragraphDiv.style.display = "none";
})