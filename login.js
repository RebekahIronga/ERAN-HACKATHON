const url ="http://localhost:8080/formDb"
// create user
// const createUser =(user) =>{
//     const userData =JSON.stringify(user);
//     fetch(url),{
//         method: "POST",
//         body: userData,
//         headers:{
//             ("Accept:application/json",
//             "Content-Type: application/json"
//              ) }
//     }




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