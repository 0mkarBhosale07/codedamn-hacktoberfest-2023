import axios from "axios";

/**
 * @typedef {Object} Joke
 * @property {string} setup - The setup of the joke.
 * @property {string} punchline - The punchline of the joke.
 */

/**
 * returns a random joke from an api
 * @returns {Joke}
 */
export async function getJoke() {
	// Obtain the response from API
	const response =await axios.get(
		"https://official-joke-api.appspot.com/random_joke"
	);

	// Parse the response
    console.log({setup:response.data.setup,punchline:response.data.punchline})
    return {setup:response.data.setup,punchline:response.data.punchline}
	// const [setup, punchline] = response.data;
    // return {
    //     setup:setup,
    //     punchline:punchline
    // }

	// return {
	// 	setup: data.setup,
	// 	punchline: data.punchline,
	// };
}

getJoke();

// Sample Test
const joke = getJoke();
console.log(joke);
