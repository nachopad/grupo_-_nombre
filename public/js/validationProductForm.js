window.addEventListener('load', function (e) {

    function showError(elementId, message) {
        if (message) {
            const element = document.getElementById(elementId);
            element.innerText = message;
            element.classList.add('msg-error');
        }
    };

    function clearError() {
        const element = document.querySelectorAll('.input-information p');
        element.forEach(input => {
            input.innerText = ''
            input.classList.remove('msg-error');
        })
    }

    function checkValues(checkboxList){
        let response = false;
        for (let index = 0; index < checkboxList.length; index++) {
            if(checkboxList[index].checked){
                response=true;
                break;
            }
        }
        return response;
    }
    /**
     * Cacth the form
     */
    const productForm = this.document.querySelector('form');


    productForm.addEventListener('submit', (event) => {
        event.preventDefault();
        clearError();
        let errors = [];
        const inputs = document.querySelectorAll('.style-input');

        /**
        * checkboxes has other validations 
       */
        const colors = document.querySelectorAll('.colors');
        const sizes = document.querySelectorAll('.sizes');
        if (!checkValues(colors)) {
            errors.push({field: "colors", message: "* Debes selecionar un color como mínimo."})
        }

        if (!checkValues(sizes)) {
            errors.push({field: "sizes", message: "* Debes selecionar un talle como mínimo."})
        }

        inputs.forEach(i => {
            let error = validar(i);
            if (error) {
                errors.push({ field: i.id, message: error });
            }
        });
        if (!errors.length) {
            productForm.submit();
        };
        errors.forEach(e => {
            showError(`${e.field}Error`, e.message);
        });
        return;

    });


    function validar(input) {
        let error = '';
        switch (true) {
            case validator.isEmpty(input.value):
                error = "* Este campo es obligatorio.";
                break;
            case input.id == 'price' && !validator.isNumeric(input.value):
                error = "* Debes ingresar un valor numérico."
                break;
            case input.id == 'price' && input.value <= 0:
                error = "* El precio del producto debe ser mayor a 0."
                break;
        }
        return error;
    }
});