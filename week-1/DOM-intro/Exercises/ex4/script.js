const form = document.getElementById("form");

const fname = document.getElementById("name");
const salary = document.getElementById("salary");
const dateOfBirth = document.getElementById("date-of-birth");
const phone = document.getElementById("phone");
const btn = document.getElementById("btn");

const validate = function () {
  if (
    fname.value.length > 2 &&
    10000 <= salary.value <= 16000 &&
    dateOfBirth.value !== null &&
    dateOfBirth !== "" &&
    phone.value.length === 10
  ) {
    return true;
  } else {
    return false;
  }
};

const addForm = function () {
  const newForm = document.createElement("div");
  newForm.style.backgroundColor = "gray";
  newForm.style.border = "solid";
  newForm.style.width = "max-content";
  newForm.style.height = "min-content";
  newForm.style.marginTop = "15px";
  newForm.innerHTML = `Name: ${fname.value}<br>Salary: ${salary.value}<br>Date of birth: ${dateOfBirth.value}<br>Phone: ${phone.value}`;
  document.body.appendChild(newForm);
};

btn.onclick = function () {
  isValidated = validate();
  if (isValidated) {
    // addForm();
    successfulSubmit();
  } else {
  }
};

// Form Extension
const successfulSubmit = function () {
  form.style.display = "none";
  const welcomeMessage = document.createElement("h1");
  welcomeMessage.innerHTML = `Welcome ${fname.value}`;
  welcomeMessage.style.color = "red";
  document.body.appendChild(welcomeMessage);
};
