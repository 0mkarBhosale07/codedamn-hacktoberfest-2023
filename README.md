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
