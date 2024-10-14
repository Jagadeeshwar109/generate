const passwordLengthInput = document.getElementById('password-length');
const passwordOptions = document.querySelectorAll('input[type="checkbox"]');
const generatePasswordButton = document.getElementById('generate-password');
const generatedPasswordDisplay = document.getElementById('generated-password');

generatePasswordButton.addEventListener('click', generatePassword);

function generatePassword() {
    const passwordLength = parseInt(passwordLengthInput.value);
    const passwordOptionsSelected = Array.prototype.filter.call(passwordOptions, option => option.checked);
    const passwordCharacters = getPasswordCharacters(passwordOptionsSelected);

    if (passwordLength > 0 && passwordCharacters.length > 0) {
        const generatedPassword = generatePasswordString(passwordLength, passwordCharacters);
        generatedPasswordDisplay.textContent = generatedPassword;
    } else {
        alert('Please select password options and enter a valid password length.');
    }
}

function getPasswordCharacters(passwordOptionsSelected) {
    const characters = [];

    if (passwordOptionsSelected.includes(document.getElementById('uppercase'))) {
        characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (passwordOptionsSelected.includes(document.getElementById('lowercase'))) {
        characters.push(...'abcdefghijklmnopqrstuvwxyz');
    }

    if (passwordOptionsSelected.includes(document.getElementById('numbers'))) {
        characters.push(...'0123456789');
    }

    if (passwordOptionsSelected.includes(document.getElementById('special-characters'))) {
        characters.push(...'!@#$%^&*()_+-={}:<>?');
    }

    return characters;
}

function generatePasswordString(passwordLength, passwordCharacters) {
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    }

    return password;
}
generatePasswordButton.addEventListener('click', (e) => {
    e.preventDefault();
    generatePassword();
});