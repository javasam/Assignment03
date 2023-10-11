let coinFlip;

coinFlip = prompt("Enter number of times to flip coin");
let randomNum;
for (let i = 0; i < coinFlip; i++) {
    randomNum = Math.round(Math.random());
}
if (randomNum === 0) {
    console.log("Heads!")
} else {
    console.log("Tails!")
}