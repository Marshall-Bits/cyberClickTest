// get DOM elements
const multipleButton = document.querySelector("#multiples");
const multipleDeleteButton = document.querySelector("#multiples-delete");
const multipleList = document.querySelector(".multiple-list")


function addToList(element){
    multipleList.appendChild(document.createElement("li")).innerText=element;
}

function deleteMultiples(){
    multipleList.innerText="";
}

function findMultiples(){
    for(let i=1; i<=100; i++){
        if(i%3===0 && i%5===0){
            addToList("cyberclick");
        }
        else if(i%3===0){
            addToList("cyber");
        }
        else if(i%5===0){
            addToList("click");
        }
        else {
            addToList(i)
        }
    }

}

multipleButton.addEventListener("click", findMultiples)
multipleDeleteButton.addEventListener("click", deleteMultiples)

