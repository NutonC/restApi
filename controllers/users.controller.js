const { v4: uuidv4, v4 } = require('uuid');
const users = require("../models/users.model");

// get all users

const getAllUsers = (req, res) => {
    res.status(200).json({ users })
};

// create new users

const createNewUser = (req, res) => {

    const newUser = {
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email,
    }
    users.push(newUser);
    res.status(200).json({ users });
};

// update new user

const updateUser = (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;

    users.filter((user) => user.id === userId).map((selectedUser) => {
        selectedUser.username = username;
        selectedUser.email = email;
    })

    res.status(200).json({ users});
}

// delete user

const deleteUser = (req, res) => {
    const userId = req.params.id;

    users.filter((user) => user.id !== userId);
    res.status(200).json({ users})
}

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
