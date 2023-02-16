var enterButton = document.getElementById("enter");
var input = document.getElementById("task");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");
         
function inputLength(){
    return input.value.length;
}

function createList(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
        li.classList.add("delete");
    }
}

enterButton.addEventListener("click", addListWithEnter);
input.addEventListener("keypress", addListKeypress);

function addListWithEnter(){
    if(ValidInputValue())    
        if (inputLength() > 3)
            createList();
    }

    function ValidInputValue()
    {
        return input.value.trim() == null || input.value.trim() == "" ? false : true;
    }


function addListKeypress(){
    if(ValidInputValue())
        if(inputLength() > 3, event.which === 13){
            // if(inputLength() > 3, event.Key == Enter)
            createList();
    }
}