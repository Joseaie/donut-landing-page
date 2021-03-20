var menuButton = document.querySelector("#burger-icon");
var menuList = document.querySelector(".nav-mobile");
var menuItems = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", function(){
    menuList.classList.toggle("menu-open");
})

menuItems.forEach(function(menuItem) {
    menuItem.addEventListener("click", function() {
        menuList.classList.remove("menu-open");
    })
})

function formValidation() {
    let messageField = document.forms["contact"]["form-message"].value;
    let nameField = document.forms["contact"]["name"].value;
    let emailField = document.forms["contact"]["email"].value;
    let errorMessage = document.querySelector(".error-message");

    if (messageField == "" && nameField == "" && emailField == "") {
        errorMessage.innerHTML = "Please fill the form before submitting";
        return false;
    } if (nameField == "") {
        errorMessage.innerHTML = "Please enter a name";
        return false;
    } if (emailField == "") {
        errorMessage.innerHTML = "Please enter an email address";
        return false;
    } if (messageField == "") {
        errorMessage.innerHTML = "Please enter your message";
        return false;
    } 
    errorMessage.innerHTML = "";
    return true;
}

var submitButton = document.querySelector("#submit");
var formContainer = document.querySelector(".form-container");
var formSubmitMessage = document.querySelector(".thank-you");

submitButton.addEventListener("click", function(e) {
    if (formValidation()) {
        formContainer.classList.add("form-closed");
        formSubmitMessage.classList.add("show-thank-you");
        e.preventDefault();
    } else {
        e.preventDefault();
    }
})