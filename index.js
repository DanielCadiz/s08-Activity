console.log("Hello World");

let firstName = "John";
let lastName = "Smith";
let age = 30;
let hobbies = ["Biking", "Mountain Climbing", "Swimming"];
let	workAddress = {
		houseNumber: 32,
		street: "Washington",
		city: "Lincoln",
		state: "Nebraska"
	}

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Age: " + age);
console.log("Hobbies:");
console.log(hobbies);
console.log("Work Address:");
console.log(workAddress);

function printUserInfo(firstName, lastName, age) {
	console.log(firstName+" "+lastName+" is "+age+" years of age.")
	console.log("This was printed inside of the function")
	console.log(hobbies)
	console.log("This was printed inside of the function")
	console.log(workAddress)
}

printUserInfo(firstName, lastName, age);

function returnFunction() {
	return true;
}

let isMarried = returnFunction();
console.log("The value of isMarried: " + isMarried);