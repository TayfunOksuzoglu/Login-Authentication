const forms = document.querySelector('.forms');
const pwShowHide = document.querySelectorAll('.eye-icon');
const links = document.querySelectorAll('.link');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener('click', () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll('.password');

    pwFields.forEach((password) => {
      if (password.type === 'password') {
        password.type = 'text';
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
      } else {
        password.type = 'password';
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
      }
    });
  });
});

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    forms.classList.toggle('show-signup');
  });
});

// ********************************* VALIDATION ******************************************* //

// *** *** LOGIN VALIDATION *** *** //
function validateLoginEmail() {
  const loginEmailInput = document.querySelector('.login-email-input').value;
  const loginEmailError = document.querySelector('.login-email-error');

  if (loginEmailInput.length === 0) {
    loginEmailError.innerHTML = 'Email cannot be empty';
    return false;
  }
  if (!loginEmailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    loginEmailError.innerHTML = 'Email is not valid';
    return false;
  }
  loginEmailError.innerHTML = '<i class="fa-solid fa-check success-icon"></i>';
  return true;
}

function validateLoginPassword() {
  const loginPasswordInput = document.querySelector(
    '.login-password-input'
  ).value;
  const loginPasswordError = document.querySelector('.login-password-error');

  if (loginPasswordInput.length === 0) {
    loginPasswordError.innerHTML = 'Password cannot be empty';
    return false;
  }

  if (!loginPasswordInput.match(/[a-z]/)) {
    loginPasswordError.innerHTML = 'Invalid. At least 1 lowercase';
    return false;
  }

  if (!loginPasswordInput.match(/[A-Z]/)) {
    loginPasswordError.innerHTML = 'Invalid. At least 1 uppercase';
    return false;
  }
  if (!loginPasswordInput.match(/\d/)) {
    loginPasswordError.innerHTML = 'Invalid. At least 1 number';
    return false;
  }

  if (!loginPasswordInput.match(/^.{8,}$/)) {
    loginPasswordError.innerHTML = 'Invalid. At least 8 characters';
    return false;
  }

  loginPasswordError.innerHTML =
    '<i class="fa-solid fa-check success-icon"></i>';
  return true;
}

// *** *** SIGNUP VALIDATION *** *** //

function validateSignupEmail() {
  const signupEmailInput = document.querySelector('.signup-email-input').value;
  const signupEmailError = document.querySelector('.signup-email-error');

  if (signupEmailInput.length === 0) {
    signupEmailError.innerHTML = 'Email cannot be empty';
    return false;
  }
  if (!signupEmailInput.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    signupEmailError.innerHTML = 'Email is not valid';
    return false;
  }
  signupEmailError.innerHTML = '<i class="fa-solid fa-check success-icon"></i>';
  return true;
}

function validateSignupPassword() {
  const signupPasswordInput = document.querySelector(
    '.signup-password-input'
  ).value;
  const signupPasswordError = document.querySelector('.signup-password-error');

  if (signupPasswordInput.length === 0) {
    signupPasswordError.innerHTML = 'Password cannot be empty';
    return false;
  }

  if (!signupPasswordInput.match(/[a-z]/)) {
    signupPasswordError.innerHTML = 'Invalid. At least 1 lowercase';
    return false;
  }

  if (!signupPasswordInput.match(/[A-Z]/)) {
    signupPasswordError.innerHTML = 'Invalid. At least 1 uppercase';
    return false;
  }
  if (!signupPasswordInput.match(/\d/)) {
    signupPasswordError.innerHTML = 'Invalid. At least 1 number';
    return false;
  }

  if (!signupPasswordInput.match(/^.{8,}$/)) {
    signupPasswordError.innerHTML = 'Invalid. At least 8 characters';
    return false;
  }

  signupPasswordError.innerHTML =
    '<i class="fa-solid fa-check success-icon"></i>';

  return true;
}

// *** *** PASSWORD CONFIRMING VALIDATION *** *** //

function confirmSignupPassword() {
  const signupPasswordInput = document.querySelector(
    '.signup-password-input'
  ).value;
  const confirmPasswordInput = document.querySelector(
    '.signup-password-confirm-input'
  ).value;
  const confirmPasswordError = document.querySelector(
    '.signup-password-confirm-error'
  );

  if (confirmPasswordInput.length === 0) {
    confirmPasswordError.innerHTML = 'Please confirm your password';
    return false;
  }

  if (signupPasswordInput !== confirmPasswordInput) {
    confirmPasswordError.innerHTML = 'Passwords do not match';
    return false;
  }

  confirmPasswordError.innerHTML =
    '<i class="fa-solid fa-check success-icon"></i>';
  return true;
}
// *** *** VALIDATING THE FORM  *** *** //

function validateLoginForm() {
  if (validateLoginEmail() && validateLoginPassword()) {
    // Cleaning out the form field after submission
    document.querySelector('.login-password-input').value = '';
    document.querySelector('.login-email-input').value = '';
    document.querySelector('.login-email-error').innerHTML = '';
    document.querySelector('.login-password-error').innerHTML = '';
    alert('Successfully logged in');
  } else {
    alert('Please fill form correctly');
  }
}

function validateSignupForm() {
  if (
    validateSignupEmail() &&
    validateSignupPassword() &&
    confirmSignupPassword()
  ) {
    // Cleaning out the form field after submission
    document.querySelector('.signup-password-input').value = '';
    document.querySelector('.signup-password-confirm-input').value = '';
    document.querySelector('.signup-email-input').value = '';
    document.querySelector('.signup-password-confirm-error').innerHTML = '';
    document.querySelector('.signup-email-error').innerHTML = '';
    document.querySelector('.signup-password-error').innerHTML = '';

    alert('Succesfully signed up');
  } else {
    alert('Please fill the form correctly.');
  }
}
// *** *** HANDLE SUBMISSION *** *** //

loginForm.addEventListener('submit', validateLoginForm);

signupForm.addEventListener('submit', validateSignupForm);
