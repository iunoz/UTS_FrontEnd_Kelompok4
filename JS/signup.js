const form = document.querySelector('form');
const nickname = document.querySelector('.nickname');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password')

//tambah event listener di form
form.addEventListener('submit', e => {
    e.preventDefault();
    if(validateInputs()) {
        form.submit(); //reset form setelah di submit
    };
});

const setError = (element, message) => {
    const inputBox = element.parentElement;
    const errorMessage = inputBox.querySelector('.error');

    errorMessage.innerText = message;
    inputBox.classList.add('error');
    inputBox.classList.remove('success');
};

const setSuccess = element => {
    const inputBox = element.parentElement;
    const errorMessage = inputBox.querySelector('.error');

    errorMessage.innerText='';
    inputBox.classList.add('success');
    inputBox.classList.remove('error');   
};

const realEmail = email => {
    const validator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validator.test(String(email).toLowerCase());
};

const validateInputs = () => {
    let isValid = true;

    //get value di setiap input fields
    const nicknameValue = nickname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim()

    //tambahkan validasi untuk setiap kondisi
    if (nicknameValue === '') {
        setError(nickname, 'Pls enter your name')
        isValid = false;
    } else {
        setSuccess(nickname);
    }

    if (emailValue === '') {
        setError(email, 'Pls enter your email')
        isValid = false;
    } else if(!realEmail(emailValue)) {
        setError(email, 'Your email format is wrong')
        isValid = false;
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Please enter your password');
        isValid = false;
    } else if (passwordValue.length < 8){
        setError(password, 'Minimum Password length is 8');
        isValid = false;
    } else if (!/[A-Z]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one uppercase letter');
        isValid = false;
    } else if (!/[a-z]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one lowercase letter');
        isValid = false;
    } else if (!/\d/.test(passwordValue)) {
        setError(password, 'Password must contain at least one number');
        isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one special character');
        isValid = false;
    } else {
        setSuccess(password);
    }

    if (confirmPasswordValue === ''){
        setError(confirmPassword, 'Pls confirm your password')
        isValid = false;
    } else {
        setSuccess(confirmPassword);
    }

    return isValid;
} 