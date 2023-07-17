const { BlogPost } = require('../models');

const postdata = [
    {
        title: 'What is MVC?',
        content: 'MVC is a simple way to breakup a program and allows for a seperation of concerns.',
        date_created: 'July 7, 2021 17:00:00',
        user_id: 1,
    },
    {
        title: 'Authentication vs. Authorization',
        content: 'Authentication is simply confirming identity and autherization means you are allowed to access a system',
        date_created: 'July 9, 2021 20:30:00',
        user_id: 2,
    },
    {
        title: 'Object-Relational Mapping',
        content: 'A software tool that acts as a bridge betweens object-oriented programs and a database.',
        date_created: 'July 11, 2021 22:00:00',
        user_id: 2,
    }
]

const seedPosts = () => BlogPost.bulkCreate(postdata);

module.exports = seedPosts;