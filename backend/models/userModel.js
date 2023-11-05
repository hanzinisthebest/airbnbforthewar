const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema (
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        birthDate: {
            type: Date,
            required: true
        },
        isRenter: {
            type: Boolean,
            required: true
        },
        phone: {
            type: Date,
            required: true
        }
        

    } , {timestamps: true}
)


module.exports = mongoose.model('User' , userSchema)