const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")


const logincreate = async function (req, res) {
    try {
        let credit = req.body
        let userId = req.body.name;
        let passwordId = req.body.password;
        if (credit && userId && passwordId) {

            let user = await userModel.findOne({ name: userId, password: passwordId, isDeleted: false });
            if (user) {
                payload = { _id: user._id }
                let token = jwt.sign(payload, "mysecretekey")
                console.log(token)
                res.header("x-auth-token", token)

                res.status(200).send({ status: true})

            } else {
                res.status(401).send({ status: false, msg: "username and password is not valid" })
            }
        } 
        else {
            res.status(400).send({ status: false, msg: "request body must contain username and password" })
        }
    } catch (err) {
        res.status(500).send({ status: false, msg: "error occur", err })

    }
}


const getDetails= async function(req,res){
    let token ;
    try{
        if(req.token._id == req.params.userId){
            let userId= req.params.userId
            let userDetails = await userModel.findOne({_id:userId,isDeleted:false})
            if(userDetails){
                res.status(200).send({status:true,data:userDetails})
            }else{
                res.status(404).send({status:false,message:"user not found"})
            }
        }else{
            res.status(404).send({status:false,message:"not authorized"})
        }
    }catch(err){
        res.status(500).send({status:false,message:err.message})
    }
}




module.exports.logincreate = logincreate;
module.exports.getDetails = getDetails;