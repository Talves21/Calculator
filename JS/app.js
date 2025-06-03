let buttons = document.querySelectorAll('.calcButton');
let result = document.querySelector('#result');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
    console.log(result);
    result.value += buttons[i].innerText;
})
}

// Save input number to variable 
function inputValue () {
    let input = result.value;
}

buttons[0].addEventListener('click', () => {
    result.value = '';
});

buttons[1].addEventListener('click', inputValue);
