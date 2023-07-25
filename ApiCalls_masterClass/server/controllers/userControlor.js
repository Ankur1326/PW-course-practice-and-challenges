const User = require("../models/userModel")

exports.createUser = async (req, res) => {
    try {
        const {name, email} = req.body

        if (!name || !email) {
            throw new Error("name and email are requires")
        }

        const userExists = await User.findOne({email})

        if(userExists) {
            throw new error('email already exist')
        }

        const user = await User.create({
            name, 
            email
        })
        res.json({
            success: true,
            message: "User created successfully",
            user
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false, 
            message: error.message
        })
    }

    
}