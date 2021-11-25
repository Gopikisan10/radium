const jwt = require("jsonwebtoken")

const activityToken = async function (req, res, next) {
    let token = req.headers['x-auth-token']
    let validtoken = jwt.verify(token, 'radium')
    if (validtoken) {
        if (validtoken.userId === req.params.userId) {      //req.params.userId=> we are giving is in url i.e userId
            req.validtoken = validtoken;       //here we have created a key value pair=> key=validtoken and value=validtoken
            next()
        }
        else {
            res.status(403).send({ status: false, msg: "You are not authorised" })
        }
    }
    else {
        res.status(401).send({ status: false, msg: "The token is invalid" })
    }
}

module.exports.activityToken = activityToken
