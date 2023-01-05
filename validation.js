const Name = document.getElementById("name");
const email = document.getElementById("email");
const contact = document.getElementById("contact");

const country = document.getElementById("countries");
const state = document.getElementById("state");

// !add event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput();
});

function checkInput() {
  // get all value in required field
  // use trim() function for remove whitespace
  const NameValue = Name.value.trim();
  const emailValue = email.value.trim();
  const contactValue = contact.value.trim();

  // !full name validation check
  if (NameValue === "") {
    // show error message
    // add error class
    setErrorMessage(
      Name,
      "Full Name field can't be blank. Required this field."
    );

    // focus element
    Name.focus();
  } else if (NameValue.length < 4 || NameValue.length > 10) {
    setErrorMessage(
      fullName,
      "This field minimum character is 4 and maximum character is 10. Please input at this range."
    );

    // focus element
    Name.focus();
  } else {
    // add success class
    setSuccessMessage(Name);
  }

  // !email validation check
  if (emailValue === "") {
    // show error message
    // add error class
    setErrorMessage(email, "Email field can't be blank. Required this field.");

    // focus element
    email.focus();
  } else if (!isValidateEmail(emailValue)) {
    setErrorMessage(email, "Sorry! Your define email is not valid.");

    // focus element
    email.focus();
  } else {
    // add success class
    setSuccessMessage(email);
  }

  // !phone validation check
  if (contactValue === "") {
    // show error message
    // add error class
    setErrorMessage(
      contact,
      "Phone Number field can't be blank. Required this field."
    );

    // focus element
    phoneNumber.focus();
  } else if (contactValue.length > 11) {
    setErrorMessage(
      contact,
      "This field minimum maximum character is 11. Please input at this range."
    );

    // focus element
    phoneNumber.focus();
  } else {
    // add success class
    setSuccessMessage(contact);
  }

  // !password validation check

  // add success class
  setSuccessMessage(password);
}

// focus element

// !input error message show function
function setErrorMessage(input, message) {
  // select input field parentELement
  const formControl = input.parentElement; // parentELement = .form-control
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = "form-control error";
}

// !input success message show function
function setSuccessMessage(input) {
  // select input field parentELement
  const formControl = input.parentElement; // parentELement = .form-control

  // add success class
  formControl.className = "form-control success";
}

// !proper username validation check
function isUserNameValid(username) {
  /* 
    Usernames can only have: 
    - Lowercase Letters (a-z) 
    - Numbers (0-9)
    - Dots (.)
    - Underscores (_)
  */
  const res = /^[a-z0-9_\.]+$/.exec(username);
  const valid = !!res;
  return valid;
}

// !proper email validation check
function isValidateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
