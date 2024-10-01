const form = document.querySelector('form');
const nickname = document.querySelector('.name');
const email = document.querySelector('.email');
const messageProblem = document.querySelector('.message');

//tambah event listener di form
form.addEventListener('submit', e => {
    e.preventDefault();
    if(validateInputs()) {
        alert("Your Message Sent Successfully mate!")
        form.reset(); //reset form setelah di submit
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
    const nameValue = nickname.value.trim();
    const emailValue = email.value.trim();
    const messageProblemValue = messageProblem.value.trim();

    //tambahkan validasi untuk setiap kondisi
    if (nameValue === '') {
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

    if (messageProblemValue === '') {
        setError(messageProblem, 'Pls enter your message or problem')
        isValid = false;
    } else {
        setSuccess(messageProblem);
    }

    return isValid;
} 