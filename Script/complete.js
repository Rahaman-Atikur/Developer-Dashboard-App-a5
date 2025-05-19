 const completedButtons = document.querySelectorAll('.bg-sky-400');
 for(let completedButton of completedButtons){
    completedButton.addEventListener('click',function(){
        completedButton.style.backgroundColor='lightblue';
    })
 }
 
