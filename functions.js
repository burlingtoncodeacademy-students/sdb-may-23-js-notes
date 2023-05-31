/* 
    ? Functions
    * a block of reusable code; it can:
    * take in arguments thru its paramters (doors to inside fx)
    * perform an action
    * and return a result

    ? There are two types of functions:
    * function declaration
        * hoisted
    * function expression
        * not hoisted
    
    ? Functions
    * need to be invoked (called) to run
    * can have none, one, or many parameters
    * data coming thru the paramter is called an argument
    * can only have one return statement value
    * if no return is provided, it defaults to undefined
    
    Syntax:

    function identifier(parameter, parameter, ...) {
        function code block
        return statement
    }

*/

// Function definition
function sayHello() {
	return "Hello May Cohort";
}

// Function invocation (calling)
let catchVariableForFunction = sayHello();
console.log(catchVariableForFunction);

function sayGoodbye() {
	console.log("Goodbye");
}

sayGoodbye();

let goodbyeCatch = sayGoodbye();

console.log(goodbyeCatch);

function greetStudent(student) {
	return `Hello, ${student}`;
}

console.log(greetStudent("Dante"));
console.log(greetStudent("Tiffania"));
console.log(greetStudent("Andy"));

// Take a string and return an array

function strToArr(str) {
	let arr = [];
	for (i of str) {
		arr.push(i);
	}
	return arr;
}

let paul = strToArr("paul niemczyk");
console.log(paul);
let cyrus = strToArr("cyrus fullam");
console.log(cyrus);

/* 
    ? Function Expression
    * utilizes a variable as a placeholder

    Syntax:

    let identifier = function(params) {
        code block
        return statement
    }

*/

let nameAge = function (name, age) {
	return `Your name is ${name} and you're ${age} years old.`;
};

console.log(nameAge("Melissa", 28));

/* 
    ? Challenge
    * Create a function that will give you a result of a quadratic formula based on all of the necessary factors
    * Check if the data type is Number. If not, return, "please use whole numbers only"
    * Please return the result but also the value of the top and bottom separately
    
    -b+-sqrt(b**2 -4ac)/2a
*/
