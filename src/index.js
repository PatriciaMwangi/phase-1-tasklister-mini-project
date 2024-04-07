document.addEventListener("DOMContentLoaded", () => {
  // your code here
let form= document.querySelector("form").addEventListener("submit",function(e){
  e.preventDefault()
  let task=e.target.elements["new-task-description"].value
  console.log(task)
})

})
