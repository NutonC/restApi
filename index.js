const app = require("./app");

const PORT = 4000;

app.listen(PORT, (req, res) => {
    console.log(`The server is running on PORT ${PORT}`);
})