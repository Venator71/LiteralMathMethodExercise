// Q 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// Q 1b
console.log(warmHugs.toUpperCase());

// Q 1c
warmHugs = warmHugs.replace("like","love");
// console.log(warmHugs.replace("like","love"));


// Q 2a

let beenImpaled = "Oh, look at that. I've been impaled.";

// Q 2b
console.log(beenImpaled.slice(18));
// console.log(beenImpaled.slice(-18));
// console.log(beenImpaled.length);
// console.log(beenImpaled.slice(18, 36));
beenImpaled = beenImpaled.slice(18);

// Q 3a
let dotDotDot = "..."

// Q 3b
let skullBones  = `I don't have a skull${dotDotDot}or bones.`
console.log(skullBones);

// Q 4
console.log(Math.PI);

// Q 5

randomNumber = Math.random()
randomNumber *= 3;
randomNumber = Math.floor(randomNumber)
randomNumber++;
console.log(randomNumber);


// Bonus Questions

// 6
console.log(" Let it Go!".toUpperCase().repeat(3).slice(-21));


// 7a
let reindeer = "Reindeers are better than people.";
reindeer = reindeer.replaceAll(" ","_")
console.log(reindeer);

// 8

console.log(Math.sqrt(2));

// 9
/*
let newRandomNumber = Math.random();
newRandomNumber *=17;
newRandomNumber = Math.floor(newRandomNumber);
console.log(newRandomNumber); 
*/

let newRandomNumber = (Math.floor((Math.random() * 16) + 7));
console.log(newRandomNumber);


// console.log(Math.floor((Math.random() * 16) + 7));