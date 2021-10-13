const addItems = document.querySelector(".add-items")
const plates = document.querySelector(".plates")
const plateList = document.querySelector("#plateList")
//const pl = document.querySelector("#pl")

const items =  JSON.parse(localStorage.getItem("items")) || [];

function addElements (e) {
    e.preventDefault()
    console.log("hello");
    const itemNames = document.querySelector("#items").value
    console.log(items);

    const item ={
        itemNames,
        done:false
    }
    items.push(item)
    populateList()
    localStorage.setItem("items",JSON.stringify(items))
    this.reset()
    console.log(items);
}

// function populateList (items= [],List) {
//     List.innerHTML = items.map((plate)=>{
//       return  ` <li>
//              ${plate.itemNames}
//              </li>
    
//         `
//     }).join("")

// }

function populateList (){
    plates.innerHTML = items.map((item,i)=>{
        return `
        <li>
        <input type = "checkbox" data-index=${i} id="item${i}" ${plates.done? "checked" : ""} />
        <label for="item${i}">${item.itemNames} </label>
        </li>
        `
    }).join("")

}

// function toggleDone(e){
//     if (!e.target.matches("input"))
//     return ;
//     const el = e.target
//     const index = el.dataset.index
//     items[index].done = !items[index].done;
//     localStorage.setItem("items",JSON.stringify(items))
//     populateList() 

// }

addItems.addEventListener("submit",addElements);
populateList(plates)


const li = document.querySelectorAll("li")
console.log(li);

li.forEach((li)=>li.addEventListener("click",()=>
 li.remove(),
 //localStorage.removeItem("li")
))
//window.localStorage.clear()






// const checkbox = document.querySelectorAll("input");

// checkbox.forEach((input)=>input.addEventListener("click",(item) =>
// localStorage.removeItem("item")
// //item.remove()
// ))













// function createElement () {
//     const element = JSON.parse(localStorage.getItem("items"))
//     document.getElementById("plateList").innerHTML = element
// }

// createElement()
 
