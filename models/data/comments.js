const comments = [
    {
        name : "Gabriel",
        photo: "https://avatars.githubusercontent.com/u/107517584?v=4",
        showId: '63875956b53fa82e80633c39',
        userId: '6371414fc5883aae07272561',
        date: '2020-04-20T00:00:00.000Z',
        comment: 'This is a comment 1'
    },
]


require('dotenv').config()
require('../../config/database')
const Comment = require('../Comment')

comments.forEach(e=> {
    Comment.create({
        name: e.name,
        photo: e.photo,
        showId: e.showId,
        userId: e.userId,
        date: e.date,
        comment: e.comment,
    })
})