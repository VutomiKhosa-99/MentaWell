
const express = require('express')
const userController = require('../controllers/auth_controller')
// const { signup, login } = userController
const userAuth = require('../middleware/user_auth')
// const { sendResetOTP, resetPassword } = require('../controllers/User/user.controllers'); 
const router = express.Router()

router.post('/signup', userAuth.saveUser, userController.signup)

router.post('/login', userController.login )

router.get("/getAll",  userController.getUsers);


router.delete('/:id', userController.deleteUserById);



router.put('/:id', userController.updateUserById);


module.exports = router