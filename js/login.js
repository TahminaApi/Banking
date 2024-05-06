document.getElementById('submit-buttton').addEventListener('click',function () {
    //get the email from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //get the password from input field
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    if(email =="admin@gmail.com" && password == 123456) {
        window.location.href = "../banking.html";
    }
    

})