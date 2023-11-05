const express = require('express')
const {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
} = require('../controllers/userController')

const router = express.Router()


router.get('/' , getUsers)

router.get('/:id' , getUser)

router.post('/' , createUser)

router.delete('/:id' , deleteUser)

router.patch('/:id' , updateUser)



module.exports = router

