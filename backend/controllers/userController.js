const User = require('../models/userModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createUser = async (req , res) => {
    const {firstName , lastName , username , email , password, birthDate , isRenter , phone} = req.body
    if(!firstName ||!lastName ||!username||!email||!password||!birthDate ||!phone) {
       return res.status(400).json({ 'message': 'Username and password are required.' });
    }
    const duplicate = await User.findOne({ username }).exec();
    if (duplicate) {console.log('conflict');
    return res.sendStatus(409);} //Conflict

    try {
            const hashedPwd = await bcrypt.hash(password, 10);
            const user = await User.create({firstName , lastName , username , email , hashedPwd, birthDate , isRenter , phone})
            console.log(user);
            const roles = Object.values(user.roles).filter(Boolean);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": user.username,
                        "roles": roles
                    }
                },
                process.env.ACSSES_TOKEN_SECRET,
                { expiresIn: '30s' }
            );
            const refreshToken = jwt.sign(
                { "username": user.username },
                process.env.REFRESH_TOKEN_SECRET,
                { expiresIn: '1d' }
            );
                   // Saving refreshToken with current user
        user.refreshToken = refreshToken;
        const result = await user.save();
        const id = user._id
        console.log(result);
         res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: "none", maxAge: 24 * 60 * 60 * 1000 });

         // Send authorization roles and access token to user
            res.status(200).json({result,accessToken,id});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const handleLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    const foundUser = await User.findOne({username: username }).exec();
    if (!foundUser) {
        console.log("no usr like this ");
        return res.sendStatus(401)}; //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(password, foundUser.hashedPwd);
    if (match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        // create JWTs
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "username": foundUser.username,
                    "roles": roles
                }
            },
            process.env.ACSSES_TOKEN_SECRET,
            { expiresIn: '30s' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '15m' } 
        );
        // Saving refreshToken with current user
        foundUser.refreshToken = refreshToken;
        const id = foundUser._id
        const result = await foundUser.save();
        console.log(result);
         res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: "none", maxAge: 24 * 60 * 60 * 1000 });

         // Send authorization roles and access token to user
         res.json({  roles,accessToken,result,id });
 
    } else {
        res.sendStatus(401);
    }
}

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies
    console.log("cookies:", cookies);
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    console.log(refreshToken);
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) return res.sendStatus(403); //Forbidden 
    // evaluate jwt 
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) return res.sendStatus(403);
            const roles = Object.values(foundUser.roles);
            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "username": decoded.username,
                        "roles": roles
                    }
                },
                process.env.ACSSES_TOKEN_SECRET,
                { expiresIn: '30s' }
            );
            console.log(accessToken);
            res.json({ accessToken,roles })
        }
    );
}

const handleLogout = async (req, res) => {
    // On client, also delete the accessToken

    const cookies = req.cookies;
    console.log(cookies);
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;
    console.log(refreshToken);
    // Is refreshToken in db?
    const foundUser = await User.findOne({ refreshToken }).exec();
    console.log(foundUser);
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });
        return res.sendStatus(204);
    }

    // Delete refreshToken in db
    foundUser.refreshToken = '';
    const result = await foundUser.save();
    console.log(result);

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });
    res.sendStatus(204);
}

const getUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users)
}

const getUser = async (req,res) => {

    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such user'})
    }
    const user = await User.findById(id)
    if(!user) {
        return res.status(404).json({mssg:'no such user'})
    }
    res.status(200).json({user})
}


const deleteUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such user'})
    }
    const user = await User.findOneAndDelete({_id:id})
    if(!user) {
        return res.status(404).json({mssg:'no such user'})
    }
    res.status(200).json({user})
}

const updateUser = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such user'})
    }
    const user = await User.findByIdAndUpdate({_id:id} , {
        ...req.body
    })
    if(!user) {
        return res.status(404).json({mssg:'no such user'})
    }
    res.status(200).json({user})
}


module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser,
    handleLogin,
    handleRefreshToken,
    handleLogout
}