const emailInput = document.querySelector("#email");
const postalInput = document.querySelector("#postal-code");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");

emailInput.addEventListener('blur', () => {
    console.log("blured");
    if (emailInput.validity.typeMismatch) {
        // emailInput.style.borderColor = "red";
        emailInput.setCustomValidity("Not of email type.");
        emailInput.reportValidity();
     
    }
});