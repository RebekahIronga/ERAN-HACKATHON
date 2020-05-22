// Reference elements in the DOM
const logInBtn = document.getElementById("logInBtn");
const password = document.getElementById("password");
const userId = document.getElementById("userId");


const userIdValue = userId.value;

// Add an event listener to the login button
logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const passwordValue = password.value;
    const passwordLength = password.length;

    if (password.length < 5 ) {
        alert("This field is required!");
    }
    else {
        {
            alert("logged in successfully");
        }
        
    }

    
});