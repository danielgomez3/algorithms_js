/* RULES:
- We don't care about any # of triples. They're just meaningless.
- ONLY one pair allowed.
- The deciding FALSE factor is finding a single matchless number.
- An array can be empty, and still be a bad hand. Case: We didn't find a single pair.
We need a game-state that keeps track if we found a pair once the array is empty. Otherwise, we found nothing of substance.

*/

/* CODE NOTE:
- This works great, because first we sort it. No need to track states! Once we see an unmatched digit, we're good!
- If we use recursion and array copies, we will never run into an instance where a pair is confused for a triple, or a 'pairless'
- When 
Check the following in order:
'Pairless' - If does not have an immediate neighbor. 
Pair - If two numbers are the same, quickly check to see if the third one is the same.
Triple - If two numbers are the same, quickly check to see if the third one is the same.
*/


/* TODO:
Implement an anon function. arg is x. Default of 'x'. if
OR
Implement a curried function. args are x, y. Give and default 'x' false. 
When you encounter a pair, curry 'true'.
Compare with logical || in function body. This will atomically track game state.

NOTE: We need the function to default to false, but also avoid mutability! This is why
we curry.


*/

const ispair = arr => arr[0] === arr[1];
const istriple = arr => arr[0] === arr[1] && arr[0] === arr[2];

const complete = (tiles) => {
  const checkHand = (arr) =>
    undefined
  return checkHand(tiles.split('').sort()); // Start with hasPair set to false

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