const mongoose = require('mongoose')

let connection = async () => {
    try {
        mongoose.connect(
            process.env.LINK_DB
        )
        console.log('connected to database');
    } catch (error) {
        console.log(error.message)
    }
}

connection()