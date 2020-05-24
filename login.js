// Reference elements in the DOM
const logInBtn = document.getElementById("logInBtn");
const password = document.getElementById("password");
const userId = document.getElementById("userId");


// Add an event listener to the login button
logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const userIdValue = userId.value;
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;

    if (passwordLength < 5 ) {
        alert("The password must have atleast 5 characters!");
    }
    else {
        // alert("logged in successfully"); 
        window.location.replace("./dash/dash.html");
    } 

});