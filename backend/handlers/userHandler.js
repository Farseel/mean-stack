const { users } = require('../models')
const passport = require('passport')

const saveUserDetails = async(req,res) =>{
    let user = new users(req.body)
    let userStatus = await users.findOne({$and:[{email:user.email},{username:user.username}]})
    if(userStatus == null){
        await user.save((err,user)=>{
            if(err){
                let error = Object.values(err.errors)[0].message
                res.status(400).send(error)
            }
            else{
                res.status(200).send({'dataStatus':'Saved Details'})
            }
        })
    }
    else{
        res.status(400).send('User already existed')
    }
}


module.exports = {
    saveUserDetails
}