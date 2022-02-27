const customerModel = require("../Models/customerModel");

// ---------------------- Create new Customer : API ---------------------

const newCustomer = async function (req, res) {
  try {
    let customer = req.body; // Requesting customer detaits from client
    let { emailID, mobileNumber } = customer; // Destructuring email and mobile number for validation 
    // validation Email and mobile number :-
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailID))) {
      return res.status(400).send({ status: false, message: `${emailID} should be a valid email address` })
    }
    if (!(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(mobileNumber))) {
      return res.status(400).send({ status: false, message: `${mobileNumber} is not a valid number` })
    }
    let savedCustomer = await customerModel.create(customer);   // creating customer
    return res.status(201).send({ data: savedCustomer }); // Response of created customer
  }
  catch (error) {
    return res.status(500).send({ msg: error.message })  // Other error
  }
};

// ----------------------------- get Custommer details : API --------------------

const getCustomer = async function (req, res) {
  try {
    if (req.user) { 
      let statusActive = req.params.status  // requesting status from params
      let check = await customerModel.find({ status: statusActive })  // Finding all the status : active customet
      if (check.length > 0) {
        return res.status(200).send({ status: true, data: check }) // Response of customer details
      }
      else {
        return res.status(404).send("No active user found")  
      }
    } else {
      return res.status(401).send("you need to login to perform this task") // Authentitication needed
    }
  }
  catch (error) {
    return res.status(500).send({ msg: "error-response-status" })  // Other errors
  }
}

// --------------------- Update customer details :API ----------------------------

const updateCustomer = async function (req, res) {
  try {
    if(req.user){
    const customerId = req.params._id // Requesting id from params
    let body = req.body   // Requesting data from body which we have to modify
    let {firstName, lastName, mobileNumber, DOB,emailID , address} = body //Destructure the data because we need to update whole data of single data.
    const check = await customerModel.findOne({ _id: customerId })
    const id = check._id 
    if (req.user.userId == id) {  //Authorization for updating customer 
      const updatedCustomer = await customerModel.findOneAndUpdate({ _id: customerId }, { firstName: firstName, lastName: lastName,  mobileNumber: mobileNumber, DOB: DOB, emailID:emailID, address:address }, { new: true })
      return res.status(200).send({ status: true, message: 'Customer updated successfully', data: updatedCustomer });
    } else {
      return res.status(404).send({ msg: "invalid Customer" })
    }
  }else{
    return res.status(401).send("you need to login to perform this task") // Authentitication failed
  }
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message }); //Other errors
  }
}

// ---------------------delete customer : API -----------------------

const deleteCustomer = async function (req, res) {
  try {
    if (req.user) {
      let DeleteCust = req.params._id;      // Requesting id from params
      if (req.user.userId != DeleteCust) { //Authorization checking
        return res.status(401).send("you are not authorized")
      }
      let deleteData = await customerModel.findOneAndDelete({ _id: DeleteCust }) // Find and delete customer 
      if (!deleteData) {
        return res.status(404).send({ status: false, msg: "Given data is Invalid" });
      }
      return res.status(200).send({ msg: "Succesful", data: deleteData });  // Deleted data response
    } else {
      return res.status(401).send("you need to login to perform this task") //If Authentication failed
    }
  }
  catch (error) {
    return res.status(500).send({ msg: error }); // Others errors
  }
}


module.exports = { newCustomer, getCustomer, updateCustomer, deleteCustomer };

