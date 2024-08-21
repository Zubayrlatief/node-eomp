import "dotenv/config.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
const { sign, verify } = Jwt;

// Function to hash a password
async function hashPassword(password) {
    const saltRounds = 10; // Number of salt rounds
    return await bcrypt.hash(password, saltRounds);
}

// Function to create a JWT token, including the hashed password
async function createToken(user) {
    const hashedPassword = await hashPassword(user.userPass);

    return sign(
        {
            emailAdd: user.emailAdd,
            userPass: hashedPassword,  // Store the hashed password
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '1h'
        }
    );
}

// Middleware to verify the JWT token
function verifyToken(req, res, next) {
    const token = req?.headers['authorization'];

    if (token) {
        try {
            const decoded = verify(token, process.env.SECRET_KEY);
            req.user = decoded;  // Attach decoded token data to the request object
            next();
        } catch (error) {
            res.status(403).json({
                status: res.statusCode,
                msg: "Access Denied, Incorrect information was provided."
            });
        }
    } else {
        res.status(401).json({
            status: res.statusCode,
            msg: "Please Log In."
        });
    }
}

export {
    createToken,
    verifyToken
};
