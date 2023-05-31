/* 
    ? Loops
    * allow us to execute a block of code repeatedly
    * they stop once an exit condition has been met
*/

/* 
    ? For Loop
    * iterates over any data type that's iterable
    * iterator = placeholder value
    * iterable = data type we can count through
    
    Syntax:

    for (start; stop; step) {
        code block to execute for each iteration
        until stop/exit condition is true
    }
*/

for (let i = 0; i <= 10; i = i + 1) {
	console.log(i);
}

let longWordEN = "supercalifragilistiexpialidocious";
for (count = 0; count < longWordEN.length; count = count + 1) {
	console.log(`Index: ${count}, Letter: ${longWordEN[count]}`);
}

/* 
    ? For-in Loop
    * allows us to seek an index value of an interable
    * for-in does not require an index number
    * for-in does not require a stop statement
*/

let longWordDE = "kraftfahrzeug-hafplifchtversicherung";
for (i in longWordDE) {
	console.log(`Index: ${i} Letter ${longWordDE[i]}`);
}

/* 
    ? For-of Loop
    * allows us to seek iterable value against a condition
*/

let longWordPL = "konstantynopolitanczykowianeczka";

for (i of longWordPL) {
	console.log(i);
}

/* 
    Difference between for-in and for-of in terms of use?
    * For-in allows us to loop over items that are not an array
    * For-of only works if an item is indexed linked an array or string
*/

/* 
    ? While Loop
    * executes a statement inside of a code block
    * it does so as long as a while condition evaluates to true
    
    Syntax:

    while (true) {
        do this until false
    }
*/

let loopCount = 0;

while (loopCount <= 10) {
	console.log(loopCount);
	loopCount = loopCount + 1;
}

// Challenge 1

for (i = 2; i >= -102; i -= 4) {
	// i = i - 4
	console.log(i);
}

// Challenge 2

let animalArray = ["bird", "pig", "cat", "mouse", "dog"];

for (animal in animalArray) {
	// if (animalArray[animal] == "pig") {
	// 	console.log("Oink");
	// } else if (animalArray[animal] == "cat") {
	// 	console.log("meow");
	// } else if (animalArray[animal] == "mouse") {
	// 	console.log("cheese");
	// } else if (animalArray[animal] == "dog") {
	// 	console.log("woof");
	// } else if (animalArray[animal] == "bird") {
	// 	console.log("chirp");
	// }

	// animalArray[animal] == "pig"
	// 	? console.log("oink")
	// 	: animalArray[animal] == "bird"
	// 	? console.log("chirp")
	// 	: animalArray[animal] == "cat"
	// 	? console.log("meow")
	// 	: animalArray[animal] == "mouse"
	// 	? console.log("cheese")
	// 	: animalArray[animal] == "dog"
	// 	? console.log("woof")
	// 	: null;

	switch (animalArray[animal]) {
		case "pig":
			console.log("oink");
			break;
		case "cat":
			console.log("meow");
			break;
		case "bird":
			console.log("chirp");
			break;
		case "dog":
			console.log("woof");
			break;
		case "mouse":
			console.log("cheese");
			break;
	}
}

// Potato Poem solution
let lineNumber = 0;

while (lineNumber < 8) {
	lineNumber++;
	// lineNumber == 4 -> number!
	// lineNumber == 8 -> more!
	// lineNumber + potato!
	lineNumber == 4
		? console.log(`${lineNumber}!`)
		: lineNumber == 8
		? console.log(`More!`)
		: console.log(`${lineNumber} potato`);
}

/* 
    ? Do while Loop
    * executes code in the do section while a condition remains true
*/

let doCount = 0;

do {
	console.log(doCount);
	doCount++;
} while (doCount <= 10);

/* 
    ! FizzBuzz Challenge
    * print the numbers from 1-100
    * if a number is a multiple of 3, print "Fizz"
    * if it's a multiple of 5, print "Buzz"
    * if it's a multiple of both, print "Fizz Buzz"
    * otherwise, print the number
*/

for (let i = 1; i <= 100; i++) {
	// i % 3 === 0 && i % 5 === 0
	i % 15 === 0
		? console.log("Fizz Buzz")
		: i % 3 === 0
		? console.log("Fizz")
		: i % 5 === 0
		? console.log("Buzz")
		: console.log(i);
}

let newCount = 0;

// while (count <= 100) {
// 	console.log(count);
// 	count++;
// }

// for (i in newCount) {
// 	if (count <= 100) {
// 		count++;
// 		console.log(i);
// 	}
// }
