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
router.post('/auth' , handleLogin)
router.use(verifyJWT)
router.route('/users').get(verifyRoles(ROLES_LIST.Admin),getUsers)
// router.get('/' , getUsers)
router.get('/refresh',handleRefreshToken)
router.get('/:id' , getUser)
router.delete('/logout', handleLogout);
router.post('/' , createUser)

router.route('/:id').delete(verifyJWT,verifyRoles(ROLES_LIST.Admin),deleteUser)

router.patch('/:id' , updateUser)



module.exports = router

