const emailInput = document.querySelector("#email");
const postalInput = document.querySelector("#post-code");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");


emailInput.addEventListener('blur', () => {

    if (emailInput.validity.valueMissing) {
        console.log("value missing");
        emailInput.style.backgroundColor = "red";
        emailInput.setCustomValidity("No email entered");
        emailInput.reportValidity();
    }
});
emailInput.addEventListener('input', () => {

    if (emailInput.validity.typeMismatch) {
        emailInput.style.backgroundColor = "red";
        emailInput.setCustomValidity("Not of email type.");
        emailInput.reportValidity();
    } 

});

postalInput.addEventListener('blur', () => {
    if(postalInput.validity.valueMissing) {
        postalInput.style.backgroundColor = "red";
        postalInput.setCustomValidity("No postal code entered");
        postalInput.reportValidity();
    }
});


postalInput.addEventListener('input', () => {
    if(postalInput.validity.valueMissing) {
        postalInput.style.backgroundColor = "red";
        postalInput.setCustomValidity("No postal code entered");
        postalInput.reportValidity();
    }

    if(postalInput.validity.patternMismatch ) {
        postalInput.style.backgroundColor = "red";
        postalInput.setCustomValidity("No postal code not correct");
        postalInput.reportValidity();
    }
    

});


passwordInput.addEventListener('blur', () => {

    if (passwordInput.validity.valueMissing) {
        console.log("value missing");
        passwordInput.style.backgroundColor = "red";
        passwordInput.setCustomValidity("No password entered");
        passwordInput.reportValidity();
    }
});

passwordInput.addEventListener('input', () => {
    if(postalInput.validity.patternMismatch ) {
        postalInput.style.backgroundColor = "red";
        postalInput.setCustomValidity("Password not in correct format");
        postalInput.reportValidity();
    }
});
passwordConfirmInput.addEventListener('blur', () => {
    
    if (passwordConfirmInput.validity.valueMissing) {
        console.log("value missing");
        passwordConfirmInput.style.backgroundColor = "red";
        passwordConfirmInput.setCustomValidity("No password entered");
        passwordConfirmInput.reportValidity();
    }
});

passwordConfirmInput.addEventListener('input', () => {
    
    if(passwordConfirmInput.validity.patternMismatch ) {
        passwordConfirmInput.style.backgroundColor = "red";
        passwordConfirmInput.setCustomValidity("Password not in correct format");
        passwordConfirmInput.reportValidity();
    }

    if(passwordConfirmInput.value !== passwordInput.value ) {
        passwordConfirmInput.style.backgroundColor = "red";
        passwordConfirmInput.setCustomValidity("Password confirmation not the same.");
        passwordConfirmInput.reportValidity();
    }
});