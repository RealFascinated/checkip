const express = require("express");

// Consts
const PORT = process.env.PORT || 3000;

// Express application
const app = express();

// Get ip route
app.get("/", (req, res) => {
	const ip =
		req.ip || req.headers["X-Forwarded-For"] || req.headers["X-Requested-With"];

	res.send(ip);
});

// Start express server
app.listen(PORT, () => {
	console.log("Listening on port http://localhost:" + PORT);
});
