/**
 * Returns a 6 digit hexCode prepended with '#' as a valid color code
 * @returns {string} hexCode
 */
export function generateRandomHexCode() {
	let hexCode = "#";

	for (let i = 0; i < 3; i++) {
		//hexCode += Math.floor(Math.random() * 256).toString(16);
        // Generate a random number between 0 and 255
        const component = Math.floor(Math.random() * 256);
        // Convert the component to a 2-digit hexadecimal string
        const componentHex = component.toString(16).padStart(2, '0');
        // Append the component to the hexCode
        hexCode += componentHex;
	}

	return hexCode;
}

// Sample Strings
for (let i = 0; i < 100; i++) {

	console.log(generateRandomHexCode());
}
