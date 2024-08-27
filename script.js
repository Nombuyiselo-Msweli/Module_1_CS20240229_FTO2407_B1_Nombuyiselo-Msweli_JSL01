function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = " "; // Placeholder for validation result

    // TODO: Write your validation logic here
    console.log(input)
        // Check if input starts with 'pet_' and followed by alphanumeric characters
            let resultEl = document.getElementById("resultEl")

            
            //I need to get input to be displayed in a paragraph
            if ( input === "p_") {
                result = "Valid Syntax 🟢"
            }
            else {
                result = "Invalid Syntax 🔴"
            }

            resultEl.textContent = result

           //document.getElementById('result').innerText = result;
}


