const slots = ['first', 'second', 'third'];

const users = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'larry', slot: 'second'},
    {id: 3, name: 'curly', slot: 'third'},
    {id: 4, name: 'lucy', slot: 'third', selected: true} 
]

//if slot is first place in div that has id first
//if slot is second place them in div id second 

const divFirst = document.getElementById("first");
const divSecond = document.getElementById("second");
const divThird = document.getElementById("third");

let divArr = [divFirst,divSecond,divThird];

//divFirst.appendChild(testChild)

//populate users 

for(let i = 0 ; i < users.length; i++){
    let currentPerson = users[i]; 
    let child = document.createElement("h3"); 
    child.innerHTML = currentPerson.name; 
    child.id = i + 1; 
    if(currentPerson.selected === true){
       child.className = 'orange';
    }
    if(currentPerson.slot === 'first'){
        divArr[0].appendChild(child);
    }else if(currentPerson.slot === 'second'){
        divArr[1].appendChild(child);
    }else{
        divArr[2].appendChild(child);
    }
}



const lists = document.getElementById("lists");

lists.addEventListener("click",function(ev){
    const target = ev.target; 
    //console.log(target.tagName)
    if(target.tagName === 'H3'){
        if(target.className.length){
            target.className = "";
        }else{
            target.className = "orange";
        }
    }
    
})

// const classesToChange = [...divThird.querySelectorAll(".orange")];
    
//console.log(classesToChange.length)
const buttons = [...document.getElementsByClassName('buttons')];

const testChild = document.createElement("h3");
testChild.innerHTML = "vinay";

divFirst.appendChild(testChild);

divFirst.addEventListener("click", function(ev){
    const target = ev.target; 
    const classList = [...target.classList]; 
    const classesToChange = [...divFirst.querySelectorAll(".orange")];
    if(target.tagName === "BUTTON" && classList.includes('orange')){
        for(let i = 0; i < classesToChange.length; i++){
            console.log(classesToChange[i].tagName);
            if(classesToChange[i].tagName !== "BUTTON"){
                const temp = classesToChange[i];
                  divFirst.removeChild(classesToChange[i])
                  divSecond.appendChild(temp);
            }
        }
    }
    
})



divSecond.addEventListener("click", function(ev){
    const target = ev.target; 
    const classList = [...target.classList]; 
    const classesToChange = [...divSecond.querySelectorAll(".orange")];
    
    //to the right
    
    if(target.tagName === "BUTTON" && classList.includes('orange') && classList.includes('right')){
        for(let i = 0; i < classesToChange.length; i++){
            console.log(classesToChange[i].tagName);
            if(classesToChange[i].tagName !== "BUTTON"){
                const temp = classesToChange[i];
                  divSecond.removeChild(classesToChange[i])
                  divThird.appendChild(temp);
            }
        }
    }
    
//to the left

    if(target.tagName === "BUTTON" && classList.includes('orange')){
        for(let i = 0; i < classesToChange.length; i++){
            console.log(classesToChange[i].tagName);
            if(classesToChange[i].tagName !== "BUTTON"){
                const temp = classesToChange[i];
                  divSecond.removeChild(classesToChange[i])
                  divThird.appendChild(temp);
            }
        }
    }



})


