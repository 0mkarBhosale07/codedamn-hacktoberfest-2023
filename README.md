# codedamn-hacktoberfest-2023

Codedamn Hacktoberfest 2023 solved questions

# Day 1: Find the Bug

You have been given a code snippet in the index.js file. You can view the file in the editor.

Running this code gives an error, instead of logging the text, can you find out what's the bug with this code and fix it. You should try to add as minimal characters as possible to fix this.

Hint: Think about what happens when square brackets are used after a string

# Day 2: Generating Hex Codes

You've been given a code snippet that creates random HexCodes for colors, however there seems to be a bug with the code that sometimes return 5 hex digits instead of 6.

Can you find out the bug and fix it. You can modify the function code to always return a proper hexCode. You have been also given a sample snippet to see the hex Codes generated by the function.

Here is how a sample hex Code looks like

'#afc3d1'
af ➔ Represents the Red (R) component in the hexadecimal color system.
c3 ➔ Represents the Green (G) component in the hexadecimal color system.
d1 ➔ Represents the Blue (B) component in the hexadecimal color system.
For testing the code you've written the function should be exported, do not change the default export of the function.

# Day 3: React Counter Bug

Sam is learning React and wanted to create a counter that when clicked on a button increments 3 times. The code written by Sam has been shared with you.

Help Sam figure out why the code only increments by one count instead of 3.

# Day 4: Jokes API

José is trying to make the people who visit their blog page laugh a little, so he's attempting to use a Jokes API to fetch a random joke and display it in the sidebar of his blog.

However, he seems to have hit a roadblock, can you help him debug why he's unable to receive a proper resonse from the Jokes API

The API link used in the getJoke() function is https://official-joke-api.appspot.com/random_joke

Here is a sample response from the api

{
"type": "general",
"setup": "What do you get when you cross a rabbit with a water hose?",
"punchline": "Hare spray.",
"id": 234
}
The getJoke() function should return an object with properties setup and punchline to be shown to visitors on the blog.

To complete this challenge you should be familar with the basics of axios which is used here for fetching the joke data.

Make sure that you return a proper object without adding any additional properties to the return type of this function

# Day 5: Get the Middle Value

Chloe is practicing JavaScript, she got a challenge to write a JavaScript Function getMiddleValue() which has a parameter arr should accept an array of numbers and sort the array and return the middle value of the array if length of the array is odd and average of the middle values if the length of the array is even.

She has written her code (which is shared with you in the index.js file), but there seems to a bug which she is unable to figure out. The function doesn't not return the middle number of the array having odd length. Can you help her debug this?

A sample array values are already provided to you to aid you in debugging this. Once you've fixed the bug, run the tests to verify if the bug has been fixed. You have to try to change the as minimal as possible and completely avoid re-writing the code.

All the best!

# Day 6: Critical Temperature

Your current production codebase has a few critical utility functions which have been assigned the task to fix the bug.

Desired Functionality
Here is a detailed breakdown of the shouldAlertOwner() function

This function accepts two parameters: durationInWarehouse and temperature.

There are some given constants that define critical values:

CRITICAL_TEMPERATURE is set at 30°C. If the temperature in the warehouse exceeds this, there may be a risk to the goods.
SECONDARY_TEMPERATURE thresholds at 25°C and works in combination with time duration.
CRITICAL_DURATION is set at 7 days. If items are stored in the warehouse beyond this period under certain conditions, there may be a risk to the goods.
The function then checks two conditions and will return true (indicating an alert should be sent to the owner) if either of the conditions are met:

First, it checks if temperature overtops CRITICAL_TEMPERATURE (30°C).
Second, it checks if the durationInWarehouse is more than CRITICAL_DURATION (7 days) and also if the temperature exceeds SECONDARY_TEMPERATURE (25°C). If both these conditions are met, an alert should be sent.
In both aforementioned cases, the function suggests potential risk, hence the function will return true, triggering an alert. If neither of the conditions met, it will return false, meaning there's no need to alert the owner.

Task
Your task is to debug the function and fix it by changing as minimal code as possible. You have to make sure that function meets these criteria give above.

All the best!

# Day 7: Add and Sort

Max was learning JavaScript, he attempted to create a one-liner function that would add a number to a given array and return the sorted array eliminating the need to do this continuously when required. However, he seems to have hit a roadblock with the code he was written, it isn't performing as expected.

Can you help him about by debugging his code? Try and understand the root cause of the problem and update the function logic.

# Day 8: Template Literals

You're currently consulting a Pet Shop along with your Colleage Shannon. She wrote a template literal for the reminder email which will be sent the pet Owners as a reminder for their next visit after their current appointment as completed.

When testing the code Shannon has encountered a problem, the template literal is not being replaced in the second occurence of the string, can you help her out and fix the bug!

Please make sure that you don't update the reminderTemplate string by mistake, the tests are written to direct string comparision.

# Day 9: Initializing Matrix

