var input = document.querySelector("#input")
var name_list = document.querySelector("#name_list")

input.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
       let name = event.target.value
      name_list.appendChild(createLi(name))
      event.target.value = ''

       
    }

    
})

function createLi(name){
    var li = document.createElement("li")
    li.className= 'list-group-item d-flex'
    li.innerHTML = name
    var span = document.createElement('span')
    span.className= 'ml-auto span'
    span.style.cursor= "pointer"
    span.innerHTML = "X"
    li.appendChild(span)
    span.addEventListener("click", function(){
        name_list.removeChild(li)
        alert("Delete Successfully")
    })
  
    return li
}
