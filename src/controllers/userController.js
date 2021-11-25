
const mongoose = require("mongoose");
const userModel = require('../models/userModel')

const createUser = async function (req, res) {
    try{
        if(req.body && Object.keys(req.body).length>0){
            let book = req.body
            let userDetails = await userModel.create(book)
            res.status(200).send({status:true, data:userDetails})

        }else{
            res.status(400).send({status:false,msg:"user detail invalid"})
        }
    }
    catch(err){
        res.status(500).send({status:false, msg:"error not occur"})
    }
    




    // let appType = req.headers['isfreeapp']
    // let userType
    // if(appType === 'false') {
    //     userType = false
    // } else {
    //     userType = true
    // }
    // userDetails.freeAppUser = req.isFreeAppUser//this attribute was set in req in the appMiddleware
    // let userCreated = await userModel.create(userDetails)
    // res.send({data: userCreated})
}



const getUser= async function(req,res){
    try{
        let user = await userModel.find({isDeleted: false})
            if (user && user.length>0) {
                res.status(200).send({status:true, data:user})
                
            }else{
                res.status(400).send({status:false, msg:'user is invalid'})

            }
        }
        catch(err){
            res.status(400).send({status:false, msg:'error occured'})
        }
    
    
}

const emailUpdate = async function(req,res){
    let token ;
    try{
        if(req.token._id == req.params.userId){
            let userId= req.params.userId
            let email = req.body.email
            let userDetails = await userModel.findOneAndUpdate({_id:userId},{email:email},{new:true})
            if(userDetails){
                res.status(200).send({status:true,data:userDetails})
            }else{
                res.status(404).send({status:false,message:"user not found"})
            }
        }else{
            res.status(404).send({status:false,message:"not authorized"})
        }
    }catch(err){
        res.status(500).send({status:false,msg:err.message})
    }

}

module.exports.createUser = createUser;
module.exports.getUser = getUser;
module.exports.emailUpdate = emailUpdate;