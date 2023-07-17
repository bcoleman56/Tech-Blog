const { User } = require('../models');

const userdata = [
    {
        name: 'Jerry',
        username: 'JerryTheMan42',
        password: 'password1',
    },
    {
        name: 'Tim',
        username: 'Timmy22',
        password: 'password2',
    },
    {
        name: 'Gina',
        username: 'Gina77',
        password: 'password3',
    },
    {
        name: 'Micheal',
        username: 'TheMikeinator',
        password: 'password4',
    },
    {
        name: 'Linda',
        username: 'Linda42',
        password: 'password5',
    },
]

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;