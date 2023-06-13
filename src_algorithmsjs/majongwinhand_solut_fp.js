const complete = (tiles) => {
    const sortedTiles = tiles.split('').sort().join('');
    const isPair = (hand) => hand[0] === hand[1];
    const isTriple = (hand) => hand[0] === hand[1] && hand[0] === hand[2];

    const evaluateHand = (hand, pairCount = 0) =>
        hand.length === 0
            ? pairCount === 1
            : isTriple(hand)
            ? evaluateHand(hand.substring(3), pairCount)
            : isPair(hand)
            ? evaluateHand(hand.substring(2), pairCount + 1)
            : false;

    return evaluateHand(sortedTiles);
};

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

console.log(complete(tiles_1));
console.log(complete(tiles_2));
console.log(complete(tiles_3));
console.log(complete(tiles_4));
console.log(complete(tiles_5));
console.log(complete(tiles_6));
console.log(complete(tiles_7));
console.log(complete(tiles_8));
console.log(complete(tiles_9));
console.log(complete(tiles_10));
console.log(complete(tiles_11));
console.log(complete(tiles_12));
console.log(complete(tiles_13));
console.log(complete(tiles_14));
console.log(complete(tiles_15));
console.log(complete(tiles_16));
console.log(complete(tiles_17));
