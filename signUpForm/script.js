let Name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");

let Nph = Name.getAttribute("placeholder");
let lastPh = lastName.getAttribute("placeholder");
let emailPh = email.getAttribute("placeholder");
let passPh = password.getAttribute("placeholder");

let form = document.querySelector("form");
    
form.addEventListener("submit", (e) => {
    e.preventDefault();


    validateInput();
})
const successEmail = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = "Email is Valid!";
    errorDisplay.classList.add("successEmail");


    inputControl.classList.remove("error");
    inputControl.classList.add("success");
};


const success = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = "";
    inputControl.classList.remove("error");
    inputControl.classList.add("success");
};

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error")

    errorDisplay.innerText = message;
    errorDisplay.classList.remove("successEmail");
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const isEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

validateInput = () => {
    const nameValue = Name.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (nameValue === "") {
        setError(Name, "Name is required!");
    }
    else {
        success(Name);
    }

    if (lastNameValue === "") {
        setError(lastName, "Last Name is required!");
    }
    else {
        success(lastName);
    }

    if (emailValue === "") {
        setError(email, "Email is required!");
    } else if (!isEmailValid(emailValue)) {
        setError(email, "Please enter valid Email!")
    } else {
        successEmail(email);
    }

    if (passwordValue === "") {
        setError(password, "Password is required!")
    } else if (passwordValue.length < 6) {
        setError(password, "Password must be atleast 6 characters!")
    } else  {
        success(password);
    }
}







// This right here is for removing and adding the placeholder.
Name.onfocus = function () {
    this.setAttribute("placeholder", "");
}
Name.onblur = function () {
    this.setAttribute("placeholder", Nph);
}


lastName.onfocus = function () {
    this.setAttribute("placeholder", "");
}
lastName.onblur = function () {
    this.setAttribute("placeholder", lastPh);
}


email.onfocus = function () {
    this.setAttribute("placeholder", "");
}
email.onblur = function () {
    this.setAttribute("placeholder", emailPh);
}


password.onfocus = function () {
    this.setAttribute("placeholder", "");
}
password.onblur = function () {
    this.setAttribute("placeholder", passPh);
}
//----------------------------------------------------






// form.addEventListener("submit", (e) => {
//      if (inputBox1.value === "" || inputBox1.value == null) {
//         small1.classList.toggle("small-1")
//         e.preventDefault();
//      } 


     
//      if (inputBox2.value === "" || inputBox2.value == null) {
//          small2.style.color = "red";
//          small2.innerHTML = "Last Name is required";
//          e.preventDefault();
//      }

//      // Checks if Email is left blank or if they did not enter anything.
//      if (inputBox3.value === "" || inputBox3.value == null) {
//          e.preventDefault();
//          small3.style.color = "red";
//          small3.innerHTML = "Email is Required!!"
//      }

//      //Checks if Password is left blank or if they did not enter anything.
//      if (inputBox4.value === "" || inputBox4.value == null) {
//          e.preventDefault();
//          small4.style.color = "red";
//          small4.innerHTML = "Password is Required!!"
//      }
// })
