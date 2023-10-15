function fetchData() {
	// Simulates fetching data
	return Promise.resolve([10, 20, 30, 40, 50]);
}

function processItem(item) {
	// Simulates processing each item
	return new Promise((resolve) => resolve(item * 2));
}

async function scheduleLogging(data) {
	for (var i = 0; i < data.length; i++) {
		(function (item) { // Create a closure to capture the item value
			setTimeout(async function () {
				let listItem = document.createElement("li");
				listItem.textContent = item; // Use the captured item value
				document.body.appendChild(listItem);
			}, 500 * i);
		})(data[i]); // Pass the data item to the closure
	}
}

async function init() {
	const data = await fetchData();
	scheduleLogging(data);
}

// Start executing the code
init();
