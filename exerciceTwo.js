//Get DOM elements
const firstLog = document.querySelector(".first-log");
const secondLog = document.querySelector(".second-log");


// Render functions
function addToFirstLog(element) {
    firstLog.appendChild(document.createElement("li")).innerText = element;
}

function addToSecondLog(element) {
    secondLog.appendChild(document.createElement("li")).innerText = element;
}

function printValidPasswords(exercice, passwords){
    document.querySelector(`.valid-passwords-${exercice}`).innerText = `There is ${passwords} valid passwords in total.`;
}

//----------First part of the exercice----------\\
let validPasswordsFirst = 0;
function checkValidPasswordFirstPart(minimumTimes, maximumTimes, letter, password) {
    let coincidences = 0;
    for (let i = 0; i < password.length; i++) {
        if (password[i] === letter) coincidences += 1
    }
    if (coincidences > minimumTimes && coincidences < maximumTimes) {
        addToFirstLog(`The password ${password} is correct. It has more than ${minimumTimes} "${letter}" and less than ${maximumTimes} `)
        validPasswordsFirst++;
        printValidPasswords("one", validPasswordsFirst)
    }
    else{
        addToFirstLog(`The password ${password} is not correct.`)
    }
}

//----------Second part of the exercice----------\\

let validPasswordsSecond = 0;
function checkValidPasswordSecondPart(firstIndex, secondIndex, letter, password){
    if(password[firstIndex-1] === letter && password[secondIndex-1] === letter){
        addToSecondLog(`The password ${password} is correct. It has on position ${firstIndex} the letter "${letter}" and also on position ${secondIndex}`);
        validPasswordsSecond ++;
        printValidPasswords("two", validPasswordsSecond);
    }
    else if(password[firstIndex-1] === letter){
        addToSecondLog(`The password ${password} is correct. It has on position ${firstIndex} the letter "${letter}"`);
        validPasswordsSecond ++;
        printValidPasswords("two", validPasswordsSecond);
    }
    else if(password[secondIndex-1] === letter){
        addToSecondLog(`The password ${password} is correct. It has on position ${secondIndex} the letter "${letter}"`);
        validPasswordsSecond ++;
        printValidPasswords("two", validPasswordsSecond);
    }
    else{
        addToSecondLog(`The password ${password} is not correct.`)
    }

}

//----------Using the input.txt file to extract data----------\\

// On the input we upload the txt file with all the passwords and conditions, that triggers the first function
document.getElementById('inputs').onchange = function () {
    // We take the file and we read it
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function (progressEvent) {
        // We create an array that will contain now all the document divided by lines, so we'll be able to check it one by one
        const fileLinesArray = this.result.split(/\r\n|\n/);
        // We also create an array for each line that devives the conditions and the password into another array
        fileLinesArray.forEach(element => {
            // we get rid of the ":" and "-"
            const splitedElement = element.replace("-", " ").replace(":", "").split(" ")
            // Now we have an array with array[0] = first number, array[1] = second number, array[2] = letter, array[3]= password
            // we can call the functions for first and second part
            checkValidPasswordFirstPart(splitedElement[0], splitedElement[1], splitedElement[2], splitedElement[3])
            checkValidPasswordSecondPart(splitedElement[0], splitedElement[1], splitedElement[2], splitedElement[3])
            
        });
    };
    reader.readAsText(file);
};


