const emailInput = document.querySelector("#email");
const postalInput = document.querySelector("#post-code");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");
const submitButton = document.querySelector("#submit");


emailInput.addEventListener('blur', () => {

    if (emailInput.validity.valueMissing) {
        emailInput.setCustomValidity("No email entered!!!!");
        emailInput.reportValidity();
    } else if (emailInput.validity.typeMismatch) {
        emailInput.setCustomValidity("Not of email type.");
        emailInput.reportValidity();

    } else {
        emailInput.setCustomValidity("");
    }
    
});


postalInput.addEventListener('blur', () => {
    if(postalInput.validity.valueMissing) {
        postalInput.setCustomValidity("No postal code entered");
        postalInput.reportValidity();
    } else if (postalInput.validity.patternMismatch ) {
        postalInput.setCustomValidity("No postal code not correct");
        postalInput.reportValidity();
    } else {
        postalInput.setCustomValidity("");
    }

});


passwordInput.addEventListener('blur', () => {

    if (passwordInput.validity.valueMissing) {
        passwordInput.setCustomValidity("No password entered");
        passwordInput.reportValidity();
    } 

});

passwordConfirmInput.addEventListener('blur', () => {
    
    if (passwordConfirmInput.validity.valueMissing) {
        passwordConfirmInput.setCustomValidity("No password entered");
        passwordConfirmInput.reportValidity();
    }
});

passwordConfirmInput.addEventListener('input', () => {


    if(passwordConfirmInput.value !== passwordInput.value ) {
        passwordConfirmInput.setCustomValidity("Password confirmation not the same.");
        passwordConfirmInput.reportValidity();
    } else {
        passwordConfirmInput.setCustomValidity("");
    }
});

submitButton.addEventListener( 'click', () => {
    if(!passwordConfirmInput.checkValidity()) {
        return;
    } else if (!emailInput.checkValidity()) {
        return;
    } else if (!postalInput.checkValidity()) {
        return;
    } else if (!passwordInput.checkValidity()) {
        return;
    } else if (!passwordConfirmInput.checkValidity()) {
        return;
    } else {
        alert("Good Job! No errors on form! Submitted!");
    }
    
});