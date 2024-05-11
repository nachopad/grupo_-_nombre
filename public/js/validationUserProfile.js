function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerText = message;
};

function clearError(elementId) {
    const element = document.getElementById(elementId);
    element.innerText = '';
};

window.addEventListener('load', () => {
    const userProfileForm = document.getElementById('user-profile-form');
    const passwordProfileForm = document.getElementById('password-profile-form')
    userProfileForm.firstName.focus();

    userProfileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        clearError('firstNameError');
        clearError('lastNameError');
        clearError('emailError');
        clearError('birthDateError');
        clearError('phoneError');

        let errors = [];

        if(validator.isEmpty(userProfileForm.firstName.value)) {
            errors.push({ field: 'firstName', message: '* Debes ingresar un nombre.' });
        };

        if(validator.isEmpty(userProfileForm.firstName.value)) {
            errors.push({ field: 'lastName', message: '* Debes ingresar un apellido.' });
        };

        if(validator.isEmpty(userProfileForm.email.value) || !validator.isEmail(userProfileForm.email.value)) {
            errors.push({ field: 'email', message: '* Debes ingresar un correo electrónico válido.' });
        };

        if(validator.isEmpty(userProfileForm.birthDate.value)) {
            errors.push({ field: 'birthDate', message: '* Debes ingresar una fecha de nacimiento.' });
        };

        if(validator.isEmpty(userProfileForm.phone.value)) {
            errors.push({ field: 'phone', message: '* Debes ingresar un número de teléfono.' });
        };

        if(errors.length > 0) {
            errors.forEach(error => {
                showError(`${error.field}Error`, error.message);
                console.log(errors);
            });
            return;
        };

        userProfileForm.submit();
    });

    passwordProfileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        clearError('currentPasswordError');
        clearError('newPasswordError');
        clearError('confirmNewPassword');

        let errors = [];

        if(validator.isEmpty(passwordProfileForm.currentPassword.value)) {
            errors.push({ field: 'currentPassword', message: '* Debes ingresar tu contraseña actual.' });
        };

        if(validator.isEmpty(passwordProfileForm.newPassword.value)) {
            errors.push({ field: 'newPassword', message: '* Debes ingresar la nueva contraseña.' });
        };

        if(!validator.isLength(passwordProfileForm.newPassword.value, { min: 8 })) {
            errors.push({ field: 'newPassword', message: '* La contraseña debe tener un mínimo de 8 caracteres.' });
        };

        if(validator.isEmpty(passwordProfileForm.confirmNewPassword.value) || !validator.equals(passwordProfileForm.newPassword.value, passwordProfileForm.confirmNewPassword.value)) {
            errors.push({ field: 'confirmNewPassword', message: '* Las contraseñas deben coincidir para confirmar.' });
        };

        if(errors.length > 0) {
            errors.forEach(error => {
                showError(`${error.field}Error`, error.message);
                console.log(errors);
            });
            return;
        };

        passwordProfileForm.submit();
    });
});