let inputValue= document.getElementById("input-value");
let taskList = document.getElementById("task-list");
let btn = document.querySelector(".btn");

function addTask(){

 if (!inputValue.value) {
    alert("You must enter a task");
 } else {
   let li= document.createElement("li");
   li.innerHTML= inputValue.value;
   taskList.appendChild(li);

   let span = document.createElement("span");
   span.innerHTML=`<i class="fa-solid fa-trash"></i>`;
   li.appendChild(span);
}
setTask();
inputValue.value="";
}
btn.addEventListener("click",addTask);

taskList.addEventListener("click",function(e){
if (e.target.tagName ==="LI") {
    e.target.classList.toggle("checked");
    setTask();
    
} else if(e.target.closest("span")) {
    e.target.parentElement.parentElement.remove();
    setTask();
}
});
inputValue.addEventListener('keydown',function(e){
    if (e.key === "Enter") {
        addTask();
    }
})

function setTask() {
    localStorage.setItem("lists",taskList.innerHTML);
}
function getTask(){
   taskList.innerHTML= localStorage.getItem("lists");
}
getTask();