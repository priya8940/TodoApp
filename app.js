//Count Increment
var countElement = document.querySelector('.input-section Label');

var addButton = document.querySelector('.input-section button');
var myInputArea = document.querySelector('.input-section input');
var container = document.getElementsByClassName('todos-section')[0];

let count = 0;
let increaseCount = ()=>{
    count++;
    countElement.innerText = `Total To Dos Count: ${count}`
}

let decreaseCount = ()=>{
    count--;
    countElement.innerText = `Total To Dos Count: ${count}`
}

addButton.addEventListener('click',function(e){
    increaseCount();
    //Get Text from UI Input
    var text = myInputArea.value;
    
    //Create a p tag
    var pEle = document.createElement('p');
    pEle.innerText = text;

   
    //Create Checkbox
    var inputEle = document.createElement('input');
    inputEle.setAttribute('type','checkbox');
    inputEle.addEventListener('click', lineThrough);

    
    //Create a div
    var divEle = document.createElement('div');
    divEle.classList.add('todo');

    //console.log(divEle);

    //Append checkbox and paragraph inside div
    divEle.appendChild(inputEle);
    divEle.appendChild(pEle);

   // console.log(divEle);

    //create delete button
    var buttonEle = document.createElement('button');
    buttonEle.innerText='Delete';
    buttonEle.setAttribute('id',count);
    buttonEle.addEventListener('click',deleteTodo)
   
    //Create Parent div
    var todoDiv = document.createElement('div');
    todoDiv.classList.add('my-todo');
    todoDiv.appendChild(divEle)
    todoDiv.appendChild(buttonEle);
    todoDiv.setAttribute('id',count+'d');

    container.appendChild(todoDiv);
});

function deleteTodo(event){
    //console.log(event.target.id);
    var todoId = event.target.id+'d';
    container.removeChild(document.getElementById(todoId));
    decreaseCount();
    event.target.nextElementSibling.style.setProperty("margin-left", "20px");
}

function lineThrough(event){
    if(event.target.checked){
    event.target.nextElementSibling.style.setProperty("text-decoration", "line-through");
    }else{
        event.target.nextElementSibling.style.setProperty("text-decoration", "none");
    }
}
