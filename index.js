let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }

        else if(buttonText == "del"){
        editedvalue = screenValue.slice(0, -1);
        screenValue = editedvalue;
        screen.value = screenValue;
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}