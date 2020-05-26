const url ="http://localhost:8080/formDb"
// create user
const createUser = (user) => {
    const userData = JSON.stringify(user);
    fetch(url, {
        method: "POST",
        body: userData,
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    .then((res) => res.json())
    .then((data) => {
      (data);
    })
    .catch((error) => {
    console.log(error);
    });
};




// Reference elements in the DOM

const logInBtn = document.getElementById("logInBtn");
const password = document.getElementById("password");
const userId = document.getElementById("userId");


// Add an event listener to the login button
logInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const userIdValue = userId.value;
    const userIdLength = userIdValue.length
    const passwordValue = password.value;
    const passwordLength = passwordValue.length;


    if (userIdLength < 1 ) {
        alert("Please Enter Your UserId!");
    }

    // else {
    //    if (passwordLength < 5 ) {
    //     window.location.replace("./dash/dash_recruiter.html");
    //     }







    if (passwordLength < 1 ) {
        alert("Please Enter Your Password!");
    }

    else {
       if (passwordLength < 5 ) {
        window.location.replace("./dash/dash_recruiter.html");
        }
    else {
        // alert("logged in successfully"); 
        window.location.replace("./dash/dash.html");
    } 

}});