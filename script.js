const sum = function(a,b) {
	return a + b; 
};

const subtract = function(a,b) {
	return a-b;
};

// const sum = function(array) {
// 	return array.reduce((total,item) => total + item, 0);
// };
// const multiply = function(array) {
//   return array.reduce((total,item) => total * item);
// };
// const divide = function(array) {
//     return array.reduce((total,item) => total / item);
// };  


const multiply = function(a, b) {
    return a * b;
  };
  
  const divide = function(a, b) {
    return a / b;
  };  

const power = function(a,b) {
  let total = 1;
	if (b === 0) return 1;
  else for (let i =1; i<(b+1); i++) {
    total = total * a;
  }
  return total;
};

const factorial = function(a) {
	let total = 1;
  for (let i = a; i>0; i--) {
    total = total * i;
  }
  return total;
};

let operatorTrigger = 0; // could squeeze operatorTrigger into "truthy" operatorNumber??

let canAddNumbers = 1;  // check to see whether pressing numbers adds to display or starts again
                        // 1 means yes numbers will add on, 0 means no and start numberOne again + change canAddNumbers to 1

let answer = 0; //"Ready for an add-venture? Press any key to begin";

let numberOne = 0;
let numberTwo = 0;

let operatorNumber = 0;

const clearly = function() {
    numberOne = 0;
    numberTwo = 0;
    answer = 0;
    operatorTrigger = 0;
    canAddNumbers=1;
    display.textContent=answer;
}

const next = function(num) {
    console.log("next: "+num);
    if (canAddNumbers) {    // check can add on numbers or start from scratch? 
                            // example: after equals numberOne changed but can't be added whereas when number there can add numbers
        if (operatorTrigger) {
            numberTwo === 0 ? numberTwo = num : numberTwo = numberTwo+""+num;
            answer = numberTwo;
        } else {
            console.log(numberOne);
            (numberOne === 0) ? numberOne = num : numberOne = numberOne+""+num;
            answer = numberOne;
        }
        display.textContent=answer;
    } else numberOne = num;
    answer = numberOne;
    display.textContent=answer;
}

const dotty = function() {
    // check can add numbers ?
    if (canAddNumbers) {
        if (operatorTrigger) numberTwo === 0 ? numberTwo = "0." : numberTwo = toString(numberTwo) + ".";
        else numberOne === 0 ? numberOne = "0." : numberOne = toString(numberOne)+".";
    } else numberOne = "0.";
    // check can add dot (not if already a dot there) NEED TO ADD THIS IN!!
}

const execute = function () {  
    // execute function according to current operatorNumber 
    switch(operatorNumber) {
        case 0 : answer = numberOne;
        case 1 : answer = sum(numberOne, numberTwo);
        case 2 : answer = subtract(numberOne, numberTwo);
        case 3 : answer = multiply(numberOne, numberTwo);
        case 4 : answer = divide(numberOne, numberTwo);
        case 5 : answer = power(numberOne, numberTwo);
        case 6 : answer = factorial(numberOne, numberTwo);
    }
    console.log("after switch: "+{operatorNumber}+{numberOne}+{numberTwo});
    numberOne = answer;
    numberTwo = 0;
    canAddNumbers = 0;
    display.textContent=answer;
}

const equally = function() {
    execute();
    operatorTrigger = 0;
}

const operator = function (num) {
    console.log("operator: "+ num);
    operatorTrigger ?  execute() : operatorTrigger = 1;
    operatorNumber = num;
}

const body = document.querySelector("body")
const container = document.querySelector(".container")
// const frame = document.createElement("div");
// container.appendChild(frame);

const screen = document.createElement("div")
screen.classList.add("screen");
const display = document.createElement("p");
display.textContent=answer;
display.id="display";
screen.appendChild(display);
container.appendChild(screen);

// const buttons = document.createElement("div");
// buttons.classList.add("buttons");
// frame.appendChild(buttons);

const numRows = 5;
const numberButtons = 20;

for (let j = 0; j < numRows; j++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i <(numberButtons/numRows); i++) {
        const button = document.createElement("button");
        button.classList.add("button");
        button.id="button-"+j+i;
        button.textContent="a"+j+i;
        row.appendChild(button);
    }

    container.appendChild(row);
}

const one = document.getElementById("button-10");
one.textContent = 1;
one.addEventListener("click", () => {
    next(1);
});
const two = document.getElementById("button-11");
two.textContent = 2;
two.onclick = () => next(2);
const three = document.getElementById("button-12");
three.textContent = 3;
three.onclick = () => next(3);
const four = document.getElementById("button-20");
four.textContent = 4;
four.onclick = () => next(4);
const five = document.getElementById("button-21");
five.textContent = 5;
five.onclick = () => next(5);
const six = document.getElementById("button-22");
six.textContent = 6;
six.onclick = () => next(6);
const seven = document.getElementById("button-30");
seven.textContent = 7;
seven.onclick = () => next(7);
const eight = document.getElementById("button-31");
eight.textContent = 8;
eight.onclick = () => next(8);
const nine = document.getElementById("button-32");
nine.textContent = 9;
nine.onclick = () => next(9);

const zero = document.getElementById("button-41");
zero.textContent = 0;
zero.onclick = () => next(0);

const dot = document.getElementById("button-42");
dot.textContent = ".";
dot.addEventListener("click", dotty);
const equals = document.getElementById("button-43");
equals.textContent = "=";
equals.addEventListener("click", equally);

const plus = document.getElementById("button-33");
plus.textContent ="+";
plus.onclick = () => operator(1);
const minus = document.getElementById("button-23");
minus.textContent = "-";
minus.onclick = () => operator(2);
const times = document.getElementById("button-13");
times.textContent = "x";
plus.onclick = () => operator(3);
const divider = document.getElementById("button-03");
divider.textContent = "/";
divider.onclick = () => operator(4);

const clearCalc = document.getElementById("button-40");
clearCalc.textContent = "C";
clearCalc.addEventListener("click", clearly);

const pow = document.getElementById("button-01");
pow.textContent = "x^y";
pow.onclick = () => operator(5);
const fact = document.getElementById("button-02");
fact.textContent = "!";
fact.onclick = () => operator(6);

const gags = document.getElementById("button-00");
gags.textContent = "g";
// const puns = document.getElementById("button-01");
// puns.textContent = "p";




// if / 0 that's Apparently, they’re instruments of maths instruction.

// "Got stopped by customs with a calculator. Apparently, they’re instruments of maths instruction."
// "Opened the post, and there’s a calculator, an abacus, and a letter. Something just doesn’t add up."
// "What do you get when you cross a dog and a calculator? A friend you can count on!"
// "How do you get a calculator mad? By pushing its buttons!"
// "I was going to buy a pocket calculator, but then I realized I could just count my pockets."
// "Why did ⅕ go to the masseuse? Because it was two-tenths!"
// "Why do plants hate math? Because it gives them square roots."
// "What did the triangle say to the circle? 'You’re pointless!'"
// "Why did the calculator break up with the pencil? It couldn’t handle the pressure!"
// "What did the calculator say to the math book? 'You’ve got problems!'"
// "Why did the calculator get kicked out of class? It couldn’t stop calculating!"
// "What’s a calculator’s favorite dance? The algorithm!"
// "Why did the student bring a ladder to math class? Because they were going to high school!"
// "Why did the calculator go to therapy? It had too many unresolved equations!"
// "I told my calculator a joke, but it didn't get it. It just couldn't compute!"