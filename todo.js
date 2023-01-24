const addBtn = document.querySelector("#add");
const inputText = document.querySelector("#inputText");
const ulList = document.querySelector("#list");

const createLi = function(){
    const li = document.createElement("li");
    ulList.append(li);
    li.className = "list-group-item border-dark d-flex justify-content-between align-items-center"
    li.innerHTML = `  
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onchange="check(event)">
        <label class="form-check-label" for="flexCheckDefault">
            ${inputText.value}
        </label>
    </div>
    <div class="btn-group">
        <button class="btn btn-outline-dark" onclick="del(event)"><i class="bi bi-trash3 pe-none"></i></button>
        <button class="btn btn-outline-dark" onclick="edit(event)"><i class="bi bi-pencil pe-none"></i></button>
    </div>`
    inputText.value=null;
    // console.log(ulList.children.length)
    // const all = document.querySelector("#allList");
    // all.innerHTML = ulList.children.length;
}

addBtn.addEventListener("click",createLi);

const del = function(event){
    event.target.parentElement.parentElement.remove();
}

const edit = function(event){
    // const currentText = event.target.parentElement.parentElement.querySelector(".form-check-label");
    const currentText = event.target.parentElement.previousElementSibling.lastElementChild;
    const editText = window.prompt("edit text",currentText.innerText);
    currentText.innerText = editText;
}
const check = function(event){
    event.target.nextElementSibling.classList.toggle("text-decoration-line-through");
    const done = document.querySelector("#doneList");
   
    done.innerHTML = ulList.querySelectorAll("input[type=checkbox]:checked").length;

    // all.innerHTML = ulList.children.length;

}
inputText.addEventListener("keyup",event=>{
    console.log(event.key,event.keyCode);
    if(event.keyCode === 13) {
        createLi();
    }
})






                        