console.log('JS validate is enabled');
let  email = document.getElementById("mail");
let  name = document.getElementById("personName");
let validityState = email.validity;
var forms = document.querySelectorAll('form');
forms[0].setAttribute('novalidate', true);

email.addEventListener('input', function (event) {
    if (email.validity.patternMismatch) {
      email.setCustomValidity("Wrong input!");
    } else {
      email.setCustomValidity("");
    }
});

name.addEventListener('input', function (event) {
    if (name.validity.patternMismatch) {
        console.log('wrong name!');
      name.setCustomValidity("Wrong name!");
    } else {
      name.setCustomValidity("");
    }
});