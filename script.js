const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#cpassword');
const errorPassword = document.querySelector('.error');

function checkIfPasswordMatch() {
    if ((passwordInput.value !== confirmPasswordInput.value) && confirmPasswordInput.value !== "") {
        errorPassword.textContent = "Password mismatch";}
        else {
            errorPassword.textContent = "";
        }
}

confirmPasswordInput.addEventListener('input', checkIfPasswordMatch);
passwordInput.addEventListener('input', checkIfPasswordMatch);