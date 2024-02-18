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
        hashedPwd: {
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
            type: String,
            required: true
        },
        roles: {
            User: {
                type: Number,
                default: 2001
            },
            Editor: Number,
            Admin: Number
        },
        refreshToken: String

    } , {timestamps: true}
)


module.exports = mongoose.model('User' , userSchema)