const field = require('./field');
const prompt = require('prompt-sync')({sigint: true});
const readLine = require('readline')

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';




const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser(field) {
    rl.question('Which direction would you like to move? (U/D/L/R)', (direction) => {
        if (direction === 'U' || direction === 'D' || direction === 'L' || direction === 'R') {
            const result = field.move(direction);
            console.log(field.print());
            if (result === 'win') {
                console.log('Congratulations! You found your hat!');
                rl.close();
            } else if (result === 'lose') {
                console.log('Oops! You fell into a hole. Game over.');
                rl.close();
            } else {
                promptUser(field);
            }
        } else {
            console.log('Invalid direction. Please enter U (up), D (down), L (left), or R (right).');
            promptUser(field);
        }
    });
}

const myField = new Field([
    ['*', 'O', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░']
]);

console.log('Welcome to Find Your Hat game!');
console.log('Here is the current field map:');
console.log(myField.print());
promptUser(myField);
