const slots = ['first', 'second', 'third'];
const lists = document.getElementById("lists");
const divFirst = document.getElementById("first");
const divSecond = document.getElementById("second");
const divThird = document.getElementById("third");


const users = [
    {id: 1, name: 'moe', slot: 'first'},
    {id: 2, name: 'larry', slot: 'second'},
    {id: 3, name: 'curly', slot: 'third'},
    {id: 4, name: 'lucy', slot: 'third', selected: true} 
]

//populate users 

for(let i = 0 ; i < users.length; i++){
    const currentPerson = users[i]; 
    const child = document.createElement("h3"); 
    child.innerHTML = currentPerson.name; 
    child.id = i + 1; 
    
    if(currentPerson.selected === true){
       child.className = 'orange';
    }

    if(currentPerson.slot === 'first'){
        divFirst.appendChild(child);
    }else if(currentPerson.slot === 'second'){
        divSecond.appendChild(child);
    }else{
        divThird.appendChild(child);
    }
}

lists.addEventListener("click",(ev)=>{
    const target = ev.target; 
    if(target.tagName === 'H3'){
        if(target.className.length){
            target.className = "";
        }else{
            target.className = "orange";
        }
    }
    
})

divFirst.addEventListener("click", (ev)=>{
    const target = ev.target; 
    const classList = [...target.classList]; 
    const selectedChildrenNodes = [...divFirst.querySelectorAll(".orange")];
    if(target.tagName === "BUTTON" && classList.includes('orange')){
        for(let i = 0; i < selectedChildrenNodes.length; i++){
            if(selectedChildrenNodes[i].tagName !== "BUTTON"){
                const temp = selectedChildrenNodes[i];
                  divFirst.removeChild(selectedChildrenNodes[i])
                  divSecond.appendChild(temp);
            }
        }
    }
    
})

divSecond.addEventListener("click", (ev)=>{
    const target = ev.target; 
    const classList = [...target.classList]; 
    const selectedChildrenNodes = [...divSecond.querySelectorAll(".orange")];
    
    //to the right
    
    if(target.tagName === "BUTTON" && classList.includes('orange') && classList.includes('right')){
        for(let i = 0; i < selectedChildrenNodes.length; i++){
            if(selectedChildrenNodes[i].tagName !== "BUTTON"){
                const temp = selectedChildrenNodes[i];
                  divSecond.removeChild(selectedChildrenNodes[i])
                  divThird.appendChild(temp);
            }
        }
    }
    
//to the left

    if(target.tagName === "BUTTON" && classList.includes('orange') && classList.includes("left")){
        for(let i = 0; i < selectedChildrenNodes.length; i++){
            if(selectedChildrenNodes[i].tagName !== "BUTTON"){
                const temp = selectedChildrenNodes[i];
                  divSecond.removeChild(selectedChildrenNodes[i])
                  divFirst.appendChild(temp);
            }
        }
    }
})

divThird.addEventListener("click", (ev)=>{
    const target = ev.target; 
    const classList = [...target.classList]; 
    const selectedChildrenNodes = [...divThird.querySelectorAll(".orange")];
    if(target.tagName === "BUTTON" && classList.includes('orange')){
        for(let i = 0; i < selectedChildrenNodes.length; i++){
            if(selectedChildrenNodes[i].tagName !== "BUTTON"){
                const temp = selectedChildrenNodes[i];
                  divThird.removeChild(selectedChildrenNodes[i])
                  divSecond.appendChild(temp);
            }
        }
    }
    
})



