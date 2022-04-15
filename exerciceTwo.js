let fileLinesArray;
let validPasswords = 0;

function checkValidPassword(minimumTimes,maximumTimes,letter,password){
    let coincidences = 0;
    for(let i=0;i < password.length; i++){
        if(password[i] === letter) coincidences+=1
    }
    if(coincidences>minimumTimes && coincidences<maximumTimes){
        console.log(`The password ${password} is correct. It has more than ${minimumTimes} "${letter}" and less than ${maximumTimes} `)
        validPasswords ++;
    }
    console.log(`There is ${validPasswords} valid passwords in total.`)
}

// On the input we upload the txt file with all the passwords and conditions
document.getElementById('inputs').onchange = function(){
    // We take the file and we read it
    const file = this.files[0];
    const reader = new FileReader();
    reader.onload = function(progressEvent){
        // The array will contain now all the document divided by lines, so we'll be able to check it one by one
        fileLinesArray = this.result.split(/\r\n|\n/);

        // We can also create an array for each line that devives the conditions and the password into another array
        fileLinesArray.forEach(element => {
            // we get rid of the ":" and "-"
            const splitedElement = element.replace("-"," ").replace(":","").split(" ")
            // now we have an array with array[0] = first number, array[1] = second number, array[2] = letter and array[3]= password
            console.log(splitedElement)
            checkValidPassword(splitedElement[0],splitedElement[1],splitedElement[2],splitedElement[3])
        });
    };
    reader.readAsText(file);
  };


