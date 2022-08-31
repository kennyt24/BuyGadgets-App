const express = require('express');
const router = express.Router();

const isAdmin = require('../middleware/auth');
const {
  userRegister,
  userLogin,
  getUsers,
  getbyemail,
} = require('../Controller/user.controller');

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
