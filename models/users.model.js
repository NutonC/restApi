const { v4: uuidv4, v4 } = require('uuid');

const users = [
    {
        id: uuidv4(),
        username: "Nuton Chakma",
        email: "nuton121@gmail.com",
    },
    {
        id: uuidv4(),
        username: "Cannon Chakma",
        email: "canon121@gmail.com",
    },
    {
        id: uuidv4(),
        username: "Sachin Chakma",
        email: "sachin121@gmail.com",
    }
]

module.exports = users;