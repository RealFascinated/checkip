const express = require("express");

// Consts
const PORT = process.env.PORT || 3000;

// Express application
const app = express();

// Get ip route
app.get("/", (req, res) => {
	const ip =
		req.headers["X-Forwarded-For"] ||
		req.headers["Cf-Connecting-Ip"] ||
		req.ip ||
		req.connection.remoteAddress ||
		req.socket.remoteAddress ||
		req.connection.socket.remoteAddress;

	res.send(ip);
});

// Start express server
app.listen(PORT, () => {
	console.log("Listening on port http://localhost:" + PORT);
});