Theo, was tasked to create an initializeEmptyMatrix function, which would return a new array with the shape of mentioned rows and columns, which are passed as parameters to this function.

Theo, was testing his newly learned Array method .fill() to implement this function. However, when performing .push() operations on the array, there seems to be some un-intended consequences. Pushing a new element to the matrix is propogating the value across the entire matrix. Theo is unable to understand the root cause of this? You are free to use a different array methods or your own implementation to fix the problem.

Can you figure out why this behavior occurs and find a way to fix it. You can scour the web and stackoverflow to find the answer. You can also use our Jarvis AI to figure out the problem, you can access Jarvis AI by switching to the Jarvis AI Tab in the playground sidebar.

Take a look at the challenges before to understand the scope of this function, it should give you a good idea on the exact output the initializeEmptyMatrix is supposed to perform.

# Day 10: Correct Answers

Evan has built this good looking Quiz App. He's happy that he made this far in his learning journey with React & TypeScript. The code written by him may not be perfect, the quiz functionality seems to work fine.

However, taking a closer look while using his app, he figured out that something is wrong. The correct answer count is not being updated as expected. Selecting the correct option does not seem to increment the correct answer count.

Can you help Evan figure out what's wrong with his code? You would have to go through the logic written by Evan and find out why the count is not increment. You are not supposed to update the data or any other content or data that is part of this app.

Evan has made only two files for this Quiz app.

src/App.tsx
src/components/Question.tsx
You would have to go through the code written by him to understand the app and debug the problem and fix it. Once you've fixed the code, and running the tests should pass your challenge.

All the best!

If you're not familiar with TypeScript, don't worry. You should be able to solve this challenge without understanding the TypeScript parts of this app.

Do not remove any data-testid properties added in the code, removing them would fail the tests immediately. They're used for testing the code written by you

# Day 11: Logging Numbers

Alex, is working on a web application. The application is supposed to fetch some data, process it, and then present the data in a web page at a regular interval of 500 milliseconds.

Alex wrote the following boilerplate code, but when he runs it, the list items do not contain any text content instead of the expected processed data. He is unsure what went wrong and needs help to fix the bug. Can you help him fix the bug?

Once the bug is fixed the data returned should be logged to the console at a 500 milliseconds Interval.

# Day 12: Zoe's Task List

Zoe started learning JavaScript DOM Manipulation and decided to put her new skill to practice by buildilng the most classic To-Do List.

She made good progress and made a functional To-Do List that can add new todo items to the list. Clicking on the Add Task button adds a li element to the DOM.

However, she seems to have a hit a roadblock with the task completion. She has double checked her code, but couldn't find any bug.

Can you help her solve the bug!

# Day 13: Filter Tasks

Zoe who recently started learning JavaScript, continued working on her first project Task List. She's built a simple task list app and wanted to introduce filter functionality in her project, so that she can group the tasks based on their status.

She has implemented the logic for the filters in her code, but logic seems to be working as expected. Can you take a look at the code written by Zeo and correct it.

Do not try to refactor the entire function written, try to identify the exact lines of code that are buggy and modify the lines to make the code functional. You have to change the minimum amount of code possible to fix the challenge

# Day 14: CV Creator

Samir has been trying to create a new CV Creator App that takes in Education Input throughout an Employee's Career and display them in a small container element.

However, he seems to have been encountering errors from React when rendering the newly created Components, can you help him debug the problem and fix it for him?

He has also logged the JSON structure of the Data in the UI for you

# Day 15: Express Server

Bryan is trying to setup a simple route (get-data) in his express server to send data to the user end. However, before diving into the implementation of the data. He's trying to setup proper error handling for his route.

Can you help him return the proper status code when there is an error from the server instead of return 200

You can use the terminal to restart the server with the updated code & you can manually test the endpoing using the browser preview given to you

# Day 16: Discount Calculation

Samuel is working on building a simple shopping cart app with a discount functionality to give a generous 10% discount for users who are buying from his store for today.

He had worked on a simple Discount Button for his app. However, there seems to a problem with the discount calculation can you help him fix the problem?

Do not edit the html of this lab, the text and identifiers displayed on this page are used for testing your code

# Day 17: Number Parser

Zach is working on creating a simple number parser app which converts any given string and show the valid Decimal and Hexadecimal number.

Can you help him fix the series of bugs that are currently present in his current implementation and help his code work across all possible scenarios.

Make sure to checkout the challenges page for all the edge cases that are being tested to verify if the functionality is working as intented. If you're not familar with any of the functions that are being used in the code, try going through their documentation from the MDN Docs

Do not change any text / content that is being displayed on the HTML Page as they are used for string matching while testing the code.

# Day 18: Generating ULIDs

John has recently learned how to use ORM's for writing SQL Queries in his backend code. He wanted to put this to test by creating a simple User Account and showing the Generated [ULID] in the login page. However, he seems to have run into a few issues and a configuration error with the code he's written.

