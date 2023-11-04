// Create a class named 'Person' with a constructor that accepts the 'name' parameter.
class Person {
	constructor(name) {
		this.name = name;
	}

	// Add a method named 'greeting' to the 'Person' class that returns 'Hello, my name is [name]'
	greeting() {
		return `Hello, my name is ${this.name}`;
	}
}

// Create a class named 'Student' that extends the 'Person' class.
class Student extends Person {
	// Add a constructor to the 'Student' class that accepts 'name' and 'course' as parameters
	// and calls the parent class constructor with the 'name' parameter.
	constructor(name, course) {
		super(name);
		this.course = course;
	}

	// Add a method named 'courseDetails' to the 'Student' class that returns 'I am studying [course]'.
	courseDetails() {
		return `I am studying ${this.course}`;
	}
}

// Test the code with sample data
const person = new Person('John');
console.log(person.greeting()); // Output: Hello, my name is John

const student = new Student('Alice', 'Math');
console.log(student.greeting()); // Output: Hello, my name is Alice
console.log(student.courseDetails()); // Output: I am studying Math


//index.html file code

/*

<!DOCTYPE html>
<html>
	<head>
		<title>Codedamn Lab</title>
	</head>
	<body>
		<script src="script.js"></script>
	</body>
</html> 

*/
