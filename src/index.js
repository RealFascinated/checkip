const express = require("express");
const morgan = require("morgan");

// Consts
const PORT = process.env.PORT || 3000;

// Express application
const app = express();

// Logging
app.use(morgan("combined"));

// Security settings
app.disable("x-powered-by");

// Get ip route
app.get("/", (req, res) => {
	console.log(req.headers);
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
