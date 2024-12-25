let submit=document.querySelector("form")

submit.addEventListener("submit",ToDoList)
function ToDoList(){
    event.preventDefault();
    let tr=document.createElement("tr")
    let item=document.querySelector("#name").value
    let quantity=document.querySelector("#qty").value
    let priority=document.querySelector("#priority").value

    let td1=document.createElement("td")
    td1.innerText=item
    let td2=document.createElement("td")
    td2.innerText=quantity
    let td3=document.createElement("td")
    td3.innerText=priority

    tr.append(td1,td2,td3)
    document.querySelector("tbody").append(tr);
    document.querySelector("#name").value = "";
    document.querySelector("#qty").value = "";
    

   
}