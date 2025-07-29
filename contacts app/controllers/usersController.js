import asyncHandler from "express-async-handler"
import usersModel from "../models/usersModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"

// @desc register user
// @route GET /api/v1/users/register
// @access public
export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if ( !username || !email || !password) {
        res.status(400)
        throw new Error("All fields are required");
    }
    const isUserAlreadyAvailable = await usersModel.findOne({ email });
    console.log(isUserAlreadyAvailable, ":check");
    
    if (isUserAlreadyAvailable) {
        res.status(400)
        throw new Error("User is already registered with this email.");
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const registerUser = await usersModel.create({
        username,
        email,
        password: hashedPassword,
    });
    console.log(`User is created successfuly ${registerUser}`);
    
    if (registerUser) {
        res.status(201).json({
        message:"registration succsess",
        create_user: {
            username: registerUser.username,
            email: registerUser.email,
        }
        })
    } else {
        res.status(400);
        throw new Error("Vser data is not valid");
    }
})

// @desc login user
// @route GET /api/v1/users/login
// @access public
export const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body 
    if ( !email || !password) {
        res.status(400)
        throw new Error("All fields are required");
    }
    const user = await usersModel.findOne({ email })
    if (await bcrypt.compare(password, user.password)) {
        const access_token = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id
            }
        }, 
        process.env.ACCESS_TOKEN,
        { expiresIn: "15m" }
    )
        res.status(200).json({access_token})
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
})

// @desc get user detail
// @route GET /api/v1/users/current-user
// @access private
export const userDetails = asyncHandler(async (req, res) => {
    res.status(200).json(req.user)
})