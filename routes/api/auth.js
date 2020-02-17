const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//user models
const User =  require('../../models/user.model');

//@route    POST api/auth
//@desc     Auth new user
//@access   Public 

router.post('/', (req, res) => {
    const { email, password } = req.body;

    //Simple validataion
    if(  !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields!'})
    }
// check for existing user
User.findOne({ email})
    .then(user => {
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist!'});
        }
        //validate password
        bcrypt.compare(password, user.password)
            .then(isMatched => {
                if (!isMatched) {
                    return res.status(400).json({msg: 'Invalid credentials'});
                }
                jwt.sign(
                    { id: user.id},
                    config.get('jwtSecret'),
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                        res.json({
                            token,
                            user: {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        });
                    }
                )  
            })

    })
});

module.exports = router;