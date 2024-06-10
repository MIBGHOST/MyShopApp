const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const { generateToken }= require('../utils/generateToken');
const userModel = require('../models/user-model');

module.exports.registerUser = async function(req, res){
    try{
        let { email, password, fullname} = req.body;

        let user = await userModel.findOne({email: email});
        if(user)
            return res.status(401).send('this email already exists, register with different email.')

        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(password, salt, async function(err, hash){
                if(err) return res.send(err.message);
                else{
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname,
                    });
                    let token = generateToken(user); 
                    res.cookie("token", token);
                    res.send("user created successfully");
                }
            })
        });

    }catch(err){
        console.log(err.message);
    }
};

module.exports.loginUser = async function(req, res){
    let {email, password} = req.body;

    let user = await userModel.findOne({email: email});
    if(!user) return res.send('Bad Credentials');
    bcrypt.compare(password, user.password, function(err, result){
        if(result){
            let token = generateToken(user);
            res.cookie('token', token);
            res.redirect("/shop");
            
        }else{
            return res.send('Bad Credentials');
        }
    });
};

module.exports.logoutUser = function(req, res){
    res.cookie("token", "");
    res.redirect("/");
};