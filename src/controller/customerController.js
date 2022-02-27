const customerModel = require("../Models/customerModel");

// ----------------------

const newCustomer = async function (req, res) {
  try {
    let customer = req.body;
    let { emailID, mobileNumber } = customer;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID))) {
      return res.status(400).send({ status: false, message: `${emailID} should be a valid email address` })
    }
    if (!(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(mobileNumber))) {
      return res.status(400).send({ status: false, message: `${mobileNumber} is not a valid number` })
    }
    let savedCustomer = await customerModel.create(customer);
    return res.status(201).send({ data: savedCustomer });
  }
  catch (error) {
    return res.status(500).send({ msg: error.message })
  }
};

// -----------------------------

const getCustomer = async function (req, res) {
  try {
    if (req.user) {
      let statusActive = req.params.status
      let check = await customerModel.find({ status: statusActive })
      console.log(statusActive)
      if (check.length > 0) {
        return res.status(200).send({ status: true, data: check })
      }
      else {
        return res.status(404).send("No active user found")
      }
    } else {
      return res.status(401).send("you need to login to perform this task")
    }
  }
  catch (error) {
    return res.status(500).send({ msg: "error-response-status" })
  }
}

// ---------------------

const updateCustomer = async function (req, res) {
  try {
    if(req.user){
    const customerId = req.params._id
    

    let body = req.body
    let {firstName, lastName, mobileNumber, DOB,emailID , address} = body

    const check = await customerModel.findOne({ _id: customerId })
    const id = check._id
   
    if (req.user.userId == id) {
      const updatedCustomer = await customerModel.findOneAndUpdate({ _id: customerId }, { firstName: firstName, lastName: lastName,  mobileNumber: mobileNumber, DOB: DOB, emailID:emailID, address:address }, { new: true })
      return res.status(200).send({ status: true, message: 'Customer updated successfully', data: updatedCustomer });
    } else {
      return res.status(404).send({ msg: "invalid Customer" })
    }
  }else{
    return res.status(401).send("you need to login to perform this task")
  }
  } catch (error) {
    
    return res.status(500).send({ status: false, message: error.message });
  }
}



// ---------------------
const deleteCustomer = async function (req, res) {
  try {
    if (req.user) {
      let DeleteCust = req.params._id;
      if (req.user.userId != DeleteCust) {
        return res.status(401).send("you are not authorized")
      }
      let deleteData = await customerModel.findOneAndDelete({ _id: DeleteCust })
      if (!deleteData) {
        return res.status(404).send({ status: false, msg: "Given data is Invalid" });
      }
      return res.status(200).send({ msg: "Succesful", data: deleteData });
    } else {
      return res.status(401).send("you need to login to perform this task")
    }
  }
  catch (error) {
    return res.status(500).send({ msg: error });
  }
}


module.exports = { newCustomer, getCustomer, updateCustomer, deleteCustomer };

