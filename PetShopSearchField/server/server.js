const express = require("express");
const cors = require("cors");

const app = express();

import "./SearchBar.jsx";

// Allow all CORS requests
app.use
(cors({
    origin: "http://127.0.0.1:5173/"
}));

// Your API routes and other server code can go here
app.get("http://localhost:3001/pets",
    (req, res) => {
        res.json(pets);
    });

// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});