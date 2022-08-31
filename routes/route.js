const express = require('express');

const isAdmin = require('../middleware/auth');
const {
    userRegister,
    userLogin,
    getUsers,
    getbyemail,
    
    
} = require('../controller/user.controller');

const router = express.Router();

//User Registration
router.post('/register', userRegister);

//User Login
router.post('/login', userLogin);

//get all users
router.get('/findusers', getUsers);

//get users by email address
router.get('/:email', getbyemail);


//View all Laptops by both admin and user
//router.get('/view/laptops', ViewLaptops);

module.exports = router;
