// Pulls in the required dependencies.
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Loads input validation.
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Loads User model.
const User = require("../../models/User");

// Register route: Pulls in the `errors` and `isValid` variables from our `validateRegisterInput(req.body)` function and checks the input validation.
router.post("/register", (req, res) => {
    // Form validation.
    const {errors, isValid } = validateRegisterInput(req.body);

        // Checks validation.
        if (!isValid) {
            return res.status(400).json(errors);
    }

    // If input is valid, uses MongoDB's `User.findOne()` to see if the user already exists.
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists."});
        } else {
            // If user is a new user, fills in the fields (name, email, password) with data sent in the body of the request.
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });
    
        // Uses `bcryptjs` to hash the password before storing it in the database.
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
    }
    });
});

// Login route: Pulls in the `errors` and `isValid` variables from our `validateRegisterInput(req.body)` function and checks the input validation.
router.post("/login", (req, res) => {
    // Form validation.
    const { errors, isValid } = validateLoginInput(req.body);

        // Check validation.
        if (!isValid) {
            return res.status(400).json(errors);
        }
    
    // If input is valid, uses MongoDB's `User.findOne()` to see if the user already exists.
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found."});
        }
        // If the user exists, uses bcryptjs to compare the submitted password with the hashed password in the database.
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // If passwords match, the `JWT Payload` is created.
                const payload = {
                    id: user.id,
                    name: user.name
                };
                // Signs the `jwt`, including the `payload`, `keys.secretOrKey` from `keys.js` and sets an expiration time for the `jwt`.
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 3600 // Expires in one hour (in seconds).
                    },
                    // If successful, the token is appended to a `Bearer` string that was set up in the `passport.js` file.
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect."
                });
            }
        });
    });
});

// Exports the router at the bottom of `users.js`, so that it can be used elsewhere.
module.exports = router;