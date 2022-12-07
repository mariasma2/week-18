
let errors = [];

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }
    if (validity.tooShort) {
        errors.push('Пароль слишком короткий');
    }

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения поля ' + input.placeholder);
    }
}


document.querySelector(".button").addEventListener("click", function (e) {
    e.preventDefault();
    errors = [];
    let inputs = document.querySelectorAll("input");
    for (let input of inputs) {
        checkValidity(input);
    }
    let errorDiv = document.querySelector('#errorsInfo');
    errorDiv.innerHTML = errors.join('. <br>');
});


