const fs = require('fs');

function generateBigBangArray(start: number, end: number): string[] {
    const result: string[] = [];
    
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('BIGBANG');
        } else if (i % 3 === 0) {
            result.push('BIG');
        } else if (i % 5 === 0) {
            result.push('BANG');
        } else {
            result.push(i.toString());
        }
    }
    
    return result;
}

// Generate array from 1 to 100
const bigBangArray = generateBigBangArray(1, 100);

// Write to output.json
fs.writeFileSync('output.json', JSON.stringify(bigBangArray, null, 2));

console.log('Output has been written to output.json'); 