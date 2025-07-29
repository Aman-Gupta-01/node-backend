import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) =>{
    let token;
    let authHeader = req.headers['authorization'];

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        console.log("Token:", token);
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded)=>{
            if (err) {
                res.status(401);
                throw new Error("User is not verified");
            }
        req.user = decoded.user;
        next()
        })
        if (!token) {
            res.status(401);
            throw new Error("Missing access token, or user is not verified")
        }
    }
}