function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = " "; // Placeholder for validation result

    // TODO: Write your validation logic here
    console.log(input)
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        let resultEl = document.getElementById("resultEl") 


        if ( input === "pet_" ){
            result = "Valid Syntax 🟢"
        }
        else {
            result = "Invalid Syntax 🔴"
        }


       /* if(!/^"pet_"/.test(input)){
        result = "Invalid Syntax 🔴"
        }
        if(!/4*[0-9]/.test(input)){
            result = "Invalid Syntax 🔴"
        }
        if (!/[A-Z]/.test(input)) {                            
            result = "Invalid Syntax 🔴"
        }
        if(!/[a-z]/.test(input)){
            result = "Invalid Syntax 🔴"
        }
        else {
            result = "Valid Syntax 🟢"
        } */

        resultEl.textContent = result 

            

        /* if ( input === "pet_" && ) {
            result = "Valid Syntax 🟢"
        }
        else {
            result = "Invalid Syntax 🔴"
        }
            */

            
}


