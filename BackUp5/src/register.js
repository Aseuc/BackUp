const reputation = document.getElementById("reputation");
const pass = document.getElementById("password");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email1 = document.getElementById("email");
const verification = document.getElementById("verification");
const status = document.getElementById("status");
/* const result = document.getElementById("result") */
const department = document.getElementById("department");
const password = document.getElementById("password");




const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const $result = $('#result');
  const email = $('#email').val();
  $result.text('');

  if (validateEmail(email)) {
    $result.text(email + ' is valid :)');
    $result.css('color', 'green');
    return true;
  } else {
    $result.text(email + ' is not valid :(');
    $result.css('color', 'red');
  }
  return false;
}

$('#email').on('input', validate);








/* function validate(){
   var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email1.match(validRegex)) {
    
    return true;
  } else {
   
  return false;
  }
} */


/* 
var checkPasswordValidity = function() {
    if (password1.value !== password2.value) {
       alert("Passwörter stimmen nicht überein!")
       return false; 
      } else {
        password2.setCustomValidity("");

    }        
};
 */



function checkFields()
{
if(reputation.value == null || reputation.value === undefined || reputation.value === ""){

    alert("Alle Felder bitte ausfüllen!")
    return true;
}

if(firstname.value == null || firstname.value === undefined || firstname.value === ""){

    alert("Alle Felder bitte ausfüllen!")
    return true;
}

if(lastname.value == null || lastname.value === undefined || lastname.value === ""){

    alert("Alle Felder bitte ausfüllen!")
    return true;
}
if(password.value == null || password.value === undefined || password.value === ""){

    alert("Alle Felder bitte ausfüllen!")
    return true;
} 


if(email1.value == null || email.value === undefined || email.value === ""){

    alert("Alle Felder bitte ausfüllen!")
    return true;
} 
 if(department.value == null || department.value === undefined || department.value === ""){

    alert("Alle Felder bitte ausfüllen!")
    return true;
}
 

}

function submitRegistration() { 

if(checkFields() == true){
return; 
}


if(validate() == false){
alert("E-Mail is not valid!");
return;
} 

captureRegistration();

alert("Registration erfolgreich")
$("#result").text("")


}



async function captureRegistration() {
  const loginForm = document.getElementById("loginForm");

  if (loginForm === null) {
      return;
  }
  form = new FormData(loginForm);
  id = ""
  body = Object.fromEntries(form)
  console.log(body)

  for(let pair of Object.entries(body)){

      if(pair[0] === "email")
    {
         id = pair[1]
          
  
      }
  } 
console.log(id)
requestDatabase("PUT", "registrations/" + id, body );
loginForm.reset()
}
