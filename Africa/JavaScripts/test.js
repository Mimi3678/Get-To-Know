 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const password = document.getElementById('password');

 form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

 });

 const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
 }
 const setSuccess = element => {
 
 }; 

 const validateInputs = () => {
     const usernameValue = username.value.trim();
     const emailValue = username.value.trim();
     const passwordValue = username.value.trim();
    
     if(usernameValue === '') {
        setError(username, 'Username is required');
     }
 }