const validator = require("email-validator");

const validateEmail = function (req, res, next) {
    try {
        if(!(Object.keys(req.body).length > 0)){
            return res.status(400).send({ status:false, msg: "request body is empty" })
        }

        if(!req.body.email){
            return res.status(400).send({status:false,msg:"email is not there in the request body"})
        }
        //if value is not there or value is there with spaces
        if(!(typeof (req.body.email) === 'string' && req.body.email.trim().length > 0)){
            return res.status(400).send({status:false, msg:"Please provide email"})
        }
        
        let id = req.body.email
        let verifyemailid = validator.validate(id)
        if (verifyemailid) {
            return next();
        }
        return res.status(401).send({ status:false, msg: "You have entered an invalid email address!"})
    } catch (error) {
        console.log({ ErrorIs: error.message })
        res.status(500).send({ status: false, Errormsg: error.message })
    }
}

const validateNumber = function (req, res, next) {
    try {
        if(!(Object.keys(req.body).length > 0)){
            return res.status(400).send({ status:false, msg: "request body is empty" })
        }
        if(!req.body.mobile){
            return res.status(400).send({ status:false, msg: "Key value pair of mobile is empty" })
        }
        const Mobileno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (req.body.mobile.match(Mobileno)) {
            return next();
        }
        return res.status(400).send({ status:false, msg: "Invalid mobile number" })
    } catch (error) {
        console.log({ ErrorIs: error.message })
        res.status(500).send({ status: false, Errormsg: error.message })
    }
};

const validUrl=function(req,res,next){
    try{
        if(!(Object.keys(req.body).length > 0)){
            return res.status(400).send({ status:false, msg: "request body is empty" })
        }
        const logo=req.body.logoLink
        //if logo key value pair is not there
        if(!logo){
            return res.status(400).send({status:false,msg:"logo is not there in the request body"})
        }
        //if value is not there or value is there with spaces
        if(!(typeof (logo) === 'string' && logo.trim().length > 0)){
            return res.status(400).send({status:false, msg:"Please provide link for the logo"})
        }
        const arr= logo.split("/");
        if(arr.indexOf('https:')==-1) {
            return res.status(400).send({status:false,msg:"http is missing from the logolink"})
        }      
        if(arr.indexOf('functionup.s3.ap-south-1.amazonaws.com')==-1){
          return res.status(400).send({status:false,msg:"functionup.s3.ap-south-1.amazonaws.com is missing"})
        }     
        if(arr.indexOf('radium')==-1){
            return res.status(400).send({status:false,msg:"radium is missing from the logolink"})
        }

        const arr1=logo.split(".");
        if(!(["png","jpg","jpeg"].indexOf(arr1[arr1.length-1]) > -1)){
            return res.status(400).send({ status: false,msg:"Image extension is not available" })
        }
        return next()
     } catch (error) {
            console.log({ ErrorIs: error.message })
            res.status(500).send({ status: false, Errormsg: error.message })
        }
    };

module.exports.validateNumber = validateNumber
module.exports.validateEmail = validateEmail
module.exports.validUrl = validUrl