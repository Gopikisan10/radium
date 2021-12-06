const validator = require("email-validator");

const validateEmail = function (req, res, next) {
    try {
        let id = req.body.email
        let verifyemailid = validator.validate(id)
        if (verifyemailid) {
            return next();
        }
        return res.status(200).send("You have entered an invalid email address!")
    } catch {
        res.status(400).send({msg:"Invalid email-id"})
    }
}

const validateNumber = function (req, res, next) {
    try {
      const Mobileno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (req.body.mobile.match(Mobileno)) {
            return next();
        }
        return res.status(400).send({msg:"Invalid mobile number"})
    } catch {
        res.status(400).send("you enter wrong key")
    }
}


module.exports.validateNumber = validateNumber
module.exports.validateEmail = validateEmail