const express = require("express");
const app = express();
const port = process.env.PUBLIC_PORT;

function getDataFromDatabase(callback) {
	// Sample Data Error from DB
	setTimeout(() => {
		const error = new Error("Internal Server Error");
		callback(error, null);
	}, 1000);
}

app.get("/get-data", (req, res) => {
	getDataFromDatabase((error, data) => {
		if (!error) {
			res.status(200).json({data});
		} else {
			res.status(500).json({ error: error.message });
		}
	});
});

app.get("/", (req, res) => {
	res.send("Express Server is up!");
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
