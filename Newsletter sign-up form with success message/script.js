const subscribe = document.querySelector('.subscribe')
const dismiss = document.querySelector('.dismiss')
const input = document.querySelector('input')
const section = document.querySelector('section')
const main = document.querySelector('main')
const errorText = document.querySelector('.error-msg')
const span = document.querySelector('span')

var validationEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

subscribe.addEventListener("click", function(){
    if(input.value.match(validationEmail)){
        span.textContent = input.value;
        main.style.display = "none";
        section.style.display = "flex";
    }else{
        input.style.border = "1px solid hsl(4, 100%, 67%)";
        input.style.background = "hsl(351, 93%, 89%)";
        input.style.color = "red";
        errorText.textContent = "Valid email required";
    }
})

dismiss.addEventListener("click", function(){
    section.style.display = "none";
    main.style.display = "flex";
    input.style.border = "";
    input.style.background = "";
    input.style.color = "";
    errorText.textContent = "";
    input.value = ""
})