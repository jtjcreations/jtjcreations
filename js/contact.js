let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let serviceError = document.getElementById('service-error');
let mobileError = document.getElementById('mobile-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

function validateName() {
  let name = document.getElementById('form_name').value.trim();
  if (name.length == 0) {
    nameError.innerHTML =
      'Name is required <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }

  if (name.match(/[0-9]/)) {
    nameError.innerHTML =
      'shouldn\'t contain any numbers  <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }
  if (!name.match(/^[a-zA-Z ]*$/)) {
    nameError.innerHTML =
      'shouldn\'t contain any special characters  <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }
  nameError.innerHTML = '';
  return true;
}

function validateEmail() {
  let email = document.getElementById('form_email').value.trim();
  if (email.length == 0) {
    emailError.innerHTML =
      'email address is required <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }
  if (!email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)) {
    emailError.innerHTML =
      'Enter valid Email <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }
  emailError.innerHTML = '';
  return true;
}

function validateService() {
  let service = document.getElementById('form_need').value.trim();
  if (service == '') {
    serviceError.innerHTML =
      'choose a service <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }
  serviceError.innerHTML = '';
  return true;
}

function validateMobile() {
  let mobile = document.getElementById('form_mobile').value.trim();
  if (mobile.length == 0) {
    mobileError.innerHTML =
      'Mobile Number is required <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }
  if (!mobile.match(/^((0091)|(\+91)|0)\s?[0-9]{10}$/g)) {
    mobileError.innerHTML =
      'enter valid mobile <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }
  mobileError.innerHTML = '';
  return true;
}

function validateMessage() {
  let message = document.getElementById('form_message').value.trim();
  if (message.length == 0) {
    messageError.innerHTML =
      'Enter a Message <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }
  if (message.length < 10) {
    messageError.innerHTML =
      'Message should be atleast 10 characters <i class="fa-solid fa-circle-exclamation"></i>';
    return false;
  }
  messageError.innerHTML = '';
  return true;
}

function validateSubmit() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateMobile() ||
    !validateService() ||
    !validateMessage()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML =
      'please fill the form properly <i class="fa-solid fa-circle-exclamation"></i>';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
  return true;
}
