const inputfield = document.querySelector(`#password`);
const outputfield =document.querySelector(`#output`);

inputfield.addEventListener(`input`,function(){
    console.log(inputfield.value);
let password = inputfield.value;
if (password.length < 8) {
    outputfield.innerText = `Password is too short`; // innerText works just like textcontent helps in updating 
    outputfield.style.color = 'Red';
} else if (password.search(/[a-z]/) == -1) {
    outputfield.innerText = `Password must contain lowercase letter`;
    outputfield.style.color = 'Red';
} else if (password.search(/[A-Z]/) == -1) {
    outputfield.innerText = `Password must contain uppercase letter`;
    outputfield.style.color = 'Red';
} else if (password.search(/[0-9]/) == -1) {
    outputfield.innerText = `Password must contain a digit`;
    outputfield.style.color = `Red`;
} else if(password.search(/[&\*\%\$\@\!\;]/) == -1){
    outputfield.innerText = `Password should contain  special character.`;
    outputfield.style.color = `Red`;
}else {
    outputfield.innerText = `Your Password is Strong`;
    outputfield.style.color = `green`;
}
})
