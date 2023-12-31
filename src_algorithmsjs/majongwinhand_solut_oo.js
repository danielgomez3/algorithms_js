function complete(tiles) {
    let counts = new Map();

    // Count the occurrences of each tile.
    for(let i=0; i < tiles.length; i++) {
        let tile = tiles[i];
        counts.set(tile, (counts.get(tile) || 0) + 1);
    }

    let pairs = 0;
    for(let count of counts.values()) {
        if(count === 2) pairs++;  // It's a pair.
        else if(count % 3 === 0) continue; // It's a triple or multiple triples.
        else if(count % 3 === 2) pairs++; // It's a pair and a triple or multiple triples.
        else return false;  // It's a lone number or doesn't meet any condition.
    }

    return pairs === 1;
}

const tiles_1 = "88844";
const tiles_2 = "99";
const tiles_3 = "55555";
const tiles_4 = "22333333";
const tiles_5 = "73797439949499477339977777997394947947477993";
const tiles_6 = "111333555";
const tiles_7 = "42";
const tiles_8 = "888";
const tiles_9 = "100100000";
const tiles_10 = "346664366";
const tiles_11 = "8999998999898";
const tiles_12 = "17610177";
const tiles_13 = "600061166";
const tiles_14 = "6996999";
const tiles_15 = "03799449";
const tiles_16 = "64444333355556";
const tiles_17 = "7";

console.log(complete(tiles_1));   // true
console.log(complete(tiles_2));   // true
console.log(complete(tiles_3));   // true
console.log(complete(tiles_4));   // true
console.log(complete(tiles_5));   // true
console.log(complete(tiles_6));   // false
console.log(complete(tiles_7));   // false
console.log(complete(tiles_8));   // false
console.log(complete(tiles_9));   // false
console.log(complete(tiles_10));  // false
console.log(complete(tiles_11));  // false
console.log(complete(tiles_12));  // false
console.log(complete(tiles_13));  // false
console.log(complete(tiles_14));  // false
console.log(complete(tiles_15));  // false
console.log(complete(tiles_16));  // false
console.log(complete(tiles_17));  // false