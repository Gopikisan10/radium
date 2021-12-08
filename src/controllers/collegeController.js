const CollegeModel = require("../models/collegeModel");
const internModel = require("../models/internModel");


const isValid = function(value) {
    if (typeof (value) === 'undefined' || typeof (value) === 'null') { return false } //if undefined or null occur rather than what we are expecting than this particular feild will be false.
    if (value.trim().length == 0) { return false } //if user give spaces not any string eg:- "  " =>here this value is empty, only space is there so after trim if it becomes empty than false will be given. 
    if (typeof (value) === 'string' && value.trim().length > 0) { return true } //to check only string is comming and after trim value should be their than only it will be true.
}

const isValidRequestBody = function(requestBody) {
    return Object.keys(requestBody).length > 0   //  Object.keys will convert the values entered into request body into an array and                                            
}                                                //then check the length will check if the request body is greater than 0 i.e not empty then it will work

const createCollege = async function (req, res) {
    try {
        const requestBody = req.body;
     // Extract params
     const {name, fullName, logoLink} = requestBody; // Object destructuring requestBody=req.body for name we had to write req.body.name instead we are writing this

     // Validation starts
     if(!isValid(name)) {
        res.status(400).send({status: false, message: 'name is required'})
        return
    }
    const uniqueCollege = await CollegeModel.findOne({name:name});
   if(uniqueCollege) {
        res.status(400).send({status: false, message: `college is already created with ${name} collegeName`})
        return
    }

    if(!isValid(fullName)) {
        res.status(400).send({status: false, message: 'Full name is required'})
        return
    }
// Validation ends
    const collegeData = {name, fullName, logoLink}// to have only those fields into an object.
    const savedCollege = await CollegeModel.create(collegeData);

    res.status(201).send({status: true, message: `College created successfully`, data: savedCollege});
} catch (error) {
    res.status(500).send({status: false, message: error.message});
}
};

const getCollegeDetails = async function (req, res) {
    try {
        if (!isValidRequestBody(req.query)) {
            return res.status(400).send({ status: false, msg: "No query param received" });
        }
        if (!isValid(req.query.collegeName)) {
            return res.status(400).send({ status: false, message: 'In request query collegeName is required' })
        }
       const college = await CollegeModel.findOne({name:req.query.collegeName, isDeleted:false})
       if(!college){
          return res.status(404).send({ status: false, message: 'No data found for this college' })
       }
        const { name, fullName, logoLink } = college;
        const id = (college._id).toString()
        const interests = await internModel.find({ collegeId: id, isDeleted:false}).select({ name: 1, _id: 1, email:1, mobile:1 })
        if((Object.keys(interests).length > 0)){
            const internfromcollege= {
                name,
                fullName,
                logoLink,
                interests: interests
            }
            res.status(200).send({ status: true, message: "College data found successfully", data: internfromcollege });
         }
         if(!(Object.keys(interests).length > 0)){
            const internfromcollege= {
                name,
                fullName,
                logoLink,
                interests: "No student present for internship"
            }
            res.status(200).send({ status: true, message: "College data found successfully", data: internfromcollege });
         }
    }
    catch (error) {
        res.status(500).send({ status: false, Errormsg: error.message })
    }
};


module.exports.getCollegeDetails = getCollegeDetails;
module.exports.createCollege = createCollege;