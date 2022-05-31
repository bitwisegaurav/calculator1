console.log("gaurav mishra");
let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log(buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
            document.getElementById('screen').innerText = screenValue;
        }
        else if (buttonText == 'C') {
            // screen.value = '';
            screenValue = "";
            screen.value = screenValue;
            document.getElementById('screen').innerText = '0';
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            document.getElementById('screen').innerText = eval(screenValue);
        }
        else if (buttonText == 'Bs') {
            // screenValue -= buttonText;
            screenValue = screenValue.substr(0, screenValue.length -1);
            screen.value = screenValue;
            document.getElementById('screen').innerText = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
            document.getElementById('screen').innerText = screenValue;
        }
    })
}