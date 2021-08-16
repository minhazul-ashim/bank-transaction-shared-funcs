// Login Procedure

const loginSubmit = document.getElementById('login-submit');

loginSubmit.addEventListener('click', function() {


    // Get user-email
    const userEmailInput = document.getElementById('user-email');
    const userEmail = userEmailInput.value;

    //Get user-password
    const userPasswordInput = document.getElementById('user-password');
    const userPassword = userPasswordInput.value;

    //Redirect to banking page;

    if (userEmail == 'ashim@gmail.com' && userPassword == 'ashim') {
        window.location.href = 'banking.html';
    }
})