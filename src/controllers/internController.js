const internModel = require("../models/internModel");
const CollegeModel = require("../models/collegeModel");

const checkforbody = function (checkReqBody) {
    let check = Object.keys(checkReqBody).length > 0; //Object.keys(objectname)=> gives array of keys. If we add .length than it will give length of keys.
    return check; //check=> contain true or false depend upon req.body [if req.body=empty=>False] or [if req.body=something=>True]
}

const validDetail = function (value) {
    if (typeof (value) === 'undefined' || typeof (value) === 'null') { return false } //if undefined or null occur rather than what we are expecting than this particular feild will be false.
    if (value.trim().length == 0) { return false } //if user give spaces not any string eg:- "  " =>here this value is empty, only space is there so after trim if it becomes empty than false will be given. 
    if (typeof (value) === 'string' && value.trim().length > 0) { return true } //to check only string is comming and after trim value should be their than only it will be true.
}

const createIntern = async function (req, res) {
    try {
        const checkReqBody = req.body;
        if (!checkforbody(checkReqBody)) {
            return res.status(400).send({ status: false, message: 'Please provide intern details' })
        }

        const { name, email, mobile, collegeName } = checkReqBody //object destructuring => becz it will be easy to use for checking perpuse now we can use "name" in place of req.body.name
        if (!validDetail(name)) {
            return res.status(400).send({ status: false, message: 'name is required' })
        }
        if (!validDetail(email)) {
            return res.status(400).send({ status: false, message: 'email is required' })
        }

        const isEmailAlreadyUsed = await internModel.findOne({ email }); // {email: email} object shorthand property

        if (isEmailAlreadyUsed) {
            return res.status(400).send({ status: false, message: `${email} email address is already registered` })
        }

        if (!validDetail(mobile)) {
            return res.status(400).send({ status: false, message: 'mobile is required' })
        }
        if (!validDetail(collegeName)) {
            return res.status(400).send({ status: false, message: 'collegeName is required' })
        }

        let findCollegeId = await CollegeModel.findOne({ name: collegeName });
        if (!findCollegeId) {
            return res.status(404).send({ status: false, message: 'CollegeId not found from your CollegeName' })
        }
        const collegeId = findCollegeId._id
        let createIntern = { name, email, mobile, collegeId }; //this is done becz to have only those feild which passes the above criteria and put all those feild into a object.
        let savedintern = await internModel.create(createIntern);
        res.status(201).send({ status: true, message: "Intern created successfully", data: savedintern });
    }
    catch (error) {
        console.log({ ErrorIs: error.message })
        res.status(500).send({ status: false, Errormsg: error.message })
    }
};

const getCollegeDetails = async function (req, res) {
    try {
        const filterQuery = { isDeleted: false }
        const queryParam = req.query
        if (!checkforbody(queryParam)) {
            return res.status(400).send({ status: false, msg: "No query param received" });
        }
        if (!validDetail(queryParam.collegeName)) {
            return res.status(400).send({ status: false, message: 'collegeName is required' })
        }
        const name = queryParam.collegeName
            filterQuery['name'] = name
        const college = await CollegeModel.findOne(filterQuery)   //.populate('collegeId')
        console.log(college)
        const a= await internModel.find().populate('collegeId')
        console.log(a)
        res.status(201).send({ status: true, message: "College data found successfully", data: a });
    }
    catch (error) {
        res.status(500).send({ status: false, Errormsg: error.message })
    }
};

module.exports.createIntern = createIntern;
module.exports.getCollegeDetails=getCollegeDetails;