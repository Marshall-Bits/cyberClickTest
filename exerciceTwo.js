let fileLinesArray;

function checkValidPassword(minimumTimes,maximumTimes,letter,password){
    
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
        });
    };
    reader.readAsText(file);
  };


