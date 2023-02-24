let firstNameError = document.getElementById('firstname-error');
let lastNameError = document.getElementById('lastname-error');
let emailError = document.getElementById('email-error');
let serviceError = document.getElementById('service-error');
let mobileError = document.getElementById('mobile-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateFirstname() {
  let firstname = document.getElementById('form_name').value.trim();
  if (firstname.length == 0) {
    firstNameError.innerHTML =
      'first name is required <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }

  if (firstname.match(/[0-9]/)) {
    firstNameError.innerHTML =
      'name shouldn\'t contain any numbers  <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  if (!firstname.match(/^[a-zA-Z ]*$/)) {
    firstNameError.innerHTML =
      'name shouldn\'t contain any special characters  <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  firstNameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateLastname() {
  let lastname = document.getElementById('form_lastname').value.trim();
  if (lastname.length == 0) {
    lastNameError.innerHTML =
      'last name is required <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }

  if (lastname.match(/[0-9]/)) {
    lastNameError.innerHTML =
      'name shouldn\'t contain any numbers  <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  if (!lastname.match(/^[a-zA-Z ]*$/)) {
    lastNameError.innerHTML =
      'name shouldn\'t contain any special characters <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  lastNameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('form_email').value.trim();
  if (email.length == 0) {
    emailError.innerHTML =
      'email address is required <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  if (!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
    emailError.innerHTML =
      'Enter valid Email <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateService() {
  let service = document.getElementById('form_need').value.trim();
  if (service == '') {
    serviceError.innerHTML =
      'choose a service <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  serviceError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateMobile() {
  let mobile = document.getElementById('form_mobile').value.trim();
  if (mobile.length == 0) {
    mobileError.innerHTML =
      'Mobile Number is required <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  if (!mobile.match(/^((0091)|(\+91)|0)\s?[0-9]{10}$/g)) {
    mobileError.innerHTML =
      'enter valid mobile <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  mobileError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById('form_message').value.trim();
  if (message.length == 0) {
    messageError.innerHTML =
      'Enter a Message <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  if (message.length < 10) {
    messageError.innerHTML =
      'Message should be atleast 10 characters <i class="fa-regular fa-circle-xmark"></i>';
    return false;
  }
  messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
  return true;
}

function validateSubmit() {
  if (
    !validateFirstname() ||
    !validateLastname() ||
    !validateEmail() ||
    !validateMobile() ||
    !validateService() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'please fill the form properly';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
  return true;
}
