const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routers/users.route")

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded( { extended: true }));
app.use(bodyParser.json());

app.use(userRouter);

/// not found route

app.use((req, res, next) => {
    res.status(200).json({ message: "route not found" });
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: "server error" });
})


module.exports = app;