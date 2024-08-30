function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = " "; // Placeholder for validation result

    // TODO: Write your validation logic here
    console.log(input)
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        
        document.getElementById('result').innerText = result;

            let regex = /^(?=.*[pet])(?=.*_)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?!.*\W)(?!.* ).{8,16}$/ ;                                           
            //password pattern = password must conatin at least the letters 'pet', one underscore, min 1 number, min 1 capital letter, min 1 lowercase letter, no special characters amd no spaces

            console.log(input, regex.test(input) )
            
}


