const emailInput = document.querySelector("#email");
const postalInput = document.querySelector("#post-code");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");

emailInput.addEventListener('blur', () => {
    
    if (emailInput.validity.typeMismatch) {
        emailInput.style.backgroundColor = "green";
        emailInput.setCustomValidity("Not of email type.");
        emailInput.reportValidity();
    } 
    if (emailInput.validity.valueMissing) {
        console.log("value missing");
        emailInput.style.backgroundColor = "red";
        emailInput.setCustomValidity("No email entered");
        emailInput.reportValidity();
    }
});


postalInput.addEventListener('blur', () => {
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