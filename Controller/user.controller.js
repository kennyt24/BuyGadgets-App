const User = require('../model/usermode');
const laptops = require('../model/adminmodel')

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { response } = require('../app');
const { model } = require('mongoose');


exports.userRegister = async(req, res) => {
    try {
        const{phone, email, FirstName,
            LastName, password
            }=req.body
       
        const salt = await bcrypt.genSalt(10);
        const harsh = await bcrypt.hash(password, salt);
        const newUser = await User.create({phone, email, FirstName,
            LastName, password:harsh});
            return res.status(201).json({message:"User has been registered", newUser});
    } catch (error) {
        console.error(error);
    }
};

exports.userLogin = async (req, res) => {
    try {
        const {email, password} =req.body
        //validate user's credentials
        if (!(password && email)){
            return res.status(400).json({message:"Invalid password"});
        }
        //confirm user exist in database
        const checkUser = await User.findOne({email: email});

        //check if user does not exist in database
        if (!checkUser) {
            return res.status(404).json({message:"User does not exist"});
        };

        //if user exists in database, check if user password is correct
        const  checkPassword = await bcrypt.compare(password, checkUser.password);

        //if user password is not correct
        if (!checkPassword) {
            return res.status(404).json({message:"User password is not correct"});
        };

        //if user password is correct, tokenize the payload
        const TOKEN = {
            _id: checkUser._id,
        };

        const token = await jwt.sign(TOKEN, process.env.SECRET_KEY,{
            expiresIn: '5h',
        });

        // store the token in the cookie
        res.cookie('access-token', token);
        return res.status(202).json({message:'User Login successfully', token:token});


    } catch (error) {
        return res.status(500).json({ error: error.message, message: 'Internal Server Error' });
        
    }
};

exports.getUsers= async(req, res) => {
    try {
        const data = await User.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}; 

  
exports.getbyemail = async (req, res) => {
    try {
        const email= req.params.email;

        const data = await User.findOne({email:email});
        return res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
};







