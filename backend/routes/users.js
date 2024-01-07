const express = require('express')
const {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    handleLogin,
    handleRefreshToken,
    handleLogout  
} = require('../controllers/userController')
const verifyJWT = require('../middleware/verifyJWT');
const verifyRoles = require('../middleware/verifyRoles');
const ROLES_LIST = require('../config/roles_list');
const router = express.Router()

router.route('/').get(verifyJWT,verifyRoles(ROLES_LIST.Admin),getUsers)
// router.get('/' , getUsers)
router.get('/refresh',handleRefreshToken)
router.get('/:id' , getUser)
router.delete('/logout', handleLogout);
router.post('/' , createUser)

router.post('/auth' , handleLogin)

router.route('/:id').delete(verifyJWT,verifyRoles(ROLES_LIST.Admin),deleteUser)

router.patch('/:id' , updateUser)



module.exports = router