Can you take a look at the error message and help him bring his app to life!

The project uses a simple Next.js Project along with TypeScript and Tailwind CSS, with Prisma for Schema Generation and Kysely as the ORM, this lab uses SQLite Database.

It's recommended that you go through the packages used and the quick start guides of these libraires, if you're not familiar with them. They should help you understand what could have gone wrong.

Prisma Getting Started Example
Kysely Getting Started Guide
Prisma - Kysely Package
If you're not completely familiar with TypeScript, you don't need to worry about it. You don't need to write any new Types to pass this challenge.

HINT: If you're getting a cryptic error that you can't understand, try checking the src/db/database.ts file and the Database Path.

# Day 19: API Requests

Alvin just learnt about the Axios library and wanted to run a quick code snippet to query a few values from different APIs that have no relation.

You can access the code written by Alvin in the index.js file in your editor. There seems to be a quite a few bugs present in the code snippet written by him. Can you help him fix and bugs and help Alvin understand why each bug was caused!

Alvin wanted the fetchData function to return a random Title from the Json Placeholder API, a valid dog image from the dog.ceo api and the current Bitcoin value from coindesk api.

{
randomTitle: string,
imageLink: string // make sure that this is a valid URL link from the domain,
bitcoinPrice: number
}
Make sure to export the function using ESM Syntax. For the test cases to run and pass the lab.

TIP: You can go through the file explorer tab to view the rest of the files that are part of this labs.

# Day 20: State Mismatch

Ed has just started learning react, he seems to have run into a roadblock when trying to console.log the latest state of count . It always shows the previous button's state instead of the current value.

Can you find out and understand why his code is not working as Ed Expected & fix it for him.

NOTE: The test cases for this lab will pass if you attempt to increment the count when console logging, however that is not the right solution for this lab. Think about how react state updates when a setter function is called

# Day 21: Fixing Imports

Ajay just began learning how ES6 imports work. He tried setting up a simple example to try out his understanding of using imports in JavaScript, but he seem to have not been able to make the code work.

# Day 22: Inheritance Problem

Kirk, was attempting to solve a problem related to JavaScript Inheritance, the code written by Kirk has been shared with you, he's unable to figure out why his lab isn't passing the given challenges of the Problem.

Can you help Kirk figure out what's wrong with his code and help fix it for him

Concepts
Make sure that you've familiar with these topics before helping Kirk figure out what's wrong with his code.

JavaScript Classes: A class is a type of function, defined with the class keyword. It's a blueprint for creating objects.

Class Constructors: The constructor method is a special method for creating and initializing objects in a class.

JavaScript Methods: JavaScript methods are actions that can be performed on objects.

Class Inheritance: Class Inheritance is when a class inherits characteristics from another class.

# Day 23: Problem with Data Depulciation

Rahul was attempting to solve a challenging SQL problem. However, he seems to have a hit a roadblock with the query written. Can you help him solve the problem and fix his query.

The below information is the Instructions of the lab Solved by Rahul

Dataset Overview:
The Chinook dataset emulates a digital media store, containing tables related to albums, artists, tracks, invoices, and more.

Here are some key tables you'll be working with:

"Artist": Contains artist details.
"Album": Holds information about each album, linked to artists.
"Track": Details about individual tracks, their genres, media types, and the albums they belong to.
"Customer": Data about customers.
"Invoice": Billing information for purchases made by customers.
Environment:
This lab utilizes SQLite. Ensure you're familiar with its syntax and functionalities.
Make sure to stick to the exact names for tables and columns as defined in the Chinook database schema.
Always use double quotes for column and table names for clarity.
Challenges:
Your main task is to complete a set of SQL challenges. Each challenge will test a specific aspect of SQL, and you're expected to write SQL queries to fetch, analyze, or manipulate data from the Chinook dataset.

Objective: Retrieve the most recent invoice date for every customer in the Chinook database.

Tables Used:

Customer
Invoice
Instructions:

Join the Customer table with the Invoice table using the appropriate key.
For each customer, determine and select the most recent invoice date.
Your result should display the following columns:
CustomerId
MaxInvoiceDate (this should be an alias for the latest invoice date for clarity)
Output Specifications:

Columns:

CustomerId
MaxInvoiceDate
Order:

The results should be ordered by CustomerId in ascending order.
Hint: Consider using aggregation functions and grouping to achieve the desired result. Ensure all columns are named accurately as described to pass the evaluation.

Notes:
Carefully read each challenge's description. Pay close attention to the expected output and the order of results.
Always ensure that your SQL queries match the specified requirements to pass the evaluation.

# Day 24: Hashing Functions

Lois was implementing various hash functions for her personal project. The return value of the functions doesn't seem to be correct. Can you help her fix the problem with the Hash Functions.

If you need help learning about Hash Functions, check out it's documentation

NOTE: Make sure you're exporting all the functions that you've created using ESM Syntax
