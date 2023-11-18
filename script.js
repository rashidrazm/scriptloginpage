window.onload = function() {
    // Check if the element with ID "navigateLogin" exists before adding the event listener
    let navigateLogin = document.getElementById("navigateLogin");
    if (navigateLogin) {
        navigateLogin.addEventListener('click', function() {
            window.location.href = 'loginPage.html';
        });
    }

    // Check if the element with ID "submit" exists before adding the event listener
    let submit = document.getElementById("submit");
    if (submit) {
        submit.addEventListener('click', function() {
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            checkLogin(username, password);
        });
    }

    function checkLogin(username, password) {
        if (username === "user1" && password === "user1@123") {
            window.location.href = 'user1.html';
            alert('Sign in Successfully!!..');
        } else if(username === "user2" && password === "user2@123"){
            window.location.href = 'user2.html';
            alert('Sign in Successfully!!..');
        }else if(username === "user3" && password === "user3@123"){
            window.location.href = 'user3.html';
            alert('Sign in Successfully!!..');
        }else{
            alert('Invalid Username or Password. Please Try again');
        }
    }
};
