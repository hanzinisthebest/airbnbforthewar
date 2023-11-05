const User = require('../models/userModel')
const mongoose = require('mongoose')

const createUser = async (req , res) => {
    const {firstName , lastName , username , email , password, birthDate , isRenter , phone} = req.body
    try {
            const user = await User.create({firstName , lastName , username , email , password, birthDate , isRenter , phone})
            res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

const getUser = async (req,res) => {

    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such user'})
    }
    const user = await User.findById(id)
    if(!user) {
        return res.status(404).json({mssg:'no such user'})
    }
    res.status(200).json({user})
}


const deleteUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such user'})
    }
    const user = await User.findOneAndDelete({_id:id})
    if(!user) {
        return res.status(404).json({mssg:'no such user'})
    }
    res.status(200).json({user})
}

const updateUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such user'})
    }
    const user = await User.findByIdAndUpdate({_id:id} , {
        ...req.body
    })
    if(!user) {
        return res.status(404).json({mssg:'no such user'})
    }
    res.status(200).json({user})
}


module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
}