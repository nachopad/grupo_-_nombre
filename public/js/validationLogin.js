function showError(elementId, message) {
    document.getElementById('errors-frontend').style.display = 'block';
    const element = document.getElementById(elementId);
    element.innerText = message;
};

function clearError(elementId) {
    const element = document.getElementById(elementId);
    element.innerText = '';
};

window.addEventListener('load', () => {
    const loginForm = document.getElementById('login-form');
    document.getElementById('errors-frontend').style.display = 'none';
    loginForm.email.focus();

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        document.getElementById('errors-frontend').style.display = 'none';
        clearError('emailError');
        clearError('passwordError');

        let errors = [];

        if(validator.isEmpty(loginForm.email.value) || !validator.isEmail(loginForm.email.value)) {
            errors.push({ field: 'email', message: '* Debes ingresar un correo electrónico válido.' });
        };
        
        if(validator.isEmpty(loginForm.password.value)) {
            errors.push({ field: 'password', message: '* Debes ingresar una contraseña.' });
        };

        if(errors.length > 0) {
            errors.forEach(error => {
                showError(`${error.field}Error`, error.message);
            });
            return;
        };
        
        loginForm.submit();

    });
});