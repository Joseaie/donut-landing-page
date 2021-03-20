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
    var messageField = document.forms["contact"]["form-message"].value;
    const nameField = document.forms["contact"]["name"].value;
    const emailField = document.forms["contact"]["email"].value;

    if (messageField == "" && nameField == "" && emailField == "") {
        alert("Please fill the form before submitting");
        return false;
    } if (nameField == "") {
        alert("Please enter a name");
        return false;
    } if (emailField == "") {
        alert("Please enter an email address");
        return false;
    } if (messageField == "") {
        alert("Please enter your message");
        return false;
    } 
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