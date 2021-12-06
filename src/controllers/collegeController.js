const collegeModel = require("../models/collegeModel");

const isValid = function(value) {
    if(typeof value === 'undefined' || value === null) return false
    if(typeof value === 'string' && value.trim().length === 0) return false
    return true;
}

const isValidRequestBody = function(requestBody) {
    return Object.keys(requestBody).length > 0   //  Object.keys will convert the values entered into request body into an array and                                            
}                                                //then check the length will check if the request body is greater than 0 i.e not empty then it will work

const createCollege = async function (req, res) {
    try {
        const requestBody = req.body;
        if(!isValidRequestBody(requestBody)) {
            res.status(400).send({status: false, message: 'Invalid request parameters. Please provide college details'})
            return
        }

     // Extract params
     const {name, fullName, logoLink} = requestBody; // Object destructuring requestBody=req.body for name we had to write req.body.name instead we are writing this

     // Validation starts
     if(!isValid(name)) {
        res.status(400).send({status: false, message: 'name is required'})
        return
    }

    if(!isValid(fullName)) {
        res.status(400).send({status: false, message: 'Full name is required'})
        return
    }

    if(!isValid(logoLink)) {
        res.status(400).send({status: false, message: 'Link is required'})
        return
    }
    // Validation ends
    const collegeData = {name, fullName, logoLink}// to have only those fields into an object.
    const savedCollege = await collegeModel.create(collegeData);

    res.status(201).send({status: true, message: `College created successfully`, data: savedCollege});
} catch (error) {
    res.status(500).send({status: false, message: error.message});
}
}

module.exports.createCollege = createCollege;