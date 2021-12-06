const CollegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");


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
    const savedCollege = await CollegeModel.create(collegeData);

    res.status(201).send({status: true, message: `College created successfully`, data: savedCollege});
} catch (error) {
    res.status(500).send({status: false, message: error.message});
}
}

const getCollegeDetails = async function (req, res) {
    try {
        const filterQuery = { isDeleted: false }
        const queryParam = req.query
        if (!isValidRequestBody(queryParam)) {
            return res.status(400).send({ status: false, msg: "No query param received" });
        }
        if (!isValid(queryParam.collegeName)) {
            return res.status(400).send({ status: false, message: 'collegeName is required' })
        }
        const collegename = queryParam.collegeName
        filterQuery['collegename'] = collegename
       const college = await CollegeModel.findOne(filterQuery)
        const { name, fullName, logoLink } = college;
        const id = (college._id).toString()
        const interests = await internModel.find({ collegeId: id }).select({ name: 1, _id: 1, email:1, mobile:1 })
        const internfromcollege= {
            name,
            fullName,
            logoLink,
            interests: interests
        }
        res.status(201).send({ status: true, message: "College data found successfully", data: internfromcollege });
    }
    catch (error) {
        res.status(500).send({ status: false, Errormsg: error.message })
    }
};


module.exports.getCollegeDetails = getCollegeDetails;
module.exports.createCollege = createCollege;