class Field {
    constructor(field) {
        this.field = field;
        this.playerRow = 0;
        this.playerCol = 0;
        this.gameOver = false;
    }

    static generateField(height, width, holePercentage) {
        const totalTiles = height * width;
        const numHoles = Math.floor(totalTiles * (holePercentage / 100));
        const field = [];

        // Fill the field with neutral tiles (░)
        for (let i = 0; i < height; i++) {
            field.push([]);
            for (let j = 0; j < width; j++) {
                field[i].push('░');
            }
        }

        // Add the hat (^)
        const hatRow = Math.floor(Math.random() * height);
        const hatCol = Math.floor(Math.random() * width);
        field[hatRow][hatCol] = '^';

        // Add holes (O)
        for (let i = 0; i < numHoles; i++) {
            let holeRow, holeCol;
            do {
                holeRow = Math.floor(Math.random() * height);
                holeCol = Math.floor(Math.random() * width);
            } while (field[holeRow][holeCol] !== '░'); // Ensure hole doesn't overlap with hat or player
            field[holeRow][holeCol] = 'O';
        }

        return field;
    }

    print() {
        for (let row = 0; row < this.field.length; row++) {
            let rowString = '';
            for (let col = 0; col < this.field[row].length; col++) {
                if (row === this.playerRow && col === this.playerCol) {
                    rowString += '*'; // mark player's position
                } else {
                    rowString += this.field[row][col];
                }
            }
            console.log(rowString);
        }
    }

    move(direction) {
        // implementation remains the same as before
    }
}

module.exports = Field;
