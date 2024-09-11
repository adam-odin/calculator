const body = document.querySelector("body")
const container = document.querySelector(".container")
const frame = document.createElement("div");
container.appendChild(frame);

const screen = document.createElement("div")
screen.classList.add("screen");
const display = document.createElement("p");
display.textContent="Ready for an add-venture?"
display.id="display";
screen.appendChild(display);
frame.appendChild(screen);

const buttons = document.createElement("div");
buttons.classList.add("buttons");
frame.appendChild(buttons);

for (let j = 0; j < 4; j++) {
    const row = document.createElement("div");
    row.classList.add("row"+j);
    buttons.appendChild(row);
}

const numberButtons = 16;
for (let i = 0; i <numberButtons; i++) {
    const button = document.createElement("button");
    button.classList.add("button");
    button.id="button-"+i;
    button.textContent="a"+i;
    let rowNumber = "row"+(i % 4);
    buttons.appendChild(rowNumber);
}



// if / 0 that's Apparently, they’re instruments of maths instruction.

// "I can always count on my calculator."
// "My calculator stopped working during the exam. I can't count on it anymore."
// "The minus key on my calculator is broken, but on the plus side, it still works!"
// "Got stopped by customs with a calculator. Apparently, they’re instruments of maths instruction."
// "Opened the post, and there’s a calculator, an abacus, and a letter. Something just doesn’t add up."
// "What do you get when you cross a dog and a calculator? A friend you can count on!"
// "How do you get a calculator mad? By pushing its buttons!"
// "I was going to buy a pocket calculator, but then I realized I could just count my pockets."
// "Why did the two fours skip lunch? They already eight!"
// "Why did ⅕ go to the masseuse? Because it was two-tenths!"
// "Why do plants hate math? Because it gives them square roots."
// "What did the triangle say to the circle? 'You’re pointless!'"
// "Why did the calculator break up with the pencil? It couldn’t handle the pressure!"
// "What did the calculator say to the math book? 'You’ve got problems!'"
// "Why was the calculator so good at math? Because it always knew how to add up!"
// "What do you call a calculator that tells jokes? A pun-culator!"
// "Why did the calculator get kicked out of class? It couldn’t stop calculating!"
// "What’s a calculator’s favorite dance? The algorithm!"
// "Why did the student bring a ladder to math class? Because they were going to high school!"
// "How does a calculator flirt? It says, 'You can count on me!'"
// "Why did the calculator go to therapy? It had too many unresolved equations!"
// "I told my calculator a joke, but it didn't get it. It just couldn't compute!"