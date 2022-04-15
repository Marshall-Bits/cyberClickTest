// Haz un script, con el lenguaje de programación de tu preferencia, que imprima por
// pantalla una lista ordenada de números del 1 al 100 sustituyendo los múltiplos de 3
// por la cadena “cyber”, los múltiplos de 5 por la cadena “click” y los que son múltiplos
// de 3 y de 5 por “cyberclick”.

console.log("script working")
const multipleButton = document.querySelector("#multiples");
const multipleList = document.querySelector(".multiple-list")

function addToList(element){
    multipleList.appendChild(document.createElement("li")).innerText=element;
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
            addToList("cyber");
        }
        else {
            addToList(i)
        }
    }

}

multipleButton.addEventListener("click", findMultiples)

