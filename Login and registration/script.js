document.getElementenById('loginForm') .addEventlistener ('submit', function(event){
    event.preventDefault();
    const username =document.getElementById('LoginUsername').value;
    const password =document.getElementById('loginPassword').value;

    //  Check if username and password are valid   
    if(username === 'admin' && password ==='password'){
        alert('Login Successful');
    }else {
        alert('Invalid username or password')
    }
});

document.getElementById('registrationForm').addEventListener('submit',function(event){
        event,preventDefault();
        const username=document.getElementById('regUsername').value;
        const email =document.getElementById('regEmail').value;
        const password = document.getElementById('regConfirmPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;

        // Check if all field are filled
       
        if (username && email && password && confirmPassword) {
            // Check if passwords match
            if (password === confirmPassword) {
              // Successful registration
              alert('Registration Successful');
              // Reset the form
              document.getElementById('registrationForm').reset();
            } else {
              // Passwords don't match
              alert('Passwords do not match');
            }
          } else {
            // Missing fields
            alert('Please fill in all fields');
          }


});