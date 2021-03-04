// The “Coin Flip” Game Redux
var coinFlip;
let choice = parseInt(prompt("Hello, how many times do you want to execute it? "));
for (let i = 0; i < choice; i++) {
    let randomNum = Math.round(Math.random());
    console.log (randomNum);
    coinFlip = randomNum;
    if (coinFlip === 0) {
        console.log ('Heads');
    }
    else if (coinFlip === 1) {
        console.log ('Tails');
    }
}