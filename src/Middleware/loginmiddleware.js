const jwt = require("jsonwebtoken")

const activityToken = async function (req, res, next) {
    let token = req.headers['x-auth-token']
    let validtoken = jwt.verify(token, 'radium')
    if (validtoken) {
        req.validtoken=validtoken;       //here we have created a key value pair=> key=validtoken and value=validtoken
        next()
    }
    else {
        res.send({status: false,msg:"The token is invalid"})
    }
}

module.exports.activityToken = activityToken
