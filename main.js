// select all the required fields
const form = document.querySelector("form"),
emailField = form.querySelector(".email"),
emailInputField = emailField.querySelector("input"),
passwordField = form.querySelector(".password"),
passwordInputField = passwordField.querySelector("input");

// check email validity on typing
emailInputField.onkeyup = ()=> {
    emailCheck();
}
// check password validity on typing
passwordInputField.onkeyup = ()=> {
    passwordCheck();
    // passwordField.appendChild('<i class="display fa fa-eye-slash"></i>');
}
// on form submit
form.onsubmit = (e)=>{
    // preventing form from submitting
    e.preventDefault();
    // check if email field is empty or not
    if(emailInputField.value == ""){
        let errorText = emailField.querySelector(".error-text");
        errorText.innerText = "Email can't be blank.";
        emailField.classList.add("has-error","error");
    } else {
        emailCheck();
    }
    // check ifpassword field is empty or not
    if(passwordInputField.value == ""){
        let errorText = passwordField.querySelector(".error-text");
        errorText.innerText = "Password can't be blank.";
        passwordField.classList.add("has-error","error");
    } else {
        passwordCheck();
    }
    
    // validate the input keywords
    emailInputField.onkeyup = ()=> {
        emailCheck();
    }
    passwordInputField.onkeyup = ()=> {
        passwordCheck();
    }
    // removing the shake animation after 5ms
    setTimeout(()=>{
        emailField.classList.remove("has-error");
        passwordField.classList.remove("has-error");
    }, 500);
    // if both email field and password field doesnot contain error class
    // the form successfully submitted
    if(!emailField.classList.contains('error') && !passwordField.classList.contains('error')){
        window.location.href = "#?login-success";
        console.log("Form submitted successfully!!!");
        emailField.classList.remove("is-valid");
        passwordField.classList.remove("is-valid");
        form.reset();
    }
}
function emailCheck(){
    emailField.classList.remove("is-valid");
    // set the regex for valid email pattern
    let pattern = /^([a-zA-Z0-9_\-\.]+)@((\[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/i;
    if(!emailInputField.value.match(pattern)){
        emailField.classList.add("error");
        let errorText = emailField.querySelector(".error-text");
        (emailInputField.value != "") ? errorText.innerText = "Enter a valid email address." : errorText.innerText = "Email can't be blank.";
    } else {
        emailField.classList.remove("error");
        emailField.classList.add("is-valid");
    }
}
function passwordCheck(){
    passwordField.classList.remove("is-valid");
    // set the regex for password
    // password length between 6 to 14 char
    // must contain at least onenumeric digit,
    // & a special char
    let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
    let errorText = passwordField.querySelector(".error-text");
    if(passwordInputField.value.length < 6 || passwordInputField.value.length >14){
        passwordField.classList.add("error");
        errorText.innerText = "Password length should be 6 to 14 character.";
    }else if(!passwordInputField.value.match(pattern)){
        passwordField.classList.add("error");
        errorText.innerText = "Password must contain one numeric digit & one special char(@, #, $, %, &)";
    }else {
        passwordField.classList.remove("error");
        passwordField.classList.add("is-valid");
    }
}
// my details
detail = [
    {
        "first_name": "Shankar",
        "last_name": "Lamichhane",
        "email": "shankarlmc012@gmail.com",
        "facebook": "https://facebook.com/shankarlmc012",
        "twitter": "https://twitter.com/sha_n_kar_lmc",
        "github": "https://github.com/shankarlmc",
        "instagram": "https://www.instagram.com/sha_n_kar_lamichhane/",
        "linkedin": "https://www.linkedin.com/in/shankarlmc/",
        "website": "https://shankarlamichhane.com.np",
    },
]