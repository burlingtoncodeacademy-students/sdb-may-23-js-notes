/* 
    ? Conditionals & Logic Gates
    * conditional statements check if an expression is truthy
    * the expression must always resolve to true
    * if it's truthy, code block executes
    * if an expression is falsey, code block does not run
*/

/* 
    ? if statement
    * checks if an expression is true and executes code
*/

let lightSwitch = true;

if (lightSwitch) {
	console.log("The light is on");
}

/* 
    ? else if statement
    * allows us to add additional expression to check for
    * executes when prior condition has not been satisfied
    * once satisfied, interpreter exists the conditional chain
*/

let grade = 82;

// Chained and exists when first condition satisfied
if (grade >= 90) {
	console.log("You got an A");
} else if (grade >= 80) {
	console.log("You got a B");
}

// Fire in sequence if satisfied
if (grade >= 80) {
	console.log("B");
}
if (grade >= 81) {
	console.log("Another B");
}

/* 
    ? Else statement
    * if all else fails, execute this code
*/

lightSwitch = "potato";

if (lightSwitch == true) {
	console.log("The light is on");
} else if (lightSwitch == false) {
	console.log("The light is off");
} else {
	console.log("Duuuude, this thang is posessed! RUN!!!!");
}

/* 
    ? Syntax

    if (conditionIsTrue) {
        execute this code block
    } else if (conditionIsTrue) {
        execute this code block
    } else {
        execute this code block
    }
*/

/* 
    ? Logical Operators NOT AND OR
    * OR operator ( || )
        * true if one of the conditions is true
        * ex: I will be happy if I do laundry or clean the house
        * (clean & laundry) == true
        * (clean or laundry) == true
        * (no clean or yes laundry) == true
        * (yes clean or no laundry) == true
        * (no clean or no laundry) == false
    * AND operator ( && )
        * true if both conditions are true
        * ex: I will be happy if I do laundry and clean the house
        * (clean & laundry) == true
        * (no clean & laundry) == false
        * (clean & no laundry) == false
        * (no clean & no laundry) == false
    * NOT operator ( ! )
        * opposite of the logical expression
        * flips it
 */

let laundry = false;
let cleaning = false;

// AND example
if (laundry && cleaning) {
	console.log("I got all of my chores done");
}

// OR example
if (laundry || cleaning) {
	console.log("I got one of the tasks done");
}

// NOT example

if (!laundry) {
	console.log("The laundry is not done");
}

if (laundry != true) {
	console.log("!= or !==");
	console.log("The laundry is not done");
}

/* 
    ? Ternaries
    * a quick way of creating if/else conditional
    * commonly used to check a flag
    * they work on expressions (they do not return values)
*/

let ignition = true;

if (ignition) {
	console.log("The car is on");
	console.log("Yay I'm happy it's not broken");
} else {
	console.log("The car is off");
}

ignition ? console.log("Car is on") : console.log("Car is off");

// Chaining Ternaries

let season = 1;

// if (season == 1) {
// 	console.log("spring");
// } else if (season == 2) {
// 	console.log("summer");
// } else if (season == 3) {
// 	console.log("autumn");
// } else if (season == 4) {
// 	console.log("winter");
// } else {
// 	console.log(`${season} is not an appropriate input`);
// }

season == 1
	? console.log("spring")
	: season == 2
	? console.log("summer")
	: season == 3
	? console.log("fall")
	: season == 4
	? console.log("winter")
	: console.log(`${season} is not an appropriate input`);

/* 
    ? Ternary Syntax

    conditional ? code block if true : code block if false

    conditional ? code block if true
        : else if statement ? code block if true
        : else if statement ? code block if true
        : else statement OR null

    ! you MUST have an else statement

*/

// Ternary Challenge Solution
/* 
    if age < 18 you're a teenager
    if age >= 18 travel but no drinking
    if age >= 21 you can drink
*/

let age = 28;

// if (age >= 21) {
// 	console.log("You can drink");
// } else if (age >= 18) {
// 	console.log("You can travel but cannot drink");
// } else if (age < 18) {
// 	console.log("You're a teenager");
// }

age >= 21
	? console.log("You can drink")
	: age >= 18
	? console.log("You can travel but cannot drink")
	: age < 18
	? console.log("You're a teenager")
	: null;

// Leap Year Challenge Solution

let year = 1900;
// year/4 but not /100 OR
// /400

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
	console.log(`The ${year} is a leap year`);
} else {
	console.log(`The ${year} is not a leap year`);
}

/* 
    ? Switch Statements
    * switches execute a block of code dependent upon a different case
    * we ask question that requires a specific response determined by our answer
*/

let uprightInstructor = "Paul";

switch (uprightInstructor) {
	// information that cases are compared against
	case "Paul":
		// condition that's comapred against the switch
		// executes the code below
		console.log(`${uprightInstructor} is a Lead SD Instructor`);
		break;
	// used to stop other case from evaluating
	case "Rob":
		console.log(`${uprightInstructor} has dad jokes`);
		break;
	case "Henry":
		console.log(`${uprightInstructor} is a Teaching Assistant`);
		break;
	default:
		// equivalent of an else statement; a catch-all
		console.log(`${uprightInstructor} may or may not work here.`);
}

/* 
    ? Switch Challenge

    * Create a grade variable that holds a value (ex: 78)

    * Create a switch statement that checks against the variable.

    * If it's above 89, console log "You got an A"
    * greater than 79 B
    * greater than 66 C
    * greater than 59 D
    * below 59 F
    * default statement of "Input is not a grade"
    
    If you cannot create a switch, try an if/else or a ternary first
*/

grade = 62;

switch (true) {
	case grade >= 89:
		console.log("A");
		break;
	case grade >= 79:
		console.log("B");
		break;
	case grade >= 66:
		console.log("C");
		break;
	case grade >= 59:
		console.log("D");
		break;
	case grade < 59:
		console.log("F");
		break;
	default:
		console.log(`${grade} is not a grade`);
}
