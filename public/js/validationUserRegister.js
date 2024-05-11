function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerText = message;
};

function clearError(elementId) {
    const element = document.getElementById(elementId);
    element.innerText = '';
};

window.addEventListener('load', () => {
    const userRegisterForm = document.getElementById('user-register-form');
    userRegisterForm.firstName.focus();

    userRegisterForm.addEventListener('submit', (event) => {
        event.preventDefault();

        clearError('firstNameError');
        clearError('lastNameError');
        clearError('emailError');
        clearError('birthDateError');
        clearError('phoneError');
        clearError('passwordError');
        clearError('confirmPasswordError');

        let errors = [];

        if(validator.isEmpty(userRegisterForm.firstName.value)) {
            errors.push({ field: 'firstName', message: '* Debes ingresar un nombre.' });
        };

        if(validator.isEmpty(userRegisterForm.firstName.value)) {
            errors.push({ field: 'lastName', message: '* Debes ingresar un apellido.' });
        };

        if(validator.isEmpty(userRegisterForm.email.value) || !validator.isEmail(userRegisterForm.email.value)) {
            errors.push({ field: 'email', message: '* Debes ingresar un correo electrónico válido.' });
        };

        if(validator.isEmpty(userRegisterForm.birthdate.value)) {
            errors.push({ field: 'birthDate', message: '* Debes ingresar una fecha de nacimiento.' });
        } else {
            if(!validator.isBefore(userRegisterForm.birthdate.value, new Date().toISOString().split('T')[0])) {
                errors.push({ field: 'birthDate', message: '* La fecha de nacimiento no puede ser superior a la fecha actual.' });
            };
        };

        if(validator.isEmpty(userRegisterForm.phone.value)) {
            errors.push({ field: 'phone', message: '* Debes ingresar un número de teléfono.' });
        };

        if(validator.isEmpty(userRegisterForm.password.value)) {
            errors.push({ field: 'password', message: '* Debes ingresar una contraseña.' });
        };

        if(!validator.isLength(userRegisterForm.password.value, { min: 8 })) {
            errors.push({ field: 'password', message: '* La contraseña debe tener un mínimo de 8 caracteres.' });
        };

        if(validator.isEmpty(userRegisterForm.confirmPassword.value) || !validator.equals(userRegisterForm.password.value, userRegisterForm.confirmPassword.value)) {
            errors.push({ field: 'confirmPassword', message: '* Debes repetir la misma contraseña.' });
        };

        if(errors.length > 0) {
            errors.forEach(error => {
                showError(`${error.field}Error`, error.message);
                console.log(errors);
            });
            return;
        };

        userRegisterForm.submit();
    });

});