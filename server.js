const express = require('express');
const app = express();
const candidates = require("./candidates/candidates")
const cors = require('cors')

app.use(cors())

// candidates route
app.use("/candidates", candidates);

// default route
app.get("*", function(req, res, next) {
    res.status(404).send("Endpoint not found");
});


app.listen(3000, () => {
    console.log("Listening on port 3000");
});


