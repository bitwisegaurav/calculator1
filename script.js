const buttons = document.querySelectorAll('button');
const see = document.getElementById("see");
let str = "";
let numbers = [];
let operators = [];
let operator = "";

function isOperator(char) { 
  return (char == '+' || char == '-' || char == '*' || char == '/' || char == 'x'); 
}

function getValues(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if(str[i]>='0' && str[i]<='9'){
      num = num*10 + parseInt(str[i]);
      if(isOperator(str[i+1]) || i == str.length-1){
        numbers.push(num);
        num = 0;
      }
    }

    else{
      operator = str[i];
      operators.push(operator);
      operator = "";
    }
  }
}

function calculate(str) {

  getValues(str);
  // console.log(numbers);
  let result = numbers[0];
  for (let i = 0; i < operators.length; i++) {
    switch (operators[i]) {
      case "+":
        result += numbers[i+1];
        break;
      case "-":
        result -= numbers[i+1];
        break;
        case "*":
          case "x":
        result *= numbers[i+1];
        break;
      case "/":
        result /= numbers[i+1];
        break;
      default:
        break;
    }
  }
  return result;
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    let a = btn.innerText;
    if(a === "="){
      str = calculate(str).toString();
      // console.log(str);
      see.innerHTML = str;
      numbers = [];
      operators = [];
    }
    else if(a === "C"){
      str = "";
      numbers = [];
      operators = [];
      see.innerHTML = "0";
    }
    else if(a === "<-"){
      str = str.slice(0, -1);
      if(str === ""){
        see.innerHTML = "0";
      }
      else{
        see.innerHTML = str;
      }
    }
    else{
      let b = str.charAt(str.length-1);
      if (isOperator(a) && isOperator(b)) {
        str = str.slice(0, -1);
      }
      str += a;
      if (!isOperator(a) && !isOperator(b)) {
        str = a;
      }
      see.textContent = str;
    }
  });
});