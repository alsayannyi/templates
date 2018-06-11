console.log('JS validate is enabled');
let  email = document.getElementById("mail");
let  name = document.getElementById("personName");
let validityState = email.validity;
var forms = document.querySelectorAll('form');
forms[0].setAttribute('novalidate', true);


// function checkMail(input) {
//     const MailExp = /\w+@\w+\.\w+/;
//     input.setCustomValidity('');
//     // !MailExp.test(input.value)   test on correct input value
//     var valide = (input.willValidate ) ? true : false;
    
//     if ( input.validity.patternMismatch) {
//         console.log('input does not meet a pattern!');
//         debugger;
//       input.setCustomValidity('введений імейл має невідповідний формат');
//     } else {
//       // input is fine -- reset the error message
//       input.setCustomValidity("");
//     }
//   }

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