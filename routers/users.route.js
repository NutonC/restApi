const router = require("express").Router();
const { getAllUsers, createNewUser, updateUser, deleteUser} = require("../controllers/users.controller");


router.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

router.get("/users", getAllUsers);
router.post("/users", createNewUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);


module.exports = router;