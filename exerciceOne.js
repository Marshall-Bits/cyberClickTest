// Haz un script, con el lenguaje de programación de tu preferencia, que imprima por
// pantalla una lista ordenada de números del 1 al 100 sustituyendo los múltiplos de 3
// por la cadena “cyber”, los múltiplos de 5 por la cadena “click” y los que son múltiplos
// de 3 y de 5 por “cyberclick”.


function findMultiples(){
    for(let i=0; i<=100; i++){
        switch (i) {
            case i%3===0 && i%5===0:
                console.log("cyberclick");
                break;
            case i%3===0:
                console.log("cyber");    
                break;
            case i%5===0:
                console.log("click");
                break;
            default:
                console.log(i);
                break;
        }
    }
}



