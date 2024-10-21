const generatePassword = (length, options) => {
    // Character sets for password generation
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let characters = '';
    if (options.includeUppercase) characters += uppercase;
    if (options.includeLowercase) characters += lowercase;
    if (options.includeNumbers) characters += numbers;
    if (options.includeSpecialChars) characters += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return password;
};

// Event listener for the button to call generatePassword and display the output
document.getElementById("generateButton").addEventListener("click", () => {
    const length = parseInt(document.getElementById("length").value);
    const options = {
        includeUppercase: document.getElementById("uppercase").checked,
        includeLowercase: document.getElementById("lowercase").checked,
        includeNumbers: document.getElementById("numbers").checked,
        includeSpecialChars: document.getElementById("specialChars").checked
    };

    const password = generatePassword(length, options);
    document.getElementById("passwordOutput").innerText = password;
});

// BONUS: Implement the copy to clipboard functionality
document.getElementById("copyButton").addEventListener("click", () => {
    const passwordOutput = document.getElementById("passwordOutput").innerText;
    navigator.clipboard.writeText(passwordOutput).then(() => {
        alert('Password copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});

